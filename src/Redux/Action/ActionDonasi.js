import axios from "axios";
import Swal from "sweetalert2";

export const DONASI = "Donasi";

const getFormatedDate = () => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const today = new Date();
  const day = today.getDate();
  const monthIndex = today.getMonth();
  const year = today.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;
  return formattedDate;
};

export const dataDonasi = (donationAmount, dataForm) => {
  return async (dispatch) => {
    const data = {
      nama: dataForm.Nama,
      email: dataForm.Email,
      nomor_rekening: dataForm.Nomor_Rekening,
      nomor_hp: dataForm.Nomor_Telepon,
      formated_value: donationAmount.formattedValue,
      original_value: donationAmount.originalValue,
    };

    try {
      const token = localStorage.getItem("accessToken");

      await axios.post(import.meta.env.VITE_API_DONASI, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Swal.fire("Cek email untuk instruksi pembayaran", "", "success");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan!",
        text: `${error.response.data.message}`,
      });
    }

    return {
      type: DONASI,
      data: {
        donationAmount,
        dataForm,
        createdAt: getFormatedDate(),
      },
    };
  };
};
