import {useDispatch} from "react-redux";
import {removeServices} from "../api/RemoveItems";
import {useNavigate} from "react-router-dom";


export default function TodoListItem({todo}) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const removedClick = () => {
        dispatch(removeServices(todo.id))
    }

    const editClick = () => {
        navigate('/services/' + todo.id)
    }

    return (
        <>
            <div className={'todo'}>
                <div className='todo-text'>{todo.name}</div>
                <div className='todo-price'>{todo.price}</div>
                <button onClick={removedClick} className={'button-removed'}>X</button>
                <button onClick={editClick} className={'button-edit'}>&#9998;</button>
            </div>
        </>
    )

}