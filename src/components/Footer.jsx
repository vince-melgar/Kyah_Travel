import React from 'react'

function Footer() {
  return (
    <div>
        <footer className = "py-4">
            <div className = "container footer-row">
                <div className = "footer-item">
                    <a href = "#main" className = "site-brand">
                        KYAH|<span> Tra.</span>
                    </a>
                    <p className = "text">Indulge in a world of wanderlust and create unforgettable memories with our customized travel experiences. Let us be your guide as you embark on a journey of a lifetime.</p>
                </div>

                <div className = "footer-item">
                    <h2>Follow us on: </h2>
                    <ul className = "social-links">
                        <li>
                            <a href = "https://www.facebook.com/kyahtravelandtours">
                                <i className = "fab fa-facebook-f"/>
                            </a>
                        </li>
                        <li>
                            <a href = "https://www.instagram.com/kyah_travel_and_tours/">
                                <i className = "fab fa-instagram"/>
                            </a>
                        </li>
                      
                    </ul>
                </div>

                <div className = "footer-item">
                    <h2>Popular Places:</h2>
                    <ul>
                        <li><a href = "#">Bagiuo City</a></li>
                        <li><a href = "#">Ilocos</a></li>
                        <li><a href = "#">Anawangin</a></li>
                        <li><a href = "#">Sagada</a></li>
                        <li><a href = "#">La Union</a></li>
                    </ul>
                </div>

                <div className = "subscribe-form footer-item">
                    <h2>Subscribe for Newsletter!</h2>
                    <form className = "flex">
                        <input type = "email" placeholder="Enter Email" className = "form-control"/>
                        <input type = "submit" className = "btn" value = "Subscribe"/>
                    </form>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer