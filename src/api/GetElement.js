import {
    FETCH_ELEMENT_FAILURE,
    FETCH_ELEMENT_REQUEST, FETCH_ELEMENT_SUCCESS,
} from "../store/Action";
import {actions} from "../store/ToDoSlice";

const REACT_APP_API_URL = 'http://localhost:7070/api/services/'

export const fetchElement = (id) => async dispatch => {
    try {
        dispatch(actions[FETCH_ELEMENT_REQUEST]());
        const response = await fetch(`${REACT_APP_API_URL + id}`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(actions[FETCH_ELEMENT_SUCCESS]({item: data}));
    } catch (e) {
        dispatch(actions[FETCH_ELEMENT_FAILURE]({error: e.message}));
    }
}