import { useEffect, useState } from "react";
import NavbarAdmin from '../Sidebar/NavbarAdmin'
import { Link, useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../../Redux/Action/AksiAction";

function DetailAksiAdmin() {
    const { key } = useParams();
    const dispatch = useDispatch();
    const { detailAksi, listAksi, isLoading,kontributor } = useSelector(
    (state) => state.AksiReducer
  );

    useEffect(() => {
        dispatch(getDetail(key));
    }, [key,getDetail]);
  return (
    <>
        <NavbarAdmin />
        <div>
            <div className='container pt-4'>
                <h2>Detail Article</h2>
                <div className="row mb-4">
                    <div className="col-md-12 d-flex justify-content-end">
                    <Link
                        to=""
                        className="btn bg-success text-white text-sm me-4 px-5 py-2"
                    >
                        Update
                    </Link>
                    <button
                        className="btn bg-danger text-white text-sm me-5 px-5 py-2"
                    >
                        Delete
                    </button>
                    </div>
                </div>
                {isLoading ? (
                    <div className="text-center d-flex justify-content-center align-items-center my-5 py-5">
                        <span className="mx-2 h1">loading</span>
                        <Spinner animation="border" variant="dark" />
                    </div>
                ) : (
                    <>
                        {detailAksi.length != 0 && (
                            <>
                                <div className="row mb-4">
                                    <div className="col-md-6 col-lg-6 p-3">
                                        <img className='imgArticleAdmin' src={detailAksi.url}/>
                                    </div>
                                    <div className="col-md-6 col-lg-6 pt-5">
                                        <h3 className="titleArticle pt-4" id="titleArticle">{detailAksi.title}</h3>
                                        <Link to={`/admin/aksi`} style={{ textDecoration: "none" }}>
                                            <span id="cathegory">Petisi</span> <span id="dot"> </span>
                                        </Link>
                                        {detailAksi.hashtag.map((hashtag) => (
                                            <span
                                                id="hashTag"
                                                key={hashtag}
                                                className="hashTagArticle text-decoration-none me-2 pt-4"
                                            >
                                                #{hashtag}
                                            </span>
                                        ))}
                                        <h5 className="text-dark pt-3">
                                            Number Of Support : {" "}
                                            <span id="author" className="fw-bold">
                                                {" "}
                                                {detailAksi.numberofsupport}
                                            </span>
                                        </h5>
                                        <h5 className="text-dark pt-3">
                                            Target : {" "}
                                            <span id="author" className="fw-bold">
                                                {" "}
                                                {detailAksi.target}
                                            </span>
                                        </h5>
                                    </div>
                                    
                                    <div className="descriptions pt-4 mb-3">
                                        <h3 className="text-primary-dark">Descriptions</h3>
                                        <div className="paragraf col-md-12 ps-0 pe-0 pt-4 ps-3">
                                            <p className="mb-4 paragraf">{detailAksi.desc}</p>
                                            <p className="mb-4 paragraf">{detailAksi.desc1}</p>
                                            <p id="paragraf-konklusi" className="fw-bold paragraf">
                                                {detailAksi.desc2}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                    
                )}
                
            </div>
        </div>
    </>
  )
}

export default DetailAksiAdmin