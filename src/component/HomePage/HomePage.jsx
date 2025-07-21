import InfoLogo from "../../assets/infoLogo.png";
import ShareLogo from "../../assets/shareLogo.png";
import PeopleLogo from "../../assets/peopleLogo.png";
import "./Homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchActicle } from "../../Redux/Action/HompageAction";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Navbars from "../Navbar/Navbars";

const HomePage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const state = useSelector((state) => state.HomepageReducer.article);

  const [saveState, setSaveState] = useState(3);
  useEffect(() => {
    dispatch(FetchActicle());
  }, []);

  const handleShowAnotherArticle = () => {
    dispatch(FetchActicle(saveState));
    setSaveState(saveState + 3);
  };

  return (
    <>
      <Navbars />
      <div className="container-fluid banner ">
        <div className="container banner-content col-lg-9">
          <div>
            <h1 className="titleHighlight1 text-white">
              Satu langkah kecil untuk lingkungan, satu <br />
              lompatan besar untuk bumi
            </h1>
            <p className="subTitleHighlight1 mt-4 mb-4 fw-bold fs-5">
              Jangan tunggu sampai terlambat, mari kita bertindak <br />
              sekarang untuk menyelamatkan planet kita.
            </p>
            <a
              className="btn btnHighlight1 mb-5"
              onClick={() => navigate("/aksi")}
            >
              Ikuti Aksi
            </a>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <h3 className="titleNewArticle mt-5 text-center">Artikel Terbaru</h3>
        <hr className="lineArticle text-center opacity-100" />
      </div>

      <div className="container">
        {state.length == 0 ? (
          <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
            <span className="mx-2 h1">loading</span>
            <Spinner animation="border" variant="dark" />
          </div>
        ) : (
          state?.map((item) => (
            <div
              className="articlesContent"
              key={item.id}
              onClick={() => navigate(`/article/${item.id}`)}
            >
              <div className="row ms-1 me-1 mt-5 mb-5">
                <div className="col-md-4 p-0 me-4">
                  <img id="articlesImage" src={item.url} alt="Images " />
                </div>
                <div
                  id="detailPreviewArticles"
                  className="col-md-7 ps-0 pe-0 mt-2"
                >
                  {/* <p className="hashTag mb-1  p-0">
                    <span id="category">{item.category}</span>{" "}
                    <span id="dot"></span>
                    {item.hashtag.map((hashtag) => (
                      <a
                        href=""
                        className="hashTagArticle text-decoration-none me-2"
                        key={hashtag}
                      >
                        #{hashtag}
                      </a>
                    ))}
                  </p> */}
                  <a
                    className="wrapperLinkTitleArticles"
                    onClick={() => navigate(`/article/${item.id}`)}
                  >
                    <h3 className="titleArticles">{item.titleArticle}</h3>
                  </a>
                  <p className="descArticles text-dark">{item.descArticle}</p>
                  <p className="AuthorAndDate ">
                    <span id="authorArticle"> {item.author}</span>
                    <span id="dot2"></span>{" "}
                    <span id="dateArticle">{item.date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
        <div className="d-flex justify-content-start ms-1">
          <button
            className="btn"
            id="artikel-lainnya"
            onClick={handleShowAnotherArticle}
            style={
              saveState == 9
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          >
            Artikel Lainnya
          </button>
        </div>
      </div>

      <div className="Highlight2 text-center mt-5">
        <h1 className="titleHighlight2 text-white pt-5">
          Menjadi Aktivis Digital
        </h1>
        <p className="subTitleHighlight2 text-white pb-5 me-3 ms-3">
          Jangan biarkan suaramu hilang di kerumunan jadilah aktivis digital dan
          berikan pengaruhmu pada dunia
        </p>
        <div className="container">
          <div className="row justify-content-center gap-3 gap-md-5 pb-5 ms-3 me-3">
            <div className="col-12 col-md-3">
              <a href="#" type="button">
                <img
                  className="imgBtnHighlight2"
                  src={InfoLogo}
                  alt="Pelajari!"
                />
              </a>
              <h2 className="titleBtnHighlight2 text-white">Pelajari Isunya</h2>
              <p className="subTitleBtnHighlight2">
                Pengetahuan adalah kunci untuk melindungi Bumi dengan lebih
                tepat dan efektif. Mari bersama-sama pelajari isunya
              </p>
            </div>
            <div className="col-12 col-md-3">
              <a href="#" type="button">
                <img
                  className="imgBtnHighlight2"
                  src={ShareLogo}
                  alt="Share!"
                />
              </a>
              <h2 className="titleBtnHighlight2 text-white">
                Bagikan Kampanyenya
              </h2>
              <p className="subTitleBtnHighlight2">
                Pengetahuan adalah kunci untuk melindungi Bumi dengan lebih
                tepat dan efektif. Mari bersama-sama pelajari isunya
              </p>
            </div>
            <div className="col-12 col-md-3">
              <a href="#" type="button">
                <img
                  className="imgBtnHighlight2"
                  src={PeopleLogo}
                  alt="Aktivis"
                />
              </a>
              <h2 className="titleBtnHighlight2 text-white">Lakukan Aksi</h2>
              <p className="subTitleBtnHighlight2">
                Pengetahuan adalah kunci untuk melindungi Bumi dengan lebih
                tepat dan efektif. Mari bersama-sama pelajari isunya
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;