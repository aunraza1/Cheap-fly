import { applyMiddleware ,createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from "./reducers";
import {loadState,saveState} from '../localStorage'
const PresistedState=loadState()
const store=createStore(reducers,PresistedState,applyMiddleware(thunk))

store.subscribe(()=>{
    saveState(store.getState())
})

export default store