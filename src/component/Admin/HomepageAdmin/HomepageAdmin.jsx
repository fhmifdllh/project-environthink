import "./HomepageAdmin.css";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAPI } from "../../../Redux/Action/HomepageAdminAction";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link, useNavigate } from "react-router-dom";
import ArticleVector from "../../../assets/ArticleVector.jpg";
import AksiVector from "../../../assets/AksiVector.jpg";
import InfografisVector from "../../../assets/InfografisVector.jpg";
import DonationVector from "../../../assets/DonationVector.jpg";
import NavbarAdmin from "../Sidebar/NavbarAdmin";
import Swal from "sweetalert2";

function HomepageAdmin() {
  const { totalAksi, totalArticle, totalInfografis, totalDonasi } = useSelector(
    (state) => state.HomepageAdminReducer
  );
  // const roleLocalStorage = localStorage.getItem("role");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAPI());
      if (localStorage.getItem('role') == null) {
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
      } else if (localStorage.getItem('role') === "user") {
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
  }, []);

  return (
    <>
      <NavbarAdmin />
      <Container className="d-flex px-4" style={{ marginTop: "0em" }}>
        {totalAksi != null &&
        totalArticle != null &&
        totalInfografis != null ? (
          <div className="container pt-5 mb-5">
            <h1 className="text-center mb-5 titleWelcome">
              Selamat Datang Admin 😃
            </h1>
            <div className="row gx-4 gy-2 justify-content-center">
              <div className="col-6 w-auto">
                <div className="card card-total mb-3" style={{ maxWidth: "30em" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={ArticleVector}
                        className="img-fluid rounded-start"
                        alt="Artikel "
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-title text-center m-0 text-dark fs-5">
                          Artikel
                        </p>
                        <hr className="my-2 p-0" />
                        <Link
                          to="/admin/article"
                          className="total card-text text-dark m-0 fs-3"
                          style={{ textDecoration: "none" }}
                        >
                          {totalArticle}
                        </Link>
                        <p className="totalHomepageAdmin card-text text-dark m-0">
                          Total Artikel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 w-auto">
                <div className="card card-total mb-3" style={{ maxWidth: "30em" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={AksiVector}
                        className="img-fluid rounded-start"
                        alt="Artikel "
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-title text-center m-0 text-dark fs-5">
                          Aksi
                        </p>
                        <hr className="my-2 p-0" />
                        <p className="total card-text text-dark m-0 fs-3">
                          {totalAksi}
                        </p>
                        <p className="totalHomepageAdmin card-text text-dark m-0">
                          Total Aksi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <div className="col-6 w-auto">
                <div className="card card-total mb-3" style={{ maxWidth: "30em" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={DonationVector}
                        className="img-fluid rounded-start"
                        alt="Artikel "
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <p className="card-title text-center m-0 text-dark fs-5">
                          Donasi
                        </p>
                        <hr className="my-2 p-0" />
                        <p className="total card-text text-dark m-0 fs-3">
                          {totalDonasi}
                        </p>
                        <p className="totalHomepageAdmin card-text text-dark m-0">
                          Total Donasi
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-center mt-3 titleAdmin">Admin Environthink</h1>
          </div>
        ) : (
          <div
            className="mx-auto g-4 d-flex gap-3"
            style={{ marginTop: "8em" }}
          >
            <Spinner animation="grow" size="sm" variant="success" />
            <Spinner animation="grow" size="sm" variant="success" />
            <Spinner animation="grow" size="sm" variant="success" />
            <Spinner animation="grow" size="sm" variant="success" />
            <Spinner animation="grow" size="sm" variant="success" />
            <Spinner animation="grow" size="sm" variant="success" />
          </div>
        )}
      </Container>
    </>
  );
}

export default HomepageAdmin;