import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer id="footer" className="mt-auto">
        <div className="container">
          <div className="row pt-3">
            <div className="col-sm-12 col-md-5">
              <h5 className="judulDeskripsiEnvironthink text-bold">Environthink</h5>
              <p className="deskripsiEnvironthink">
                EnvironThink berfokus pada isu-isu lingkungan dan solusi untuk
                menjaga keberlanjutan alam. Website ini mengingatkan keterkaitan
                antara lingkungan dan pemikiran, serta pentingnya
                mempertimbangkan dampak lingkungan dalam keputusan dan tindakan
                kita sehari-hari.
              </p>
            </div>
            <div className="col-sm-12 col-md-4">
              <h6 className="text-bold text-white">Informasi Kontak</h6>
              <p className="mb-1">
                <i className="bi bi-telephone"></i> 0351 2345 678
              </p>
              <p className="mb-1">
                <i className="bi bi-envelope"></i> environthink23@gmail.com
              </p>
              <p className="mb-1">
                <i className="bi bi-geo-alt"></i> Jl. Kenangan No. 99 Planet
                Mars
              </p>
            </div>
            <div id="medsos" className="col-sm-12 col-md-3">
              <h6 className="text-bold text-white">Media Sosial</h6>

              <Link
                className="bg-white fs-4 text-dark  pb-1 ps-2 pe-2 m-1 border rounded"
                to="https://www.instagram.com/greenpeaceid/"
              >
                <i>
                  <FaInstagram />
                </i>
              </Link>
              <Link
                className="bg-white fs-4  pb-1 ps-2 pe-2 m-1 border rounded"
                to="https://www.facebook.com/GreenpeaceIndonesia/"
              >
                <i>
                  <FaFacebook />
                </i>
              </Link>
              <Link
                className="bg-white fs-4 pb-1 ps-2 pe-2 m-1 border rounded"
                to="https://twitter.com/greenpeaceid"
              >
                <i>
                  <FaTwitter />
                </i>
              </Link>
              <Link
                className="bg-white fs-4  pb-1 ps-2 pe-2 m-1 border rounded text-danger"
                to="https://www.youtube.com/greenpeaceindonesia"
              >
                <i>
                  <FaYoutube />
                </i>
              </Link>
            </div>
          </div>
          <hr className="mb-2 opacity-100 border border-white" />
          <div className="row pb-0 pb-md-3">
            <div className="col-sm-12 col-md-6 text-white">
              Copyright &#169; 2023. Greenpeace. All Right Reserved.
            </div>
            <div
              id="country"
              className="col-sm-12 col-md-6 text-center text-md-end mb-5 mb-md-0 text-white"
            >
              Indonesia
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
