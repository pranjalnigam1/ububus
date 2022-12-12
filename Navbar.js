import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>

    {/* nav 1 */}

      <div>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" imgsrc="./icons/Logo.svg"><img src="" alt="logo" width="500" height="600"/>CHOLA</a>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search"placeholder="Search"aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
{/* nav 2 */}


        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-primary me-md-2" type="button">Approve</button>
  <button className="btn btn-primary" type="button">Reject</button>
  <button className="btn btn-primary" type="button">Send Back</button>
  <button className="btn btn-primary" type="button">Generate CAM</button>
</div>
        {/* nav 3 */}

      <div className="nav-3">
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Applicant
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              lead ID
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Employment
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/">
              Loan Amount
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Tenure</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {" "}
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
};
export default Navbar;
