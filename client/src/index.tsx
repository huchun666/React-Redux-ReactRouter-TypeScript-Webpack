import "@babel/polyfill";
import * as React from 'react';
import * as ReactDOM from "react-dom";
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware  } from 'redux';
import Root from "./router";
import './assests/style/base.scss'
import rootReducer from "./reducers/index";

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
)

ReactDOM.render(
    <Router>
        <Root store={store}/>
    </Router>,
    document.getElementById("root")
)