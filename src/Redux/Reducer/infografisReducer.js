import { START_INFOGRAFIS, SUCCESS_GET_INFOGRAFIS } from "../Action/infografisAction";

const initialState = {
  infografis: [],
  isLoading: false,
};

function infografisReducer(state = initialState, action) {
    switch (action.type) {
        case START_INFOGRAFIS:
            return {
                ...state,
                isLoading: true,
            };
        case SUCCESS_GET_INFOGRAFIS:
            return {
                ...state,
                infografis: [...action.payload],
                isLoading: false,
            };
        default:
            return state;
        }
    }
  export default infografisReducer;