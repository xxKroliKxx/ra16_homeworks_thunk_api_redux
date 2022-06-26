import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchElement} from "../api/GetElement";
import {actions} from "../store/ToDoSlice";
import {FETCH_ELEMENT_REQUEST} from "../store/Action";
import {saveElement} from "../api/SaveElement";

export default function ToDoEditing() {
    const {id} = useParams();
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [content, setContent] = useState("");

    const {item, loading, error, success} = useSelector((store) => store.todoStore)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!item || !item.id) return
        setName(item.name)
        setPrice(item.price)
        setContent(item.content)
    }, [item])

    useEffect(() => {
        if (!success) {
            return
        }
        navigate('/services')
    }, [success])

    useEffect(() => {
        dispatch(fetchElement(id))
    }, [])


    const onClickCancel = () => {
        dispatch(actions[FETCH_ELEMENT_REQUEST]())
        navigate('/services')
    }

    const onClickSave = () => {
        dispatch(saveElement({
            id: Number(id),
            name: name,
            price: price,
            content: content,
        }))
    }

    const page =
        <div className={'to-do-item'}>
            <span>Название</span>
            <input type={'text'} value={name} onChange={(e) => {
                setName(e.currentTarget.value)
            }
            }/>
            <span>Стоимость</span>
            <input type={'text'} value={price} onChange={(e) => {
                setPrice(Number(e.currentTarget.value))
            }
            }/>
            <span>Описание</span>
            <input type={'text'} value={content} onChange={(e) => {
                setContent(e.currentTarget.value)
            }
            }/>
            <div className={'to-do-buttons'}>
                <button onClick={onClickSave}>Save</button>
                <button onClick={onClickCancel}>Cancel</button>
            </div>
        </div>

    console.log(item, loading, error, success)
    return (
        <>
            {error && <div className="err"> {error} </div>}
            {loading && <div className="loader">Loading...</div>}
            {!loading && !error && page}
        </>
    )
}
