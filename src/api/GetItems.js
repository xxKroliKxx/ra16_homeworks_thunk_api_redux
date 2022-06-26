import {FETCH_SERVICES_FAILURE, FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS} from "../store/Action";
import {actions} from "../store/ToDosSlice";

const REACT_APP_API_URL = 'http://localhost:7070/api/services'

export const fetchServices = async dispatch => {
    dispatch(actions[FETCH_SERVICES_REQUEST]());
    try {
        const response = await fetch(`${REACT_APP_API_URL}`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(actions[FETCH_SERVICES_SUCCESS]({items: data}));
    } catch (e) {
        dispatch(actions[FETCH_SERVICES_FAILURE]({error: e.message}));
    }
}