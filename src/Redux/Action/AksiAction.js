import axios from "axios";
import Swal from "sweetalert2";
export const FATCHING_AKSI = "FATCHING_AKSI";
export const SUCCESS = "SUCCESS";
export const SUCCESS_GET_DETAIL = "SUCCESS_GET_DETAIL";
export const SUBMIT_SUCCESS = "SUBMIT_SUCCESS";
export const SUBMIT_FAILURE = "SUBMIT_FAILURE";

export const fatchingAksi = () => ({
  type: FATCHING_AKSI,
});

export const success = (payload) => ({
  type: SUCCESS,
  payload,
});
export const successGetDetail = (payload, payload2) => ({
  type: SUCCESS_GET_DETAIL,
  payload,
  payload2,
});

export const getDataAksi = () => async (dispatch) => {
  dispatch(fatchingAksi());
  const url = import.meta.env.VITE_API_AKSI;
  const result = await axios(url);
  dispatch(success(result.data));
};

export const submitSuccess = () => {
  Swal.fire("Sukses", "Petisi Berhasil Ditandatangani", "success");
  return {
    type: SUBMIT_SUCCESS,
  };
};

// Action creator untuk permintaan POST gagal
export const submitFailure = () => {
  Swal.fire(
    "Email Sudah Digunakan",
    "Silahkan gunakan email yang lain untuk menandatangai petisi ini",
    "error"
  );
  return {
    type: SUBMIT_FAILURE,
  };
};

export const getDetail = (id) => async (dispatch) => {
  dispatch(fatchingAksi());
  const url = `${import.meta.env.VITE_API_AKSI}/${id}`;

  const result = await axios(url);
  const result1 = [];
  if (localStorage.length != 0) {
    const url1 = `${import.meta.env.VITE_API_KONTRIBUTOR}?aksiId=${id}`;
    const token = localStorage.getItem("accessToken");
    const result1 = await axios(url1, {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });

    dispatch(successGetDetail(result.data.result, result1.data));
  } else {
    dispatch(successGetDetail(result.data.result, result1));
  }
};
export const submitPetisi = (data, id, token) => async (dispatch) => {
  const url = `${import.meta.env.VITE_API_KONTRIBUTOR}?aksiId=${id}`;

  try {
    await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });
    dispatch(getDetail(id));
    dispatch(submitSuccess());
  } catch (error) {
    Swal.fire("Submit Failed", `${error.response.data.message}`, "error");
  }
};

export const deleteAksi = (id, token) => async (dispatch) => {
  const url = `https://be-environthink-e2cdc0f06fa6.herokuapp.com/aksi/${id}`;
  try {
    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getDataAksi());
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan!",
      text: `${error.message}`,
    });
  }
};
