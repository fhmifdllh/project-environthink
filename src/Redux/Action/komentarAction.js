import axios from "axios";
import Swal from "sweetalert2";
export const START_KOMENTAR = "START_KOMENTAR";
export const SUCCESS_GET_KOMENTAR = "SUCCESS_GET_KOMENTAR";

const startKomentar = () => {
  return {
    type: START_KOMENTAR,
  };
};

const successGetKomentar = (payload) => {
  return {
    type: SUCCESS_GET_KOMENTAR,
    payload,
  };
};

export const getKomentar = (id) => {
  return async (dispatch) => {
    dispatch(startKomentar());
    const url = `${import.meta.env.VITE_API_ARTICLE}/${id}/komentar`;
    const result = await axios(url);
    dispatch(successGetKomentar(result.data.result));
  };
};

export const addKomentar = (newData, id, token) => async (dispatch) => {
  const url = `https://be-environthink-e2cdc0f06fa6.herokuapp.com/komentar?artikelId=${id}`;
  try {
    await axios.post(url, newData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getKomentar(id));
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan!",
      text: `${error}`,
    });
  }
};

export const deleteKomentar = (komentar_id, id, token) => async (dispatch) => {
  const url = `https://be-environthink-e2cdc0f06fa6.herokuapp.com/komentar/${komentar_id}`;

  try {
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getKomentar(id));
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan!",
      text: `${error}`,
    });
  }
};

export const editKomentar = (data, id, token) => async (dispatch) => {
  const url = `https://be-environthink-e2cdc0f06fa6.herokuapp.com/komentar/${data.komentar_id}`;

  try {
    await axios.patch(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getKomentar(id));
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan!",
      text: `${error}`,
    });
  }
};
