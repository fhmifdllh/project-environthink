import React, { useEffect, useState } from 'react'
import { FaPen, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getDataAksi, deleteAksi } from '../../../Redux/Action/AksiAction';
import { Spinner } from 'react-bootstrap';
import NavbarAdmin from '../Sidebar/NavbarAdmin';
import Swal from 'sweetalert2';
import AksiVector from "../../../assets/AksiVector.jpg";

function AksiAdmin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {listAksi,isLoading} =useSelector((state)=>state.AksiReducer)
    const [showModal,setShowModal] =useState(false)
    const { totalAksi } = useSelector((state) => state.HomepageAdminReducer);

    useEffect(()=>{
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
      if(localStorage.getItem('role')=='admin'){
        dispatch(getDataAksi())
      }
    },[])

    const handleShowModal= ()=>{
        setShowModal(true)
    }

    const deleteHandler = (id) => {
      Swal.fire({
        title: "Apakah anda yakin ingin menghapus komentar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(
            deleteAksi(id, localStorage.getItem("accessToken"))
          );
          Swal.fire({
            position: "top",
            icon: "success",
            title: 'Berhasil!, "Berhasil Hapus Data Komentar',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    };
  return (
    <>
    <NavbarAdmin />
    <div className="container pt-4">
      <h2>Aksi</h2>
        <div className="row gx-4 gy-2 justify-content-start">
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
                    <Link
                      to="/admin/article"
                      className="total card-text text-dark m-0 fs-3"
                      style={{ textDecoration: "none" }}
                    >
                      {totalAksi}
                    </Link>
                    <p className="totalHomepageAdmin card-text text-dark m-0">
                      Total Aksi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-md-12 d-flex justify-content-end ">
            <button  className="btn bg-primary text-white text-sm px-5 py-2 d-flex gap-2 justify-content-end align-items-center" onClick={handleShowModal}> 
             <FaPlus />  Tambah Aksi
            </button>
          </div>
        </div>

        <div
          className="card mt-4 my-5"
          style={{
            boxShadow: "0px 8px 24px rgba(112, 144, 176, 0.25)",
            borderRadius: 9,
          }}
        >
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col-md-2" className="imagesAdmin">
                      Image
                    </th>
                    <th scope="col-2">Title</th>
                    <th scope="col-2">Number Of Support</th>
                    <th scope="col-2">Target</th>   
                    <th scope="col-4" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading?(
                    <tr>
                      <td>
                        <div className="text-center  d-flex justify-content-center align-items-center my-5 py-5">
                          <span className="mx-2 h1">loading</span>
                          <Spinner animation="border" variant="dark" />
                        </div>
                      </td>
                    </tr>
                  ):listAksi.map((item) => (
                    <tr key={item.id} >
                      <td className="me-5" style={{cursor: "pointer"}}>
                        <img
                          src={item.url}
                          alt="name"
                          className="img-artikel w-100"
                        />
                      </td>
                      <td style={{cursor: "pointer"}} onClick={() => {
                        navigate(`/admin/aksi/${item.id}`);
                      }}>{item.title}</td>
                      <td>{item.numberofsupport}</td>
                      <td>{item.target}</td>  
                      <td>
                        <div className="row">
                          <div className="col-4 px-1">
                            <Link
                              to="/"
                              className="btn p-0 text-success w-100 "
                            >
                              <FaPen />
                            </Link>
                          </div>
                          <div className="col-4 px-1">
                            <Link
                              onClick={() => deleteHandler(item.id)}
                              className="btn p-0 text-danger w-100 "
                            >
                              <FaTrashAlt/>
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default AksiAdmin