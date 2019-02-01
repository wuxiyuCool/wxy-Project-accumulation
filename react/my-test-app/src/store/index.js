
// export default(state,action)=>{
//     const {counterCaption}=action
//     switch (action.type){
//         case Increment:
//         return {...state,[counterCaption]:state[counterCaption]+1}
//         case Decrement:
//         return {...state,[counterCaption]:state[counterCaption]-1}
//         default:
//         return state
//     }
// }
let triger = {
  aaa: 7,
  bbb: 1
}
export const reducer1 = (state = 1000, action) => {
    switch (action.type){
      case '涨工资': 
      
        return state += 100
      case '扣工资': 
        return state -= 100
      default: 
        return state;
    }
}

export const reducer2 = (state = triger, action) => {
  switch (action.type){
    case 'aaa': 
    state.aaa += 1
      return {...state}
    case 'bbb': 
    state.bbb += 1
      return {...state}
    default: 
      return state;
  }
}
