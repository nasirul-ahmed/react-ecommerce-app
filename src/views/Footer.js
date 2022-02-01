import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted mt-4">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block mx-4">
            <span>Get connect with us at</span>
          </div>

          <div>
            <Link to="" className="me-4 text-reset">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 text-reset">
              <i className="fa fa-github"></i>
            </Link>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold ">
                  <i className="fas fa-gem"></i>E-SHOPPING
                </h6>
                <p>
                  We provide goods that are essential in your daily life.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>

                <p>
                  <Link to="" className="text-reset">
                    Clothing
                  </Link>
                </p>
                <p>
                  <Link to="" className="text-reset">
                    Electronics
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/orders" className="text-reset">
                    Orders
                  </Link>
                </p>
                <p>
                  <Link to="/help" className="text-reset">
                    Help
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fa fa-envelope me-3"></i>
                  nasirul369@gmail.com
                </p>
                <p>
                  <i className="fa fa-phone me-3"></i> +91 9101336849
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright :
          <Link className="text-reset fw-bold" to="/">
            ESHOPPING
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
