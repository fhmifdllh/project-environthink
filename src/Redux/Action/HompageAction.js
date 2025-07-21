import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";

const actionFetch = (data, index) => {
  if (typeof index == "undefined") {
    const payload = [];
    for (let i = 0; i < 3 && i < data.length; i++) {
      payload.push(data[i]);
    }

    return {
      type: FETCH_DATA,
      payload,
    };
  } else {
    const payload = [];
    for (let i = 0; i < 3 + index && i < data.length; i++) {
      payload.push(data[i]);
    }

    return {
      type: FETCH_DATA,
      payload,
    };
  }
};

export const FetchActicle = (index) => {
  return async (dispatch) => {
    const response = await axios.get(import.meta.env.VITE_API_ARTICLE);
    dispatch(actionFetch(response.data, index));
  };
};
