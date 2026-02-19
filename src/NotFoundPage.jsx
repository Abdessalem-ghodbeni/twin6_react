import React from "react";

export default function NotFoundPage() {
  return (
    <>
      <main>
        {/* =======================
Main banner START */}
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-10 text-center mx-auto">
                {/* Image */}
                <img
                  src="assets/images/element/error.svg"
                  className="h-lg-500px mb-4"
                  alt
                />
                {/* Title */}
                <h1 className="display-1 text-primary mb-0">404</h1>
                {/* Subtitle */}
                <h2>Oh no, something went wrong!</h2>
                {/* info */}
                <p className="mb-4">
                  Either something went wrong or this page doesn't exist
                  anymore.
                </p>
                {/* Button */}
                <a href="index-2.html" className="btn btn-light mb-0">
                  Take me to Homepage
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* =======================
Main banner START */}
      </main>
    </>
  );
}
