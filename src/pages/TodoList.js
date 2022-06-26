import {useDispatch, useSelector} from "react-redux";
import TodoListItem from "./TodoListItem";
import {useEffect} from "react";
import {fetchServices} from "../api/GetItems";
import {actions} from "../store/ToDoSlice";
import {ADD_ELEMENT_SUCCESS_FALSE} from "../store/Action";


export default function TodoList() {
    const {items, loading, error} = useSelector((store) => store.todosStore)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServices)
        dispatch(actions[ADD_ELEMENT_SUCCESS_FALSE]())
    }, [])


    const renderedListItems = items.map((todo) => <TodoListItem key={todo.id} todo={todo}/>)
    return (
        <>
            {error && <div className="err"> {error} </div>}
            {loading && <div className="loader">Loading...</div>}
            {renderedListItems}
        </>
    )
}