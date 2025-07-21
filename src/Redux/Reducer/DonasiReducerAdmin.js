import { FETCH_DONASI } from "../Action/ActionDonasiAdmin";

const initialState = {
  result: null,
};

const DonasiReducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DONASI:
      return {
        ...state,
        result: action.data,
      };

    default:
      return state;
  }
};

export default DonasiReducerAdmin;
