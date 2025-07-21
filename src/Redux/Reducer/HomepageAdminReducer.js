import { GET_TOTAL } from "../Action/HomepageAdminAction";

const initialState = {
  totalArticle: null,
  totalAksi: null,
  totalInfografis: null,
  totalDonasi: null,
};

const HomepageAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL:
      return {
        ...state,
        totalArticle: action.data.lengthArticle,
        totalAksi: action.data.lengthAksi,
        totalInfografis: action.data.lengthInfografis,
        totalDonasi: action.data.lengthDonasi,
      };

    default:
      return state;
  }
};

export default HomepageAdminReducer;
