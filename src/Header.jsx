import React from "react";

function Header() {
  return (
    <>
      <header className="navbar-light header-sticky">
        {/* Logo Nav START */}
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            {/* Logo START */}
            <a className="navbar-brand" href="index.html">
              <img
                className="light-mode-item navbar-brand-item"
                src="assets/images/logo.svg"
                alt="logo"
              />
              <img
                className="dark-mode-item navbar-brand-item"
                src="assets/images/logo-light.svg"
                alt="logo"
              />
            </a>
            {/* Logo END */}
            {/* Responsive navbar toggler */}
            <button
              className="navbar-toggler ms-auto mx-3 me-xl-0 p-0 p-sm-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-animation">
                <span />
                <span />
                <span />
              </span>
            </button>
            {/* Main navbar START */}
            <div className="navbar-collapse collapse" id="navbarCollapse">
              {/* Nav traveler menu START */}
              <ul className="navbar-nav navbar-nav-scroll me-auto">
                {/* Nav item 1 Demos */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle rounded px-3 py-3 py-xl-0"
                    href="#"
                    id="categoryMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-suitcase-rolling" /> Travelers
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="categoryMenu">
                    {/* Hotels */}
                    <li className="mb-1">
                      <a
                        href="index.html"
                        className="dropdown-item bg-light-hover d-flex align-items-center rounded p-2"
                      >
                        {/* Icon */}
                        <div className="icon-md bg-primary bg-opacity-10 rounded text-primary flex-shrink-0">
                          <i className="fa-solid fa-hotel" />
                        </div>
                        <div className="ms-2">
                          <h6 className="mb-0">Hotels</h6>
                          <p className="small mb-0 text-body">
                            Small description here
                          </p>
                        </div>
                      </a>
                    </li>
                    {/* Flights */}
                    <li className="mb-1">
                      <a
                        href="index-flight.html"
                        className="dropdown-item bg-light-hover d-flex align-items-center rounded p-2 active"
                      >
                        {/* Icon */}
                        <div className="icon-md bg-primary bg-opacity-10 rounded text-primary flex-shrink-0">
                          <i className="fa-solid fa-plane" />
                        </div>
                        <div className="ms-2">
                          <h6 className="mb-0">Flights</h6>
                          <p className="small mb-0 text-body">
                            Small description here
                          </p>
                        </div>
                      </a>
                    </li>
                    {/* Tour */}
                    <li className="mb-1">
                      <a
                        href="index-tour.html"
                        className="dropdown-item bg-light-hover d-flex align-items-center rounded p-2"
                      >
                        {/* Icon */}
                        <div className="icon-md bg-primary bg-opacity-10 rounded text-primary flex-shrink-0">
                          <i className="fa-solid fa-earth-americas" />
                        </div>
                        <div className="ms-2">
                          <h6 className="mb-0">Tour</h6>
                          <p className="small mb-0 text-body">
                            Small description here
                          </p>
                        </div>
                      </a>
                    </li>
                    {/* Cabs */}
                    <li className="mb-1">
                      <a
                        href="index-cab.html"
                        className="dropdown-item bg-light-hover d-flex align-items-center rounded p-2"
                      >
                        {/* Icon */}
                        <div className="icon-md bg-primary bg-opacity-10 rounded text-primary flex-shrink-0">
                          <i className="fa-solid fa-car" />
                        </div>
                        <div className="ms-2">
                          <h6 className="mb-0">Cab</h6>
                          <p className="small mb-0 text-body">
                            Small description here
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* Nav traveler menu END */}
              {/* Nav main menu START */}
              <ul className="navbar-nav navbar-nav-scroll me-auto">
                {/* Nav item Listing */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="listingMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Listings
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="listingMenu">
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Hotel
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a className="dropdown-item" href="index.html">
                            Hotel Home
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="index-hotel-chain.html"
                          >
                            Hotel Chain
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="index-resort.html">
                            Hotel Resort
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="hotel-grid.html">
                            Hotel Grid
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="hotel-list.html">
                            Hotel List
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="hotel-detail.html">
                            Hotel Detail
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="room-detail.html">
                            Room Detail
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="hotel-booking.html"
                          >
                            Hotel Booking
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Flight
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a className="dropdown-item" href="index-flight.html">
                            Flight Home
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="flight-list.html">
                            Flight List
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="flight-detail.html"
                          >
                            Flight Detail
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="flight-booking.html"
                          >
                            Flight Booking
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Tour
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a className="dropdown-item" href="index-tour.html">
                            Tour Home
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="tour-grid.html">
                            Tour Grid
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="tour-detail.html">
                            Tour Detail
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="tour-booking.html">
                            Tour Booking
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Cab
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a className="dropdown-item" href="index-cab.html">
                            Cab Home
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="cab-list.html">
                            Cab List
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="cab-detail.html">
                            Cab Detail
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="cab-booking.html">
                            Cab Booking
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Directory
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="index-directory.html"
                          >
                            Directory Home
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="directory-detail.html"
                          >
                            Directory Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Add Listing
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a className="dropdown-item" href="join-us.html">
                            Join us
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="add-listing.html">
                            Add Listing
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="add-listing-minimal.html"
                          >
                            Add Listing Minimal
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="listing-added.html"
                          >
                            Listing Added
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Hero
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="hero-inline-form.html"
                          >
                            Hero Inline Form
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="hero-multiple-search.html"
                          >
                            Hero Multiple Search
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="hero-image-gallery.html"
                          >
                            Hero Image Gallery
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="hero-split.html">
                            Hero Split
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="booking-confirm.html">
                        Booking Confirmed
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="compare-listing.html">
                        Compare Listing
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="offer-detail.html">
                        Offer Detail
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Nav item Pages */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="pagesMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    <li>
                      {" "}
                      <a className="dropdown-item" href="about.html">
                        About
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="contact.html">
                        Contact
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="contact-2.html">
                        Contact 2
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="team.html">
                        Our Team
                      </a>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Authentication
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a className="dropdown-item" href="sign-in.html">
                            Sign In
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="sign-up.html">
                            Sign Up
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="forgot-password.html"
                          >
                            Forgot Password
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="two-factor-auth.html"
                          >
                            Two factor authentication
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Blog
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a className="dropdown-item" href="blog.html">
                            Blog
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="blog-detail.html">
                            Blog Detail
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Help
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a className="dropdown-item" href="help-center.html">
                            Help Center
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className="dropdown-item" href="help-detail.html">
                            Help Detail
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="privacy-policy.html"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="terms-of-service.html"
                          >
                            Terms of Service
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="pricing.html">
                        Pricing
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="faq.html">
                        FAQs
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="error.html">
                        Error 404
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="coming-soon.html">
                        Coming Soon
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Nav item Account */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="accounntMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Accounts
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="accounntMenu">
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        User Profile
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="account-profile.html"
                          >
                            My Profile
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="account-bookings.html"
                          >
                            My Bookings
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="account-travelers.html"
                          >
                            Travelers
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="account-payment-details.html"
                          >
                            Payment Details
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="account-wishlist.html"
                          >
                            Wishlist
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="account-settings.html"
                          >
                            Settings
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="account-delete.html"
                          >
                            Delete Profile
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">
                        Agent Dashboard
                      </a>
                      <ul className="dropdown-menu" data-bs-popper="none">
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="agent-dashboard.html"
                          >
                            Dashboard
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="agent-listings.html"
                          >
                            Listings
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="agent-bookings.html"
                          >
                            Bookings
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="agent-activities.html"
                          >
                            Activities
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="agent-earnings.html"
                          >
                            Earnings
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="agent-reviews.html"
                          >
                            Reviews
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className="dropdown-item"
                            href="agent-settings.html"
                          >
                            Settings
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className="dropdown-item" href="admin-dashboard.html">
                        Master Admin
                      </a>{" "}
                    </li>
                  </ul>
                </li>
                {/* Nav item link*/}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    id="advanceMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-h" />
                  </a>
                  <ul
                    className="dropdown-menu min-w-auto"
                    data-bs-popper="none"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://support.webestica.com/"
                        target="_blank"
                      >
                        <i className="text-warning fa-fw bi bi-life-preserver me-2" />
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="docs/index.html"
                        target="_blank"
                      >
                        <i className="text-danger fa-fw bi bi-card-text me-2" />
                        Documentation
                      </a>
                    </li>
                    <li>
                      {" "}
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="rtl/index.html"
                        target="_blank"
                      >
                        <i className="text-info fa-fw bi bi-toggle-off me-2" />
                        RTL demo
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://themes.getbootstrap.com/store/webestica/"
                        target="_blank"
                      >
                        <i className="text-success fa-fw bi bi-cloud-download-fill me-2" />
                        Buy Booking!
                      </a>
                    </li>
                    <li>
                      {" "}
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="docs/alerts.html"
                        target="_blank"
                      >
                        <i className="text-orange fa-fw bi bi-puzzle-fill me-2" />
                        Components
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* Nav main menu END */}
            </div>
            {/* Main navbar END */}
            {/* Navbar right side START */}
            <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
              {/* Dark mode options START */}
              <li className="nav-item dropdown me-2">
                <button
                  className="btn btn-link text-warning p-0 mb-0"
                  id="bd-theme"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-circle-half theme-icon-active fa-fw"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                    <use href="#" />
                  </svg>
                </button>
                <ul
                  className="dropdown-menu min-w-auto dropdown-menu-end"
                  aria-labelledby="bd-theme"
                >
                  <li className="mb-1">
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="light"
                    >
                      <svg
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-brightness-high-fill fa-fw mode-switch me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        <use href="#" />
                      </svg>
                      Light
                    </button>
                  </li>
                  <li className="mb-1">
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center"
                      data-bs-theme-value="dark"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-moon-stars-fill fa-fw mode-switch me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                        <use href="#" />
                      </svg>
                      Dark
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item d-flex align-items-center active"
                      data-bs-theme-value="auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-circle-half fa-fw mode-switch me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                        <use href="#" />
                      </svg>
                      Auto
                    </button>
                  </li>
                </ul>
              </li>
              {/* Dark mode options END */}
              {/* Search */}
              <li className="nav-item dropdown nav-search me-2">
                <a
                  className="nav-link mb-0 py-0"
                  role="button"
                  href="#"
                  id="navSearch"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                >
                  <i className="bi bi-search fs-5"> </i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end shadow rounded p-2"
                  aria-labelledby="navSearch"
                >
                  <form className="input-group">
                    <input
                      className="form-control border-primary"
                      type="search"
                      placeholder="Search..."
                      aria-label="Search"
                    />
                    <button className="btn btn-primary m-0" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </li>
              {/* Sign In button */}
              <li className="nav-item ms-2 d-none d-sm-block">
                <a href="#" className="btn btn-sm btn-primary-soft mb-0">
                  <i className="fa-solid fa-right-to-bracket me-2" />
                  Sign Up
                </a>
              </li>
            </ul>
            {/* Navbar right side END */}
          </div>
        </nav>
        {/* Logo Nav END */}
      </header>
    </>
  );
}

export default Header;
