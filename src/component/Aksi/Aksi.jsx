import { Link } from "react-router-dom";
import "./Aksi.css";
import { FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Spinner from "react-bootstrap/Spinner";
import { getDataAksi } from "./../../Redux/Action/AksiAction";
import Navbars from "../Navbar/Navbars";
function Aksi() {
  const dispatch = useDispatch();
  const { listAksi, isLoading } = useSelector((state) => state.AksiReducer);
  const [limit, setLimit] = useState(3);
  const [showButton, setShowButton] = useState(true);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    dispatch(getDataAksi());
  }, []);

  useEffect(() => {
    setFilterData(listAksi.slice(0, 3));
  }, [listAksi]);

  useEffect(() => {
    setFilterData(listAksi.slice(0, limit));
    if (listAksi.length > 0 && limit >= listAksi.length) {
      setShowButton(false);
    }
  }, [limit]);

  return (
    <>
      <Navbars />
      <div className="container mt-4">
        <div className="artikel" id="artikel">
          <h3 className="text-start ">Tanpa Aksi, Tidak Ada Perubahan </h3>
          <p className="sub-title">
            Bergabunglah dengan kami dan tandatangani petisi untuk mendukung
            perubahan positif.
          </p>
          <div style={{ border: "0.5px solid #bfbfbf" }}></div>

          <div className="row pt-2" id="articlesContent">
            {isLoading ? (
              <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
                {/* <span className="mx-2 h1">loading</span>
                <Spinner animation="border" variant="dark" /> */}
                <Spinner
                  className="mx-4"
                  animation="grow"
                  size="sm"
                  variant="success"
                />
                <Spinner
                  className="mx-4"
                  animation="grow"
                  size="sm"
                  variant="success"
                />
                <Spinner
                  className="mx-4"
                  animation="grow"
                  size="sm"
                  variant="success"
                />
                <Spinner
                  className="mx-4"
                  animation="grow"
                  size="sm"
                  variant="success"
                />
                <Spinner
                  className="mx-4"
                  animation="grow"
                  size="sm"
                  variant="success"
                />
              </div>
            ) : (
              filterData.map((item) => (
                <div className="col-md-4 col-sm-6  pt-4 pb-4" key={item.id}>
                  <div className="card card-aksi h-100">
                    <img
                      src={item.url}
                      className="card-img-top h-100 sm-h-100"
                      alt=" "
                    />
                    <div className="card-body">
                      <h6 className="card-title title title-aksi">
                        {item.title}
                      </h6>
                      <p className="card-text sub-title d-flex align-items-center gap-2">
                        <FaUsers />
                        {item.numberofsupport == 0 ? (
                          <span className="fw-medium fs-6">
                            Belum ada dukungan
                          </span>
                        ) : item.numberofsupport < item.target ? (
                          <span className="fw-medium fs-6">
                            {item.numberofsupport} orang mendukung
                          </span>
                        ) : (
                          <span className="fw-medium fs-6">
                            Petisi Mencapai Kemenangan
                          </span>
                        )}
                      </p>
                      <Link className="link-aksi" to={`/aksi/${item.id}`}>
                        {item.numberofsupport < item.target ? (
                          <h5 className="btn btn-main d-block">
                            Pelajari Selengkapnya
                          </h5>
                        ) : (
                          <h5 className="btn btn-secondary d-block">
                            Pelajari Selengkapnya
                          </h5>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {!isLoading && (
          <div className="d-flex justify-content-center pb-3">
            {showButton && (
              <button
                className="btn btn-lainnya "
                onClick={() => setLimit(limit + 3)}
              >
                Aksi Lainnya
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default Aksi;
