import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";
import * as sessionActions from './actions/session_actions';
import * as bookActions from './actions/book_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }


    ReactDOM.render(<Root store={store} />, root);

    window.login = sessionActions.login;
    window.logout = sessionActions.logout;
    window.signup = sessionActions.signup;
    window.getBook = bookActions.getBook;
    window.getBooks = bookActions.getBooks;
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
 

});