import { DONASI } from "../Action/ActionDonasi";

const initialState = {
  Donasi: [],
};

function DonasiReducer(state = initialState, action) {
  switch (action.type) {
    case DONASI:
      return {
        ...state,
        Donasi: [...state.Donasi, action.data],
      };
    default:
      return state;
  }
}

export default DonasiReducer;
