import { AUTH } from "../Action/AuthAction";

const initialState = {
  users: [],
  isLoading: false,
};
 


const AuthReducer =(state=initialState,action)=>{
    switch (action.type) {
        case AUTH:
          return {
            users: action.payload
          }

        default:
           return state
    }

} 
export default AuthReducer