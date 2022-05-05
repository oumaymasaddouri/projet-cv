
  import axios from "axios";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOUGOUT } from "../Types/types";
  

//   export const getNewUser = (id) => async (dispatch) => {
//     try {
//       dispatch({ type: GET_LAWYER_REQUEST });
//       const { data } = await axios.get(`http://localhost:4000/Lawyer/${id}`);
//       dispatch({ type: GET_LAWYER_SUCCESS, payload: data });
//     } catch (error) {
  
//       dispatch({ type: GET_LAWYER_FAIL });
//     }
//   };
  
//   export const addNewLawyer = (newLawyer) => async (dispatch) => {
//     try {
//       dispatch({ type: ADD_NEW_LAWYER_REQUEST });
//       const { data } = await axios.post(
//         "http://localhost:4000/Lawyer/newLawyer",
//         newLawyer
//       );
     
//       dispatch({ type: ADD_NEW_LAWYER_SUCCESS, payload: data });
  
//     } catch (error) {
      
//       dispatch({ type: ADD_NEW_LAWYER_FAIL});
//     }
//   };
  
//   export const updateLawyer = (id,newdesc) => async (dispatch,getState) => {
//     try {
//       dispatch({ type: UPDATE_LAWYER_REQUEST });
//       const {loginDetails:{user}}=getState()
//       const config={headers:{auth:user.token}}
//       const { data } = await axios.put(`http://localhost:4000/Lawyer/${id}`,newdesc,config);
//       dispatch({ type: UPDATE_LAWYER_SUCCESS, payload: data });
//     } catch (error) {
  
//       dispatch({ type: UPDATE_LAWYER_FAIL });
//     }
//   };
  
//   export const deleteLawyer = (id) => async (dispatch,getState) => {
//     try {
//       dispatch({ type: DELETE_LAWYER_REQUEST });
//       const {loginDetails:{user}}=getState()
//       const config={headers:{auth:user.token}}
//       const { data } = await axios.delete(`http://localhost:4000/Lawyer/${id}`,config);
//       localStorage.removeItem("cred")
  
//       dispatch({ type: DELETE_LAWYER_SUCCESS, payload: data });
//     } catch (error) {
  
//       dispatch({ type: DELETE_LAWYER_FAIL });
//     }
//   };
  
  
 
  
  
  
  
  export const login = (userCred) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
      const { data } = await axios.post(
        `/user/login`,
        userCred
      );
      localStorage.setItem("auth", JSON.stringify(data));
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: "bad cred" });
    }
  };

//   export const loginn(blabla)=>{
//       console.log(loginn("blabla"))
//   }
  //arrow function
  //blabla= param
  //clg(loginn(arg))
  export const lougout = () => (dispatch) => {
    dispatch({ type: LOUGOUT });
    localStorage.removeItem("cred");
  };
  
  