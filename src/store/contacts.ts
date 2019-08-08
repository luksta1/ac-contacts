import { Dispatch } from 'redux';

// action types
const GET_CONTACTS_FETCH = 'GET_CONTACTS_FETCH';
const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';
const GET_CONTACTS_FAILURE = 'GET_CONTACTS_FAILURE';

// action creators
const getContactsFetch = () => ({ type: GET_CONTACTS_FETCH });
const getContactsSuccess = () => ({ type: GET_CONTACTS_SUCCESS });
const getContactsFailure = (error: string) => ({ type: GET_CONTACTS_FAILURE, error });

// thunk
export const getContacts = () => (dispatch: Dispatch) => {
    dispatch(getContactsFetch());

    fetch('https://lamppoststudios.api-us1.com/api/3/contacts')
        .then(res => res.json())
        .then(() => {
            dispatch(getContactsSuccess());
        })
        .catch(err => {
            dispatch(getContactsFailure(err));
    });
};

// initial state
const initialState: Object = {

}

// reducer
export default (state = initialState, action) => {
    switch(action.type) {
        case GET_CONTACTS_FETCH:
            return {
                ...state,
            };
        
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
            };

        case GET_CONTACTS_FAILURE:
            return {
                ...state,
            };
    }
}