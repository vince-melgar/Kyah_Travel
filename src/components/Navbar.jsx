import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

    return(
    <>           
      <nav className="navbar  sticky-top navbar-dark navbar-expand-lg bg-dark shadow small" >
        <div className="container-fluid" style={{margin: "0 30px", fontWeight: " bolder" }}>
              <Link to="/" className="navbar-brand" style={{fontSize: "30px"}} >
                  KYAH| Tra.
              </Link>
              <button 
                      className="navbar-toggler border-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbar-supported-content"
                      aria-controls="navbar-supported-content"
                      aria-expanded="false"
                      aria-label="Toggle Navigation">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                      </svg>
              </button>
              <div className="collapse navbar-collapse" id="navbar-supported-content" >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{fontSize: "18px"}}>
                          <li className="nav-item px-3">
                                  <Link to="/" className="nav-link" aria-current="page">Home</Link>
                          </li>
                          <li className="nav-item px-3">
                                  <Link to="/About" className="nav-link">About Us</Link>
                          </li>
                          <li className="nav-item px-3">
                                  <Link to="/Contact" className="nav-link">Contact</Link>
                          </li>
                          <li className="nav-item px-3">
                                  <Link to="/Gallery" className="nav-link">Gallery</Link>
                          </li>
                          <li className="nav-item px-3">
                                  <Link to="/Blog" className="nav-link">Blog</Link>
                          </li>
                  </ul>
                      <form className="d-flex"> 
                              { isAuthenticated ? <button className="btn btn-link nav-link btn-outline-success" onClick={() => logout({ logoutParams: { returnTo: window.location.origin}})}>Log Out</button> : <button className="btn btn-link nav-link btn-outline-success " onClick={() => loginWithRedirect()}>Log In</button>}
                      </form>
              </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
