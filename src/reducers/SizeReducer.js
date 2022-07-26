import {ALL_SIZES_REQUEST, ALL_SIZES_SUCCESS, ALL_SIZES_FAIL, CLEAR_ERRORS} from '../actions/type'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

      sizes:[],
      loading:true,
};



const sizeReducer = (state =initialState, action)=>{
      switch(action.type){
            case ALL_SIZES_REQUEST:
            return{
                  loading:true,
                  sizes:[]
            }
          

            case ALL_SIZES_SUCCESS:
                  return{
                        loading:false,
                        sizes:action.payload.sizes
                  }
               

            case ALL_SIZES_FAIL:
                  return{
                        loading:false,
                        error: action.payload,
                  
                  }

            case CLEAR_ERRORS:
                  return{

                        ...state,
                        error: null,
                  }
       
            
                  
                 
                  
            
            default:
               return state;
                  break;
            }
}


// export default sizeSlice.reducer; 
export default sizeReducer;