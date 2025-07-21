import axios from "axios";
import Swal from "sweetalert2";

export const FETCH_DONASI = "FETCH_DONASI";
export const UPDATE_DONASI = "UPDATE_DONASI";

const resultApiDonasi = (data) => {
  return {
    type: FETCH_DONASI,
    data,
  };
};

export const fetchApiDonasi = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");

      const result = await axios.get(import.meta.env.VITE_API_DONASI, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(resultApiDonasi(result.data));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan!",
        text: `${error}`,
      });
    }
  };
};

export const deleteDataDonasi = (id) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");

      await axios.delete(`${import.meta.env.VITE_API_DONASI}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(fetchApiDonasi());
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan !",
        text: `${error.message}`,
      });
    }
  };
};
