import { useEffect, useState } from "react";
import NavbarAdmin from "../Sidebar/NavbarAdmin";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { addInfografis } from "../../../Redux/Action/infografisAction";

function AddInfografisAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [judulInfografis, setJudulInfografis] = useState("");
  const [gambar, setGambar] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setGambar(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      title: judulInfografis,
      file: gambar,
    };
    dispatch(addInfografis(newData, localStorage.getItem("accessToken")));
    navigate("/admin/infografis");
    setJudulInfografis("");
    setGambar("");
  };
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
  }, []);
  return (
    <>
      <NavbarAdmin />
      <div className="container pt-4">
        <div className="addArtikel">
          <h3>Add Article</h3>
          <div className="card mt-3 mb-5">
            <div className="card-header text-center  h4">
              FORM DATA INFOGRAFIS
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group row pt-3">
                  <label
                    htmlFor="judulInfografis"
                    className="col-sm-2 col-form-label"
                  >
                    Judul Infografis
                  </label>
                  <div className="col-md-5">
                    <input
                      name="judulInfografis"
                      type="text"
                      className="form-control"
                      id="judulInfografis"
                      value={judulInfografis}
                      onChange={(e) => setJudulInfografis(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="gambar" className="col-sm-2 col-form-label">
                    Gambar
                  </label>
                  <div className="col-md-5">
                    <input
                      type="file"
                      className="form-control-file"
                      id="gambar"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div className="text-body-secondary text-center pt-4">
                  <button
                    type="button"
                    className="btn btn-success text-white me-3"
                    onClick={() => navigate("/admin/infografis")}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddInfografisAdmin;
