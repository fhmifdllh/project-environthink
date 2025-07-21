import "./App.css";
import Footer from "./component/Footer/Footer";
import HomePage from "./component/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aksi from "./component/Aksi/Aksi";
import DetailAksi from "./component/Aksi/DetailAksi";
import AksiTerkait from "./component/Aksi/AksiTerkait";
import Search from "./component/Searchpage/Search";
import Donasi from "./component/Donasi/Donasi";
import Article from "./component/Article/Article";
import DetailArticle from "./component/Article/DetailArticle";
import ArtikelAdmin from "./component/Admin/ArtikelAdmin/ArtikelAdmin";
import HomepageAdmin from "./component/Admin/HomepageAdmin/HomepageAdmin";
import DetailArtikelAdmin from "./component/Admin/ArtikelAdmin/DetailArtikelAdmin";
import AddArtikelAdmin from "./component/Admin/ArtikelAdmin/AddArtikelAdmin";
import ArticleTerkait from "./component/Article/ArticleTerkait";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";

import DonasiAdmin from "./component/Admin/DonasiAdmin/DonasiAdmin";

import AksiAdmin from "./component/Admin/AksiAdmin/AksiAdmin";
import NotFound from "./component/NotFound/NotFound";
import InfografisAdmin from "./component/Admin/InfografisAdmin/InfografisAdmin";
import AddInfografisAdmin from "./component/Admin/InfografisAdmin/AddInfografisAdmin";
import UpdateInfografisAdmin from "./component/Admin/InfografisAdmin/UpdateInfografisAdmin";
import DetailAksiAdmin from "./component/Admin/AksiAdmin/DetailAksiAdmin";

function App() {
  const isAdminRoute = window.location.pathname === "/admin";

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        {/* {isAdminRoute && roleLocalStorage == "admin" ? (
          <NavbarAdmin />
        ) : (
          <Navbars />
        )} */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aksi" element={<Aksi />} />
          <Route path="/aksi/terkait/:hashtag" element={<AksiTerkait />} />
          <Route path="/aksi/:key" element={<DetailAksi />} />
          <Route path="/search" element={<Search />} />
          <Route path="/donasi" element={<Donasi />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article/:key" element={<DetailArticle />} />
          <Route path="/article/terkait/:tag" element={<ArticleTerkait />} />
          {/* {roleLocalStorage === "admin" && (
            <> */}

          <Route path="/admin" element={<HomepageAdmin />} />
          <Route path="/admin/aksi" element={<AksiAdmin />} />
          <Route path="/admin/aksi/:key" element={<DetailAksiAdmin />} />
          <Route path="/admin/article" element={<ArtikelAdmin />} />
          <Route path="/admin/donasi" element={<DonasiAdmin />} />
          <Route path="/admin/article/:key" element={<DetailArtikelAdmin />} />
          <Route path="/admin/infografis" element={<InfografisAdmin />} />
          <Route
            path="/admin/infografis/add-infografis"
            element={<AddInfografisAdmin />}
          />
          <Route
            path="/admin/article/add-article"
            element={<AddArtikelAdmin />}
          />
          <Route
            path="/admin/infografis/update-infografis"
            element={<UpdateInfografisAdmin />}
          />

          {/* )} */}

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
        {!isAdminRoute && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
