import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { Modal, Button } from 'antd';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [loginmodal, setloginmodal] = useState(false);

  const showModal = () => {
    setloginmodal(true);
  };
  const handleOk = () => {
    setloginmodal(false);
  };
  const handleCancel = () => {
    setloginmodal(false);
  };

  const openNav = () => {
    setNav(!nav);
  };


  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">JoinmyWedding</Link>
      </h1>

      {/* Desktop */}
      <nav>
        <ul className="navbar-items">
          <li className="active">
            <Link to="/" className="navbar-links">
              HOME
            </Link>
          </li>

          <li>
            <Link to="/about" className="navbar-links">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/wedding" className="navbar-links">
              WEDDINGS
            </Link>
          </li>
          <li>
            <Link to="/press" className="navbar-links">
              PRESS
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-links">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/faq" className="navbar-links">
              FAQ
            </Link>
          </li>
        </ul>
      </nav>


      <button
        className="navbar-btn"
        type="button"
        onClick={showModal}
      >
        Login
      </button>

      <Modal open={loginmodal} onOk={handleOk} onCancel={handleCancel} maskClosable={false} footer={false}>
        <div className="login-title">Login yiur Account</div>
        <div className="login-info my-3 border p-3 rounded">
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#044e4e', marginRight: '7px' }} />
            Please note that currently, login is only available via Facebook.
            We appreciate your understanding as we work to enhance your experience.
          </p>
          <p>
            If you are having problems logging in, please see the
            <b> Technical troubleshooting </b> section of our FAQ.
          </p>
        </div>

        <div className="face-book-login border rounded-2">
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <img src="https://i.postimg.cc/FKybGy7v/vecteezy-facebook-logo-png-facebook-icoon-transparant-png-18930698.png" alt="facebook"
                width={60} height={60} className=" text-center mx-3" />
            </div>
            <div>
              <div className="text-center fs-6 ml-4">Continue With Facebook</div>
            </div>
          </div>
        </div>

        <div className="my-2">Not yet registered?</div>

        <div className="booking-btn d-flex  my-3 ">
          <Button style={{
            backgroundColor: '#078e8d',
            width: '100%',
            marginRight: '10px',
            height: '40px'
          }}>
            <Link to="/home" className="button-link">Register a Wedding</Link>
          </Button>
          <Button style={{
            backgroundColor: '#078e8d',
            width: '100%',
            height: '40px'
          }}>
            <Link to="/wedding" className="button-link">
              Book a Wedding
            </Link>
          </Button>
        </div>
      </Modal>



      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/wedding">
              WEDDINGS
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/press">
              PRESS
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/contact">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/faq">
              FAQ
            </Link>
          </li>
        </ul>
        <button
          className="navbar-btn"
          type="button"
          onClick={showModal}
        >
          Login
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
