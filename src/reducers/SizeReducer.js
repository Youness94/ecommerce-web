import {ADD_SIZE, DELETE_SIZE, UPDATE_SIZE, GET_SIZE, GET_ALL_SIZES} from '../Actions/types'

const initialState = {

      sizes :[],
};

const SizesReducer = (state =initialState, action)=>{
      switch(action.type){
            case ADD_SIZE:
            return{
                  ...state, 
                  sizes:[...state.sizes,action.payload]
            }
            break; 

            case DELETE_SIZE:
                  return{
                        ...state,
                        sizes:state.sizes?state.sizes.filter(item=>item.key!=action.payload):[]
                  }
                  break;

            case GET_SIZE:
                  return{
                  ...state,
                  sizes:action.payload,
                  }
                  break;

            case UPDATE_SIZE:
                  return{
                  ...state,
                  sizes:state.map(size=>size.id==action.payload.id? size=size.payload:''),
                  }
                  break;

                  
            
            default:
               return state;
                  break;
            }
}

export default SizesReducer;