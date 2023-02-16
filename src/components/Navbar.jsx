import React from 'react'

function Navbar() {
  return (  
    <>
        <nav>
            <div className="container">
                <div className="menu-par">
                    <div className="logo-par">
                        <a href="index.html">
                            <h2>KYAH| tra.</h2>
                        </a>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><a className="menu-hover" href="index.html">Home</a></li>
                            <li><a className="menu-hover" href="index.html">About</a></li>
                            <li><a className="menu-hover" href="index.html">Contact</a></li>
                            <li><a className="menu-hover" href="index.html">Gallery</a></li>
                            <li><a className="menu-hover" href="index.html">Blog</a></li>
                        </ul>
                    </div>
                    <div id="toggle-btn">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </div>
        </nav>             
    </>      
  )
}

export default Navbar;