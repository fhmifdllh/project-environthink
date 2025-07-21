import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbars from "../Navbar/Navbars";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [text, setText] = useState("");

  const userTryAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    Swal.fire({
      icon: "error",
      title: "Halaman Tidak Ditemukan",
      text: "Halaman Yang dituju tidak ditemukan",
      confirm: {
        text: "OK",
        value: true,
      },
    }).then((value) => {
      if (value) {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
    <Navbars/>
    <div
      style={{ fontFamily: "Plus Jakarta Sans, sans-serif", fontWeight: 800 }}
      className="textNotFound text-center fs-1 mt-5"
    >
      Halaman TIdak Tidemukan
    </div>
    </>
  );
};

export default NotFound;
