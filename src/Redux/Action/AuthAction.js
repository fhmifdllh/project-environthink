import axios from "axios";
import Swal from "sweetalert2";

export const AUTH = "AUTH";
export const REGISTER = "REGISTER";
export const GET_DATA = "GET_DATA";

const auth = (payload) => {
  return {
    type: AUTH,
    payload,
  };
};
const register = (payload) => {
  return {
    type: REGISTER,
    payload,
  };
};

export const sigInUser = (data) => async (dispatch) => {
  const json = JSON.stringify(data);
  const url = `${import.meta.env.VITE_API_LOGIN}/signin`;

  try {
    const res = await axios.post(url, data);
    Swal.fire("Sukses", "Login Success", "success").then(() =>
      dispatch(auth(res.data))
    );
  } catch (error) {
    Swal.fire("Login Failed", `${error.response.data.message}`, "error");
  }
};

export const sigUpUser = (data) => async (dispatch) => {
  const json = JSON.stringify(data);
  const url = `${import.meta.env.VITE_API_LOGIN}/signup`;

  try {
    const res = await axios.post(url, data);

    Swal.fire("Sukses", "Registrasi Berhasil !", "success").then(
      () => dispatch(register(res.data)),
      (window.location.href = "/login")
    );
  } catch (error) {
    Swal.fire("Registrasi Gagal !", `${error.response.data.message}`, "error");
  }
};
