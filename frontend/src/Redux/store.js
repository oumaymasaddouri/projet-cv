import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {loginReducer} from './Reducers/userReducer'

const reducer = combineReducers({
    loginDetails:loginReducer

});

const fromLocalStorge = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : null;

const initState = {
  loginDetails: { user: fromLocalStorge },
};

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
