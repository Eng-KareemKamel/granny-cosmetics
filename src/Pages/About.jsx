import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-md-6">
          <img
            src="../../public/images/about-img.png"
            alt="About our store"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-bold mb-3">About Our Store</h2>
          <p className="text-muted mb-4">
            We’re passionate about providing top-quality products and excellent service.
            Our mission is to make your shopping experience simple, fast, and reliable —
            with handpicked items that fit your lifestyle.
          </p>

          <h5 className="fw-semibold mb-3">Our Values</h5>
          <ul className="text-muted mb-4">
            <li>High-quality and trusted products</li>
            <li>Fast and secure delivery</li>
            <li>Friendly customer support</li>
          </ul>

          <Link to="/contact" className="btn btn-dark px-4">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
