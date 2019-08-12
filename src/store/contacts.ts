import { Dispatch } from 'redux';
import { calculateTotalValue, collectTags, validateString } from '../helpers';

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

    fetch('https://cors-anywhere.herokuapp.com/https://lamppoststudios.api-us1.com/api/3/contacts?include=contactData,contactTags.tag,contactDeals.deal&status=1&limit=100', {
        headers: {
            'Api-Token': '0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5',
        },
    })
        .then(res => res.json())
        .then((contactsRes: any) => contactsRes.contacts.filter((contact: any) => {
            return (validateString(contact.firstName) && validateString(contact.lastName))
        }))
        .then((filteredContacts) => {
            Promise.all(filteredContacts.map(async(currentContact: any) => (
                await fetch(`https://cors-anywhere.herokuapp.com/https://lamppoststudios.api-us1.com/api/3/contacts/${currentContact.id}`, {
                    headers: {
                        'Api-Token': '0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5',
                    },
                })
                    .then(res => res.json())
                    .then((contactDetailRes: any) => {
                        const { contact, contactData, deals } = contactDetailRes;
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
                                tags: ["test", "test2"],
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