import axios from "axios";

export const SEARCH_ARTICLE = "SEARCH_ARTICLE";

export const SearchAction = (payload, keyword) => {
  const searchResult = payload.filter(
    (obj) =>
      obj.titleArticle.includes(keyword.toLowerCase()) ||
      obj.desc1.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.desc2.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.desc3.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.desc4.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.desc5.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.desc6.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.desc7.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.desc8.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.desc9.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.desc10.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.category.toLowerCase().includes(keyword.toLowerCase()) ||
      obj.hashtag.some((tag) =>
        tag.toLowerCase().includes(keyword.toLowerCase())
      ) ||
      obj.author.toLowerCase().includes(keyword.toLowerCase())
  );

  return {
    type: SEARCH_ARTICLE,
    searchResult: searchResult.length == 0 ? "Not Found" : searchResult,
  };
};

export const SearchData = (keywordSearch) => {
  return async (dispatch) => {
    axios.get(import.meta.env.VITE_API_ARTICLE).then((response) => {
      dispatch(SearchAction(response.data, keywordSearch));
    });
  };
};
