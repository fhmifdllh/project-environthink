import axios from "axios";
export const START_FETCHING = "START_FETCHING";
export const SUCCESS_GET_ARTICLE = "SUCCESS_GET_ARTICLE";
export const SUCCESS_GET_DETAIL_ARTICLE = "SUCCESS_GET_DETAIL_ARTICLE";

const startFetching = () => {
  return {
    type: START_FETCHING,
  };
};

const successGetArticle = (payload) => {
  return {
    type: SUCCESS_GET_ARTICLE,
    payload,
  };
};

export const successGetDetail = (payload) => ({
  type: SUCCESS_GET_DETAIL_ARTICLE,
  payload,
});

export const getArticle = () => {
  return async (dispatch) => {
    dispatch(startFetching());
    const url = import.meta.env.VITE_API_ARTICLE;
    const result = await axios(url);

    dispatch(successGetArticle(result.data));
  };
};

export const getArticleDetail = (id) => {
  return async (dispatch) => {
    const url = `${import.meta.env.VITE_API_ARTICLE}/${id}`;
    dispatch(startFetching());
    const result = await axios(url);
    dispatch(successGetDetail(result.data.result));
  };
};

export const addArticle = (newData, id) => async (dispatch) => {
  const token = localStorage.getItem("accessToken");

  const url = `https://be-environthink-e2cdc0f06fa6.herokuapp.com/artikel`;
  await axios.post(url, newData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  dispatch(getArticle());
};

export const deleteArticleAdmin = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_ARTICLE}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(getArticle());
    } catch (error) {
      console.log(error);
    }
  };
};
