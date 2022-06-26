import {createSlice} from '@reduxjs/toolkit'
import {FETCH_SERVICES_FAILURE, FETCH_SERVICES_REQUEST, FETCH_SERVICES_SUCCESS} from "./Action";


const todosSlice = createSlice({
        name: 'todosState',
        initialState: {
            items: [],
            loading: false,
            error: null,
        },

        reducers: {
            [FETCH_SERVICES_REQUEST](state) {
                state.items = []
                state.loading = true
                state.error = null
            },

            [FETCH_SERVICES_FAILURE](state, action) {
                const {error} = action.payload;
                state.items = []
                state.loading = false
                state.error = error
            },

            [FETCH_SERVICES_SUCCESS](state, action) {
                const {items} = action.payload;
                state.items = items
                state.loading = false
                state.error = null
            },
        }
    }
)

export const actions = todosSlice.actions
export default todosSlice.reducer