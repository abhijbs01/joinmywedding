import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row py-4">
          <div className="col-xl-5 col-lg-5 col-md-8 col-sm-6 col-xs-6">
            <div className="ft-info-p1">
              <p className="ft-title">JoinMyWedding</p>
            </div>
            <SubscribeNewsletter />
          </div>

          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <p className="ft-list-title">Services</p>
            <ul className="ft-list-items">
              <li>
                <Link to="/about" title="about">About</Link>
              </li>
              <li>
                <Link to="/wedding" title="weddings">Weddings</Link>
              </li>
              <li>
                <Link to="/press" title="Press">Press</Link>
              </li>
            </ul>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-6">
            <p className="ft-list-title">Legal</p>
            <ul className="ft-list-items">
              <li>
                <Link to={"/faq"} title="faq">Faq</Link>
              </li>
              <li>
                <Link to={"/privacy-notice"} title="faq">Privacy Policy</Link>
              </li>
              <li>
                <Link to={"/terms"} title="Term& conditions">Terms of Services</Link>
              </li>
            </ul>
          </div>

          <div
            className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6"
            id="contact"
          >
            <p className="ft-list-title">Talk To Us</p>
            <ul className="ft-list-items">
              <li>
                <Link to="mailto:abc@gmail.com">abc@gmail.com</Link>
              </li>
              <li>
                <Link to="tel:+919510951483">+91 95109 51483</Link>
              </li>
              <li>
                <Link to="tel:+919313582375">+91 93135 82375</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row py-2">
          <div className="col-lg-6 col-xl-6  col-md-12">
            <p className="ft-copyright">
              © JoinMyWedding Team / All rights reserved
            </p>
          </div>
          <div className="col-lg-6 col-xl-6  col-md-12">
            <ul className="ft-social-links">
              <li>
                <Link
                  to="#"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title="FaceBook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  title="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  title="youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="#000000"
                    viewBox="-6.5 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>youtube</title>
                      <path d="M3.063 10.438v3.906h1.625v-3.906l2.188-6.438h-1.719l-1.281 4.188-1.281-4.188h-1.781zM7.438 10.688c0 1.438 0.125 1.969 0.313 2.531 0.344 0.906 0.969 1.344 1.938 1.344s1.625-0.438 1.969-1.344c0.188-0.563 0.313-1.094 0.313-2.531s-0.125-2.219-0.313-2.781c-0.344-0.906-1-1.344-1.969-1.344s-1.594 0.438-1.938 1.344c-0.188 0.594-0.313 1.344-0.313 2.781zM17.313 14.344v-7.563h-1.5v4.531c0 0.469-0.031 0.844-0.094 1.031-0.094 0.375-0.313 0.531-0.594 0.531s-0.469-0.156-0.563-0.469c-0.031-0.188-0.063-0.531-0.063-0.969v-4.656h-1.438v5.75c0 1.344 0.469 2.031 1.438 2.031 0.563 0 1.063-0.344 1.344-1.063v0.844h1.469zM10.438 10.531v0.563c0 0.906 0 0.906-0.031 1.031-0.094 0.625-0.344 0.969-0.719 0.969-0.406 0-0.625-0.375-0.719-1.125v-1.656c0-0.781 0-1.281 0.031-1.438 0.094-0.563 0.313-0.813 0.688-0.813s0.625 0.344 0.719 0.938c0.031 0.188 0.031 0.688 0.031 1.531zM3.188 15.406h12.656c1.75 0 3.188 1.469 3.188 3.219v6.156c0 1.75-1.438 3.219-3.188 3.219h-12.656c-1.75 0-3.188-1.469-3.188-3.219v-6.156c0-1.75 1.438-3.219 3.188-3.219zM4.313 18.781h1.313v-1.313h-3.781v1.313h1.313v6.688h1.156v-6.688zM11.125 25.469v-0.656c0.188 0.5 0.531 0.813 0.969 0.813 0.531 0 0.906-0.375 1.063-1.156 0.094-0.375 0.156-1.031 0.156-1.969 0-0.969-0.063-1.656-0.125-2.063-0.156-0.781-0.563-1.156-1.094-1.156-0.406 0-0.719 0.25-0.906 0.688v-2.5h-1.031v8h0.969zM15.063 22.656h2.125v-0.469c0-1.125-0.125-1.844-0.313-2.219-0.25-0.438-0.688-0.688-1.25-0.688-0.594 0-1.031 0.25-1.281 0.656-0.156 0.25-0.281 0.625-0.313 1.125-0.031 0.219-0.063 0.656-0.063 1.219 0 0.719 0.031 1.188 0.063 1.438 0.031 0.563 0.156 1.031 0.344 1.344 0.25 0.375 0.688 0.563 1.219 0.563s0.938-0.156 1.188-0.469 0.375-0.813 0.375-1.531v-0.25h-1.031c0 0.813-0.156 1.188-0.5 1.188-0.25 0-0.438-0.188-0.5-0.563-0.063-0.188-0.063-0.531-0.063-0.969v-0.375zM8.156 25.469h1.063v-6.031h-1.094v3.844c0 0.344 0 0.594-0.063 0.75-0.063 0.25-0.188 0.375-0.406 0.375-0.188 0-0.344-0.094-0.406-0.344-0.063-0.125-0.063-0.375-0.063-0.688v-3.938h-1v4.719c0 0.969 0.281 1.469 1 1.469 0.406 0 0.75-0.281 0.969-0.781v0.625zM15.063 21.531v-0.094c-0.031-0.344 0-0.656 0.094-0.844 0.094-0.156 0.25-0.25 0.438-0.25 0.219 0 0.375 0.125 0.438 0.344 0.063 0.156 0.063 0.406 0.063 0.75v0.25h-1.031v-0.156zM11.75 20.438c0.25 0 0.406 0.313 0.469 0.844v1.188s0 1.094-0.031 1.188c-0.031 0.531-0.188 0.813-0.438 0.813-0.281 0-0.5-0.219-0.563-0.656-0.031-0.156-0.031-0.531-0.031-1.094 0-0.781 0-1.219 0.031-1.344 0.063-0.594 0.25-0.938 0.563-0.938z"></path>{" "}
                    </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  title="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="#000000"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
                      <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
                    </g>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
