import { useEffect } from "react";
import NavbarAdmin from "../Sidebar/NavbarAdmin";
import { Link, useNavigate } from "react-router-dom";
import { FaPen, FaPlus, FaTrashAlt } from "react-icons/fa";
import "./InfografisAdmin.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteInfografis,
  getInfografis,
  updateInfografis,
} from "../../../Redux/Action/infografisAction";
import { Spinner } from "react-bootstrap";
import InfografisVector from "../../../assets/InfografisVector.jpg";

import UpdateInfografisAdmin from "./UpdateInfografisAdmin";
import { getAPI } from "../../../Redux/Action/HomepageAdminAction";
import Swal from "sweetalert2";

function InfografisAdmin() {
  const dispatch = useDispatch();
  const { infografis, isLoading } = useSelector(
    (state) => state.infografisReducer
  );
  const { totalInfografis } = useSelector(
    (state) => state.HomepageAdminReducer
  );

  const handleUpdateInfografis = () => {};

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("role") == null) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan !",
        text: "Anda Harus Login Terlebih Dahulu",
        confirm: {
          text: "OK",
          value: true,
        },
      }).then((value) => {
        if (value) {
          navigate("/login");
        }
      });
    } else if (localStorage.getItem("role") === "user") {
      Swal.fire({
        icon: "error",
        title: "Anda Bukan Admin !",
        text: "User Tidak Bisa Akses Ke Halaman Admin!",
        confirm: {
          text: "OK",
          value: true,
        },
      }).then((value) => {
        if (value) {
          navigate("/");
        }
      });
    }

    if (localStorage.getItem("role") == "admin") {
      dispatch(getInfografis());
    }
  }, []);

  useEffect(() => {
    dispatch(getAPI());
  }, [infografis]);

  return (
    <>
      <NavbarAdmin />
      <div className="container pt-4">
        <h2>Infografis</h2>
        <div className="row gx-4 gy-2 justify-content-start">
          <div className="col-6 w-auto">
            <div className="card card-total mb-3" style={{ maxWidth: "30em" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={InfografisVector}
                    className="img-fluid rounded-start"
                    alt="Artikel "
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-title text-center m-0 text-dark fs-5">
                      Infografis
                    </p>
                    <hr className="my-2 p-0" />
                    <p className="total card-text text-dark m-0 fs-3">
                      {totalInfografis}
                    </p>
                    <p className="totalHomepageAdmin card-text text-dark m-0">
                      Total Infografis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <Link
              to="/admin/infografis/add-infografis"
              className="btn bg-primary text-white text-sm px-5 py-2"
            >
              <FaPlus /> Tambah Infografis
            </Link>
          </div>
        </div>

        <div
          className="card mt-4 my-5"
          style={{
            boxShadow: "0px 8px 24px rgba(112, 144, 176, 0.25)",
            borderRadius: 9,
          }}
        >
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col-md-6" className="imgInfografisAdmin">
                      Image
                    </th>
                    <th scope="col-md-3" className="text-center">
                      Title Article
                    </th>
                    <th scope="col-md-3" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <tr>
                      <td>
                        <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
                          <span className="mx-2 h1">loading</span>
                          <Spinner animation="border" variant="dark" />
                        </div>
                      </td>
                    </tr>
                  ) : (
                    infografis.map((item) => (
                      <tr key={item.id}>
                        <td className="">
                          <img
                            src={item.url}
                            alt="name"
                            className="img-artikel w-100"
                            style={{ height: "20em" }}
                          />
                        </td>
                        <td className="text-center">{item.judul}</td>
                        <td>
                          <div className="row d-flex justify-content-center">
                            <div className="col-2 w-25">
                              <button
                                className="btn p-0 text-success w-100"
                                onClick={() => dispatch(updateInfografis())}
                              >
                                <FaPen />
                              </button>
                            </div>
                            <div className="col-2 w-25">
                              <button
                                onClick={() =>
                                  dispatch(deleteInfografis(item.id))
                                }
                                className="btn p-0 text-danger w-100"
                              >
                                <FaTrashAlt />
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfografisAdmin;
