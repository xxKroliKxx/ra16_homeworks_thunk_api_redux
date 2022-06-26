import {FETCH_SERVICES_FAILURE, FETCH_SERVICES_REQUEST} from "../store/Action";
import {actions} from "../store/ToDosSlice";
import {fetchServices} from "./GetItems";

const REACT_APP_API_URL = 'http://localhost:7070/api/services/'

export const removeServices = (id) => async (dispatch) => {
    dispatch(actions[FETCH_SERVICES_REQUEST]());
    try {
        const response = await fetch(`${REACT_APP_API_URL + id}`, {method: 'DELETE'})
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        dispatch(fetchServices)
    } catch (e) {
        dispatch(actions[FETCH_SERVICES_FAILURE]({error: e.message}));
    }
}