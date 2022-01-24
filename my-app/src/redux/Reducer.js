import { ADD, DELETE, EDIT, DONE, FILTER } from "./action";

const initstate = {
    items : [
      {id:1,description:" sport", isDone:false},
      {id:2,description:"work", isDone:false},
      {id:3,description:"watch movies", isDone:false},
      {id:4,description:"Shico", isDone:false}
    ],
    Filterstate:'all'
  } 

const reducer =(state = initstate,action)=>{
  switch (action.type) {
    case ADD: 
    return {...state,items:[...state.items,action.payload]}
      case DONE: 
      return {...state,items:[...state.items.map(el=>{if(el.id===action.payload){
        el.isDone=!el.isDone
        console.log(el.isDone)
      } 
      return el })]}

      case FILTER : 
      return {...state, Filterstate:action.payload}
      case DELETE:
    return {...state,items:[...state.items.filter(el=>el.id !== action.payload)]}
    case EDIT:
      return {...state,items:[...state.items.map((el) => {
        if (el.id === action.payload.id) {
          el.description = action.payload.newText;
        }
        return el;
      }) ]
   
  }
      
      
  
    default: return state
     
  }
    

}

export default reducer;