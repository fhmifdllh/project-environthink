import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addArticle } from "../../../Redux/Action/articleAction";
import NavbarAdmin from "../Sidebar/NavbarAdmin";
import Swal from "sweetalert2";

function AddArtikelAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [titleArticle, setTitleArticle] = useState("");
  const [descArticle, setDescArticle] = useState("");
  const [category, setCategory] = useState("");
  const [hashtag, setHashtag] = useState([]);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [image, setImages] = useState(null);
  const [desc1, setDesc1] = useState("");
  const [desc2, setDesc2] = useState("");
  const [desc3, setDesc3] = useState("");
  const [desc4, setDesc4] = useState("");
  const [desc5, setDesc5] = useState("");
  const [desc6, setDesc6] = useState("");
  const [desc7, setDesc7] = useState("");
  const [desc8, setDesc8] = useState("");
  const [desc9, setDesc9] = useState("");
  const [desc10, setDesc10] = useState("");

  const handleHashtagChange = (e) => {
    const { value } = e.target;
    setHashtag(value.split(",").map((hashtag) => hashtag.trim()));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImages(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      titleArticle: titleArticle,
      descArticle: descArticle,
      category: category,
      hashtag: hashtag,
      author: author,
      date: date,
      image: image,
      desc1: desc1,
      desc2: desc2,
      desc3: desc3,
      desc4: desc4,
      desc5: desc5,
      desc6: desc6,
      desc7: desc7,
      desc8: desc8,
      desc9: desc9,
      desc10: desc10,
    };
    dispatch(addArticle(newData));
    navigate("/admin/article");
    setTitleArticle("");
    setDescArticle("");
    setCategory("");
    setHashtag([]);
    setAuthor("");
    setDate("");
    setImages("");
    setDesc1("");
    setDesc2("");
    setDesc3("");
    setDesc4("");
    setDesc5("");
    setDesc6("");
    setDesc7("");
    setDesc8("");
    setDesc9("");
    setDesc10("");
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
            <div className="card-header text-center  h4">FORM DATA ARTICLE</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group row pt-3">
                  <label
                    htmlFor="titleArticle"
                    className="col-sm-2 col-form-label"
                  >
                    Title Article
                  </label>
                  <div className="col-md-5">
                    <input
                      name="titleArticle"
                      type="text"
                      className="form-control"
                      id="titleArticle"
                      value={titleArticle}
                      onChange={(e) => setTitleArticle(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label
                    htmlFor="descArticle"
                    className="col-sm-2 col-form-label"
                  >
                    Desc Article
                  </label>
                  <div className="col-md-5">
                    <input
                      name="descArticle"
                      type="text"
                      className="form-control"
                      id="descArticle"
                      value={descArticle}
                      onChange={(e) => setDescArticle(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="category" className="col-sm-2 col-form-label">
                    Category
                  </label>
                  <div className="col-md-5">
                    <input
                      name="category"
                      type="text"
                      className="form-control"
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="hashtag" className="col-sm-2 col-form-label">
                    Hashtag
                  </label>
                  <div className="col-md-5">
                    <input
                      name="hashtag"
                      type="text"
                      className="form-control"
                      id="hashtag"
                      value={hashtag.join(", ")}
                      onChange={handleHashtagChange}
                    />
                    <small className="form-text text-muted">
                      Separate hashtag with commas (e.g. #tag1, #tag2)
                    </small>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="author" className="col-sm-2 col-form-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      name="author"
                      type="text"
                      className="form-control"
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="date" className="col-sm-2 col-form-label">
                    Date
                  </label>
                  <div className="col-md-5">
                    <input
                      name="date"
                      type="date"
                      className="form-control"
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="images" className="col-sm-2 col-form-label">
                    Images
                  </label>
                  <div className="col-md-5">
                    <input
                      type="file"
                      className="form-control-file"
                      id="images"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc1" className="col-sm-2 col-form-label">
                    Desc 1
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc1"
                      id="desc1"
                      rows="3"
                      value={desc1}
                      onChange={(e) => setDesc1(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc2" className="col-sm-2 col-form-label">
                    Desc 2
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc2"
                      id="desc2"
                      rows="3"
                      value={desc2}
                      onChange={(e) => setDesc2(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc3" className="col-sm-2 col-form-label">
                    Desc 3
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc3"
                      id="desc3"
                      rows="3"
                      value={desc3}
                      onChange={(e) => setDesc3(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc4" className="col-sm-2 col-form-label">
                    Desc 4
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc4"
                      id="desc4"
                      rows="3"
                      value={desc4}
                      onChange={(e) => setDesc4(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc5" className="col-sm-2 col-form-label">
                    Desc 5
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc5"
                      id="desc5"
                      rows="3"
                      value={desc5}
                      onChange={(e) => setDesc5(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc6" className="col-sm-2 col-form-label">
                    Desc 6
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc6"
                      id="desc6"
                      rows="3"
                      value={desc6}
                      onChange={(e) => setDesc6(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc7" className="col-sm-2 col-form-label">
                    Desc 7
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc7"
                      id="desc7"
                      rows="3"
                      value={desc7}
                      onChange={(e) => setDesc7(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc8" className="col-sm-2 col-form-label">
                    Desc 8
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc8"
                      id="desc8"
                      rows="3"
                      value={desc8}
                      onChange={(e) => setDesc8(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc9" className="col-sm-2 col-form-label">
                    Desc 9
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc9"
                      id="desc9"
                      rows="3"
                      value={desc9}
                      onChange={(e) => setDesc9(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row pt-3">
                  <label htmlFor="desc10" className="col-sm-2 col-form-label">
                    Desc 10
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      name="desc10"
                      id="desc10"
                      rows="3"
                      value={desc10}
                      onChange={(e) => setDesc10(e.target.value)}
                      type="text"
                    ></textarea>
                  </div>
                </div>

                <div className="text-body-secondary text-center pt-4">
                  <button
                    type="submit"
                    className="btn btn-success text-white me-3"
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

export default AddArtikelAdmin;
