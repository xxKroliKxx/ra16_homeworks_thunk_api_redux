import './App.css';
import {Provider} from 'react-redux'
import {store} from './store/Store'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import ToDoEditing from "./pages/ToDoEditing";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/services/:id" element={<ToDoEditing/>}/>
                    <Route path="/services" element={<Main/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
