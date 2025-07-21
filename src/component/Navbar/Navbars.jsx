import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { BsSearch } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Image,
  NavItem,
} from "react-bootstrap";
import { useEffect } from "react";

import userIcon from "../../assets/user.png";
import adminIcon from "../../assets/admin.png";

function Navbars() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <Navbar
        key="lg"
        bg="light"
        expand="lg"
        className="mb-0 d-flex flex-column justify-content-between shadow sticky-top bg-white"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            {" "}
            <img src={Logo} id="logo" alt="Environthink Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                <img src={Logo} id="logo" alt="Environthink Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <ul className="navbar-nav d-flex justify-content-center ">
                  <li className="nav-item mt-1">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item mt-1">
                    <NavLink className="nav-link active" to="/aksi">
                      Aksi
                    </NavLink>
                  </li>
                  <li className="nav-item mt-1">
                    <NavLink className="nav-link active" to="/article">
                      Artikel
                    </NavLink>
                  </li>
                  <li className="nav-item mt-2 mb-2 ms-3 me-4">
                    <NavLink className="" to="/search">
                      <BsSearch
                        size="1.4em"
                        className="searchIcon text-dark "
                      />
                    </NavLink>
                  </li>
                  <li className="nav-item m-1">
                    <NavLink
                      className="btnDonasi btn nav-link active ps-3 pe-3"
                      to="/donasi"
                    >
                      Donasi
                    </NavLink>
                  </li>
                  {localStorage.length === 0 ? (
                    <li className="nav-item ">
                      <div id="button-login">
                        <NavLink
                          className="btnLogin m-1 btn  nav-link active ps-3 pe-3"
                          to="/login"
                        >
                          Login
                        </NavLink>
                      </div>
                    </li>
                  ) : (
                    <li className="nav-item mt-1">
                      <Dropdown align={{ lg: "end" }}>
                        <Dropdown.Toggle
                          variant="transparent"
                          id="dropdown-avatar"
                        >
                          {localStorage.getItem("role") === "admin" ? (
                            // INI AVATAR ADMIN
                            <img
                              src={adminIcon}
                              alt="User Avatar"
                              className="avatar rounded-circle"
                              style={{ width: "30px" }}
                            />
                          ) : (
                            // INI AVATAR USER
                            <img
                              src={userIcon}
                              alt="User Avatar"
                              className="avatar rounded-circle"
                              style={{ width: "30px" }}
                            />
                          )}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            {localStorage.getItem("username")}
                          </Dropdown.Item>

                          <Dropdown.Item onClick={handleLogout}>
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  )}
                </ul>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
