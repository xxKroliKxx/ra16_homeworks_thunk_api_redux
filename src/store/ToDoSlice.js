import {createSlice} from '@reduxjs/toolkit'
import {
    ADD_ELEMENT_SUCCESS, ADD_ELEMENT_SUCCESS_FALSE,
    FETCH_ELEMENT_FAILURE,
    FETCH_ELEMENT_REQUEST,
    FETCH_ELEMENT_SUCCESS,
} from "./Action";


const todoSlice = createSlice({
        name: 'todoState',
        initialState: {
            item: {},
            loading: false,
            error: null,
            success: false,
        },

        reducers: {
            [FETCH_ELEMENT_REQUEST](state) {
                state.item = {}
                state.loading = true
                state.error = null
                state.success = false
            },

            [FETCH_ELEMENT_FAILURE](state, action) {
                const {error} = action.payload;
                state.item = {}
                state.loading = false
                state.error = error
                state.success = false
            },

            [FETCH_ELEMENT_SUCCESS](state, action) {
                const {item} = action.payload
                state.item = item
                state.loading = false
                state.error = null
                state.success = false
            },

            [ADD_ELEMENT_SUCCESS](state) {
                state.item = {}
                state.loading = false
                state.error = null
                state.success = true
            },

            [ADD_ELEMENT_SUCCESS_FALSE](state) {
                state.item = {}
                state.loading = false
                state.error = null
                state.success = false
            }
        }
    }
)

export const actions = todoSlice.actions
export default todoSlice.reducer