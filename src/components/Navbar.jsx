import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="menu-par">
            <div className="logo-par">
              <Link to="/">
                <h2>KYAH| tra.</h2>
              </Link>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <Link to="/" className="menu-hover" href="index.html">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="menu-hover" href="index.html">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="menu-hover" href="index.html">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/Gallery" className="menu-hover" href="index.html">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/Blog" className="menu-hover" href="index.html">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div id="toggle-btn">
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
