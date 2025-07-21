import { useState } from "react";
import "./Search.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchData } from "../../Redux/Action/SearchAction";
import { useNavigate } from "react-router-dom";
import Navbars from "../Navbar/Navbars";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const { result } = useSelector((state) => state.SearchReducer);

  const handleSubmit = () => {
    dispatch(SearchData(searchValue));
  };

  const navigate = useNavigate();

  return (
    <>
    <Navbars />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-10">
            <div className="input-group mb-3">
              <input
                id="inputSearchArticle"
                type="text"
                className="inputSearch form-control shadow-none border border-2"
                placeholder="Cari Artikel lainnya!"
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyPress={(e) => {
                  e.key == "Enter" && handleSubmit();
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-2 text-center text-md-start">
            <button
              id="btnCari"
              className="btnCari btn text-white w-100"
              onClick={handleSubmit}
            >
              Cari
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="row pt-4 "
          style={{ marginBottom: "6em" }}
          id="articlesContent"
        >
          {typeof result == "string" ? (
            <div className="wrapperNotFound col-md-6 col-11 mx-auto mb-5 pt-3 pb-5 ps-4 pe-4">
              <p className="titleNotFoundArticle text-dark mb-2">
                Maaf, kami tidak dapat menemukan apa yang anda cari.
              </p>
              <ul className="bg-dangesr m-0">
                <li className="possibleNotFoundKeyword1 text-secondary">
                  Cek kesalahan dalam penulisan, dan coba pencarian lagi
                </li>
                <li className="possibleNotFoundKeyword2 text-secondary">
                  Coba lakukan pencarian lain
                </li>
              </ul>
            </div>
          ) : (
            result?.map((item) => (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-4 pt-4"
                key={item.id}
              >
                <div
                  className="card card-artikel h-100"
                  onClick={() => navigate(`/article/${item.id}`)}
                >
                  <img src={item.url} className="card-img-top" alt="artikel" />
                  <div className="card-body">
                    <a className="wrapperLinkTitleArticles" href="">
                      <h5 className="card-title text-break">
                        {item.titleArticle}
                      </h5>
                    </a>
                    <p
                      className="card-text"
                      style={{ color: "#595959", textAlign: "justify" }}
                    >
                      {item.descArticle}
                    </p>
                    <p className="fw-bold">
                      <span className="author text-secondary">
                        {item.author}
                      </span>
                      <span id="dot2"></span>
                      <span className="date text-secondary">{item.date}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
