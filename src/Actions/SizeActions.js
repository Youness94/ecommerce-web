import {ALL_SIZES_REQUEST, ALL_SIZES_SUCCESS, ALL_SIZES_FAIL, CLEAR_ERRORS} from '../actions/type'
import axios from 'axios'

// const backendUrl = 'http://localhost:8000/';




export const getAllSizes = async (dispatch) =>{
      try{
            dispatch({ type:ALL_SIZES_REQUEST,})
            const {data} = await axios.get(`http://localhost:8000/api/view-size`)
            dispatch({
                  type:ALL_SIZES_SUCCESS,
                  payload:data
            })
      }catch (error){
           dispatch({
            type:ALL_SIZES_FAIL,
            payload:error.response.data.message,

           })
      }
}
        
   

// export const addSize =(data)=>dispatch=>{
//       dispatch({
//           type:ADD_SIZE,
//           payload:data
//       }
//       )
// }

// export const deleteSize =(data)=>dispatch=>{
//       dispatch({
  
//           type:DELETE_SIZE,
//           payload:data
//       }
//       )
//   }
  
 
//   export const updateSize =(data)=>dispatch=>{
//       dispatch({
//           type:UPDATE_SIZE,
//           payload:data
//       }
//       )
//   }

//   export const getSize =(data)=>dispatch=>{
//       dispatch({
//           type:GET_SIZE,
//           payload:data
//       }
//       )
//   }

  