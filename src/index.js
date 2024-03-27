import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UsecontextFun } from "./UserContext/Usercontext1";
// import Login1 from "./Login1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UsecontextFun>
        <App />
    </UsecontextFun>
);
reportWebVitals();