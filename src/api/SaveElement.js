import {
    ADD_ELEMENT_SUCCESS,
    FETCH_ELEMENT_FAILURE,
} from "../store/Action";
import {actions} from "../store/ToDoSlice";

const REACT_APP_API_URL = 'http://localhost:7070/api/services'

export const saveElement = (element) => async dispatch => {
    try {
        const response = await fetch(`${REACT_APP_API_URL}`,
            {
                headers: {'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify(element)
            })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        dispatch(actions[ADD_ELEMENT_SUCCESS]());
    } catch (e) {
        dispatch(actions[FETCH_ELEMENT_FAILURE]({error: e.message}));
    }
}