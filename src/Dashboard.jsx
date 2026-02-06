import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <main>
        {/* Sidebar START */}
        <nav className="navbar sidebar navbar-expand-xl navbar-light">
          {/* Navbar brand for xl START */}
          <div className="d-flex align-items-center">
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
          </div>
          {/* Navbar brand for xl END */}
          <div
            className="offcanvas offcanvas-start flex-row custom-scrollbar h-100"
            data-bs-backdrop="true"
            tabIndex={-1}
            id="offcanvasSidebar"
          >
            <div className="offcanvas-body sidebar-content d-flex flex-column pt-4">
              {/* Sidebar menu START */}
              <ul className="navbar-nav flex-column" id="navbar-sidebar">
                {/* Menu item */}
                <li className="nav-item">
                  <a href="admin-dashboard.html" className="nav-link">
                    Dashboard
                  </a>
                </li>
                {/* Title */}
                <li className="nav-item ms-2 my-2">Pages</li>
                {/* Menu item */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#collapsebooking"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapsebooking"
                  >
                    Bookings
                  </a>
                  {/* Submenu */}
                  <ul
                    className="nav collapse flex-column"
                    id="collapsebooking"
                    data-bs-parent="#navbar-sidebar"
                  >
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="admin-booking-list.html">
                        Booking List
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="admin-booking-detail.html">
                        Booking Detail
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Menu item */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#collapseguest"
                    role="button"
                    aria-expanded="true"
                    aria-controls="collapseguest"
                  >
                    Guests
                  </a>
                  {/* Submenu */}
                  <ul
                    className="nav collapse flex-column show"
                    id="collapseguest"
                    data-bs-parent="#navbar-sidebar"
                  >
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="admin-guest-list.html">
                        Guest List
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link active"
                        href="admin-guest-detail.html"
                      >
                        Guest Detail
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Menu item */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#collapseagent"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseagent"
                  >
                    Agents
                  </a>
                  {/* Submenu */}
                  <ul
                    className="nav collapse flex-column"
                    id="collapseagent"
                    data-bs-parent="#navbar-sidebar"
                  >
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="admin-agent-list.html">
                        Agent List
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="admin-agent-detail.html">
                        Agent Detail
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Menu item */}
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="admin-reviews.html">
                    Reviews
                  </a>
                </li>
                {/* Menu item */}
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="admin-earnings.html">
                    Earnings
                  </a>
                </li>
                {/* Menu item */}
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="admin-settings.html">
                    Admin Settings
                  </a>
                </li>
                {/* Menu item */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#collapseauthentication"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseauthentication"
                  >
                    Authentication
                  </a>
                  {/* Submenu */}
                  <ul
                    className="nav collapse flex-column"
                    id="collapseauthentication"
                    data-bs-parent="#navbar-sidebar"
                  >
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="sign-up.html">
                        Sign Up
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="sign-in.html">
                        Sign In
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="forgot-password.html">
                        Forgot Password
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a className="nav-link" href="error.html">
                        Error 404
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Title */}
                <li className="nav-item ms-2 my-2">Documentation</li>
                {/* Menu item */}
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="docs/index.html">
                    Documentation
                  </a>
                </li>
                {/* Menu item */}
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="docs/changelog.html">
                    Changelog
                  </a>
                </li>
              </ul>
              {/* Sidebar menu end */}
              {/* Sidebar footer START */}
              <div className="d-flex align-items-center justify-content-between text-primary-hover mt-auto p-3">
                <a
                  className="h6 fw-light mb-0 text-body"
                  href="sign-in.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Sign out"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket" /> Log out
                </a>
                <a
                  className="h6 mb-0 text-body"
                  href="admin-settings.html"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  aria-label="Settings"
                >
                  <i className="bi bi-gear-fill" />
                </a>
              </div>
              {/* Sidebar footer END */}
            </div>
          </div>
        </nav>
        {/* Sidebar END */}
        {/* Page content START */}
        <div className="page-content">
          {/* Top bar START */}
          <nav className="navbar top-bar navbar-light py-0 py-xl-3">
            <div className="container-fluid p-0">
              <div className="d-flex align-items-center w-100">
                {/* Logo START */}
                <div className="d-flex align-items-center d-xl-none">
                  <a className="navbar-brand" href="index.html">
                    <img
                      className="navbar-brand-item h-40px"
                      src="assets/images/logo-icon.svg"
                      alt
                    />
                  </a>
                </div>
                {/* Logo END */}
                {/* Toggler for sidebar START */}
                <div className="navbar-expand-xl sidebar-offcanvas-menu">
                  <button
                    className="navbar-toggler me-auto p-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSidebar"
                    aria-controls="offcanvasSidebar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    data-bs-auto-close="outside"
                  >
                    <i
                      className="bi bi-list text-primary fa-fw"
                      data-bs-target="#offcanvasMenu"
                    />
                  </button>
                </div>
                {/* Toggler for sidebar END */}
                {/* Top bar left */}
                <div className="navbar-expand-lg ms-auto ms-xl-0">
                  {/* Toggler for menubar START */}
                  <button
                    className="navbar-toggler ms-auto p-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTopContent"
                    aria-controls="navbarTopContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="bi bi-search" />
                  </button>
                  {/* Toggler for menubar END */}
                  {/* Topbar menu START */}
                  <div
                    className="collapse navbar-collapse w-100 z-index-1"
                    id="navbarTopContent"
                  >
                    {/* Top search START */}
                    <div className="nav my-3 my-xl-0 flex-nowrap align-items-center">
                      <div className="nav-item w-100">
                        <form className="position-relative">
                          <input
                            className="form-control bg-light pe-5"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                          <button
                            className="bg-transparent px-2 py-0 border-0 position-absolute top-50 end-0 translate-middle-y"
                            type="submit"
                          >
                            <i className="fas fa-search fs-6 text-primary" />
                          </button>
                        </form>
                      </div>
                    </div>
                    {/* Top search END */}
                  </div>
                  {/* Topbar menu END */}
                </div>
                {/* Top bar left END */}
                {/* Top bar right START */}
                <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
                  {/* Dark mode options START */}
                  <li className="nav-item dropdown ms-3">
                    <button
                      className="nav-notification lh-0 btn btn-light p-0 mb-0"
                      id="bd-theme"
                      type="button"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-circle-half fa-fw theme-icon-active"
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
                            className="bi bi-circle-half fa-fw mode-switch"
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
                  {/* Dark mode options END*/}
                  {/* Notification dropdown START */}
                  <li className="nav-item dropdown ms-3">
                    {/* Notification button */}
                    <a
                      className="nav-notification btn btn-light p-0 mb-0"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-auto-close="outside"
                    >
                      <i className="bi bi-bell fa-fw" />
                    </a>
                    {/* Notification dote */}
                    <span className="notif-badge animation-blink" />
                    {/* Notification dropdown menu START */}
                    <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0">
                      <div className="card bg-transparent">
                        {/* Card header */}
                        <div className="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
                          <h6 className="m-0">
                            Notifications{" "}
                            <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                              4 new
                            </span>
                          </h6>
                          <a className="small" href="#">
                            Clear all
                          </a>
                        </div>
                        {/* Card body START */}
                        <div className="card-body p-0">
                          <ul className="list-group list-group-flush list-unstyled p-2">
                            {/* Notification item */}
                            <li>
                              <a
                                href="#"
                                className="list-group-item list-group-item-action rounded notif-unread border-0 mb-1 p-3"
                              >
                                <h6 className="mb-2">
                                  New! Booking flights from New York ✈️
                                </h6>
                                <p className="mb-0 small">
                                  Find the flexible ticket on flights around the
                                  world. Start searching today
                                </p>
                                <span>Wednesday</span>
                              </a>
                            </li>
                            {/* Notification item */}
                            <li>
                              <a
                                href="#"
                                className="list-group-item list-group-item-action rounded border-0 mb-1 p-3"
                              >
                                <h6 className="mb-2">
                                  Sunshine saving are here 🌞 save 30% or more
                                  on a stay
                                </h6>
                                <span>15 Nov 2022</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* Card body END */}
                        {/* Card footer */}
                        <div className="card-footer bg-transparent text-center border-top">
                          <a href="#" className="btn btn-sm btn-link mb-0 p-0">
                            See all incoming activity
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Notification dropdown menu END */}
                  </li>
                  {/* Notification dropdown END */}
                  {/* Profile dropdown START */}
                  <li className="nav-item ms-3 dropdown">
                    {/* Avatar */}
                    <a
                      className="avatar avatar-sm p-0"
                      href="#"
                      id="profileDropdown"
                      role="button"
                      data-bs-auto-close="outside"
                      data-bs-display="static"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        className="avatar-img rounded-2"
                        src="assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                      aria-labelledby="profileDropdown"
                    >
                      {/* Profile info */}
                      <li className="px-3 mb-3">
                        <div className="d-flex align-items-center">
                          {/* Avatar */}
                          <div className="avatar me-3">
                            <img
                              className="avatar-img rounded-circle shadow"
                              src="assets/images/avatar/01.jpg"
                              alt="avatar"
                            />
                          </div>
                          <div>
                            <a className="h6 mt-2 mt-sm-0" href="#">
                              Lori Ferguson
                            </a>
                            <p className="small m-0">example@gmail.com</p>
                          </div>
                        </div>
                      </li>
                      {/* Links */}
                      <li>
                        {" "}
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-bookmark-check fa-fw me-2" />
                          My Bookings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-heart fa-fw me-2" />
                          My Wishlist
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-gear fa-fw me-2" />
                          Settings
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i className="bi bi-info-circle fa-fw me-2" />
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item bg-danger-soft-hover"
                          href="#"
                        >
                          <i className="bi bi-power fa-fw me-2" />
                          Sign Out
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Profile dropdown END */}
                </ul>
                {/* Top bar right END */}
              </div>
            </div>
          </nav>
          {/* Top bar END */}
          {/* Page main content START */}
          <div className="page-content-wrapper p-xxl-4">
            <Outlet />
          </div>{" "}
          {/* Page main content END */}
        </div>
        {/* Page content END */}
      </main>
    </>
  );
}

export default Dashboard;
