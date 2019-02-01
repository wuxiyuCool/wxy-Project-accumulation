import {createStore} from 'redux'
 const triger = {
     aaa: 7,
     bbb: 1
 }
export const increase = {
    type:'aaa'
}
export const decrease = {
    type:'bbb'
}
const reducer = (state = triger, action) => {
    switch (action.type){
      case 'aaa': 
        return state1.aaa += 1;
      case 'bbb': 
        return state1.bbb += 1;
      default: 
        return state1;
    }
}

const store=createStore(reducer)
export default store
