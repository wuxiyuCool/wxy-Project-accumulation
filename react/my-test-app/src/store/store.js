import {createStore, combineReducers} from 'redux'
import {reducer1, reducer2} from './index' 

// const initValue={
//     'First':0,
//     'Second':10,
//     'Third':20
// }
const reducer = combineReducers({reducer1,reducer2})
const store=createStore(reducer)
export default store