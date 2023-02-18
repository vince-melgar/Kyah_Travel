import { Link } from "react-router-dom";
function Navbar() {
    return(

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
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
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
                         <form class="d-flex">
                                <Link to="/LoginForm" classname="nav-link">
                                        <button class="btn btn-outline-success" style={{ padding: "10px", margin: "0 15px" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                                </svg>
                                        </button>
                                </Link>
                        </form>
                </div>
        </div>
</nav>

    )
}
export default Navbar;
