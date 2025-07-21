import { FETCH_DATA } from "../Action/HompageAction";

const initialState = {
  article: [],
};

const HomepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        article: action.payload,
      };
    default:
      return state;
  }
};

export default HomepageReducer;
