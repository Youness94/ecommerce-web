import {ADD_SIZE, DELETE_SIZE, UPDATE_SIZE, GET_SIZE, GET_ALL_SIZES} from './type'


export const addSize =(data)=>dispatch=>{
      dispatch({
          type:ADD_SIZE,
          payload:data
      }
      )
}

export const deleteSize =(data)=>dispatch=>{
      dispatch({
  
          type:DELETE_SIZE,
          payload:data
      }
      )
  }
  
 
  export const updateSize =(data)=>dispatch=>{
      dispatch({
          type:UPDATE_SIZE,
          payload:data
      }
      )
  }

  export const getSize =(data)=>dispatch=>{
      dispatch({
          type:GET_SIZE,
          payload:data
      }
      )
  }

  export const getAllSize =(data)=>dispatch=>{
      dispatch({
          type:GET_ALL_SIZES,
          payload:data
      }
      )
  }