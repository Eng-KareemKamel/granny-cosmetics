import React from "react";

export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Contact Us</h2>
      <p className="text-center text-muted mb-5">
        We'd love to hear from you! Fill out the form below or visit us at our location.
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <form className="p-4 bg-white rounded-3 shadow-sm">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@email.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <div className="rounded-3 overflow-hidden shadow-sm">
            <iframe
              title="Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.132645434651!2d31.235711615114377!3d30.044419281885655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584125427e1df9%3A0x29fbd89db6f78de6!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1697120000000!5m2!1sen!2seg"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
