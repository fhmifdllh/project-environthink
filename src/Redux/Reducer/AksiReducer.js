import { FATCHING_AKSI,  SUBMIT_SUCCESS, SUCCESS, SUCCESS_GET_DETAIL } from "../Action/AksiAction";

const initialState ={
     listAksi:[],
    isLoading :false,
    detailAksi:[],
    message :[],
    kontributor:[],
    isSuccess: false,
    isFailure: false,
    
}
function AksiReducer(state = initialState , action) {
    switch (action.type) {
        case FATCHING_AKSI:
            return {
                ...state,
                isLoading:true
            }  
            case SUCCESS:
                return{

                    ...state,
                    listAksi:[...action.payload],
                    isLoading:false
                   
                }       
            case SUCCESS_GET_DETAIL:
                return{
                    ...state,
                    detailAksi:action.payload,
                    kontributor:action.payload2,
                    isLoading:false
                   
                }
                case SUBMIT_SUCCESS:
                    return {
                      ...state,
                      isSuccess: true,
                      isFailure: false,
                    };
                  
            default:
                return state;
    }
    
    
}
export default AksiReducer;