import React from 'react';
import ReactDOM from 'react-dom';
import App from "./views/program/App";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Notification from "./components/Notification";
import 'react-toastify/dist/ReactToastify.css';
import "./theme.css";
import Login from "./views/login/Login";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<NoMatch/>}/>
        </Routes>
        <Notification/>
    </BrowserRouter>, document.getElementById('root'));

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}