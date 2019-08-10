import { Dispatch } from 'redux';

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

    fetch('https://cors-anywhere.herokuapp.com/https://lamppoststudios.api-us1.com/api/3/contacts', {
        headers: {
            'Api-Token': '0f7e5c9167768f6bb0a6e09e335ce464da7cb5e7008b989f0057266c26342424a4d8d3e5',
        },
    })
        .then(res => res.json())
        .then((contacts: any) => {
            dispatch(getContactsSuccess(contacts.contacts));
        })
        .catch(err => {
            dispatch(getContactsFailure(err));
    });
};

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