import { Dispatch } from 'redux';
import { API_TOKEN, API_URI, CORS_API_HOST } from '../constants';
import { calculateTotalValue, validateString, validateTags } from '../helpers';

// action types
const GET_CONTACTS_FETCH = 'GET_CONTACTS_FETCH';
const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE';

// action creators
const getContactsFetch = () => ({ type: GET_CONTACTS_FETCH });
const getContactsSuccess = (contactsList: any) => ({ type: GET_CONTACTS_SUCCESS, contactsList });
const getContactsFailure = (error: string) => ({ type: GET_CONTACTS_FAILURE, error });

// thunk
export const getContacts = () => (dispatch: Dispatch) => {
    dispatch(getContactsFetch());

    fetch(`${CORS_API_HOST}/${API_URI}/contacts?include=contactData,contactTags.tag,contactDeals.deal&status=1&limit=100`, {
        headers: {
            'Api-Token': API_TOKEN,
        },
    })
        .then(res => res.json())
        .then((contactsRes: any) => contactsRes.contacts.filter((contact: any) => {
            return (validateString(contact.firstName) && validateString(contact.lastName))
        }))
        .then((filteredContacts) => {
            Promise.all(filteredContacts.map(async(currentContact: any) => (
                await fetch(`${CORS_API_HOST}/${API_URI}/contacts/${currentContact.id}`, {
                    headers: {
                        'Api-Token': API_TOKEN,
                    },
                })
                .then(res => res.json())
                .then(async(contactDetailRes: any) => {
                    const { contact, contactData, deals } = contactDetailRes;
                    const tags = await getContactTags(contact.id)
                    const location = contactData
                    ? {
                        city: contactData[0].geoCity,
                        state: contactData[0].geoState,
                        country: contactData[0].geoCountry2,
                    }
                    : null;

                    return (
                        {
                            contact: `${contact.firstName} ${contact.lastName}`,
                            deals: deals.length,
                            id: contact.id,
                            location: location,
                            tags: tags,
                            totalValue: calculateTotalValue(deals),
                        }
                    )
                }))))
                .then((res) => {
                    dispatch(getContactsSuccess(res));
                })
            })
        .catch(err => {
            dispatch(getContactsFailure(err));
    });
};

export const getContactTags = (contactId:string) => {
    return new Promise(resolve => {
        fetch(`${CORS_API_HOST}/${API_URI}/contacts/${contactId}/contactTags`, {
            headers: {
                'Api-Token': API_TOKEN,
            },
        })
        .then(res => res.json())
        .then((returnedTags) => {
            Promise.all(returnedTags.contactTags.map(async(tagObj: any) => (
                await fetch(`${CORS_API_HOST}/${API_URI}/tags/${tagObj.id}`, {
                        headers: {
                            'Api-Token': API_TOKEN,
                        },
                })
                .then(res => res.json())
                .then((tag: any) => {
                    return tag.tag !== undefined ? tag.tag.tag : null;
                })
            )))
            .then((tags: any[]) => {
                resolve(validateTags(tags));
            })
        })
        .catch(err => {
            console.error(err);
        })
    })
}


// initial state
const initialState: Object = {
    contactsList:[],
    error: null,
    isLoading: false,
}

// reducer
export default (state = initialState, action: ContactAction) => {
    switch(action.type) {
        case GET_CONTACTS_FETCH:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contactsList: action.contactsList,
                isLoading: false,
                error: null,
            };

        case GET_CONTACTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };

        default:
            return state;
    }
}