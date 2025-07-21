import { useEffect } from "react";
import { FaClock } from "react-icons/fa";
import Komentar from "../Komentar/Komentar";
import { getArticleDetail } from "../../Redux/Action/articleAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbars from "../Navbar/Navbars";
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

function DetailArticle() {
  const { key } = useParams();
  const dispatch = useDispatch();

  const { detailArticle, article, isLoading } = useSelector(
    (state) => state.articleReducer
  );

  useEffect(() => {
    dispatch(getArticleDetail(key));
  }, []);

  const shareUrl = `https://final-environthink.netlify.app/artikel/${key}`;

  return (
    <>
    <Navbars />
      <div id="articlesContent" className="container pt-4">
        {isLoading ? (
          <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
            <span className="mx-2 h1">loading</span>
            <Spinner animation="border" variant="dark" />
          </div>
        ) : (
          <>
            {detailArticle.length != 0 && (
              <>
                <div className="col-md-12 mb-3">
                  <p className="hashTag m-0 p-0">
                    <span id="cathegory">{detailArticle.category}</span>{" "}
                    <span id="dot"></span>
                    {detailArticle.hashtag.map((hashtag) => (
                      <Link
                        key={hashtag}
                        to={`/article/terkait/${hashtag}`}
                        style={{ textDecoration: "none" }}
                      >
                        <span
                          id="hashTag"
                          className="hashTagArticle text-decoration-none me-2"
                        >
                          #{hashtag}
                        </span>
                      </Link>
                    ))}
                  </p>
                  <h1 className="titleArticle" id="titleArticle">
                    {detailArticle.titleArticle}{" "}
                  </h1>
                  <p className="text-dark">
                    By{" "}
                    <span id="author" className="fw-bold">
                      {" "}
                      {detailArticle.author}
                    </span>
                    <i className="ms-1 me-1">
                      <FaClock />
                    </i>
                    <span
                      id="date"
                      className="fw-bold"
                      style={{ color: "#6f7376" }}
                    >
                      {detailArticle.date}
                    </span>
                  </p>
                  <div className="d-flex gap-2" >
                    <FacebookShareButton url={shareUrl}>
                      <FacebookIcon size={32}/>
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl}>
                      <TwitterIcon size={32}/>
                    </TwitterShareButton>
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsappIcon size={32}/>
                    </WhatsappShareButton>
                  </div>
                </div>
                <div className="col-md-12 p-0 me-4 text-center">
                  <img
                    className="articlesImage img-fluid"
                    src={detailArticle.url}
                    alt=""
                    id="images"
                  />
                </div>
                <div className="paragraf col-md-12 ps-0 pe-0 pt-5 ps-3">
                  <p id="paragraf1" className="text-dark">
                    {detailArticle.desc1}
                  </p>
                  <p id="paragraf2" className="text-dark">
                    {detailArticle.desc2}
                  </p>
                  <p id="paragraf3" className="text-dark">
                    {detailArticle.desc3}
                  </p>
                  <p id="paragraf4" className="text-dark">
                    {detailArticle.desc4}
                  </p>
                  <p id="paragraf5" className="text-dark">
                    {detailArticle.desc5}
                  </p>
                  <p id="paragraf6" className="text-dark">
                    {detailArticle.desc6}
                  </p>
                  <p id="paragraf7" className="text-dark">
                    {detailArticle.desc7}
                  </p>
                  <p id="paragraf8" className="text-dark">
                    {detailArticle.desc8}
                  </p>
                  <p id="paragraf9" className="text-dark">
                    {detailArticle.desc9}
                  </p>
                  <p id="paragraf10" className="text-dark">
                    {detailArticle.desc10}
                  </p>
                </div>
              </>
            )}
          </>
        )}
        <Komentar />
      </div>
    </>
  );
}

export default DetailArticle;
