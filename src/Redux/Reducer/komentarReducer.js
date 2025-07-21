import { START_KOMENTAR, SUCCESS_GET_KOMENTAR } from "../Action/komentarAction";

const initialState = {
  komentar: [],
  isLoading: false,
};

function komentarReducer(state = initialState, action) {
    switch (action.type) {
        case START_KOMENTAR:
            return {
                ...state,
                isLoading: true,
            };
        case SUCCESS_GET_KOMENTAR:

            return {
                ...state,
                komentar: [...action.payload],
                isLoading: false,
            };
        default:
            return state;
        }
    }
  export default komentarReducer;