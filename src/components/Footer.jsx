import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="py-4">
        <div className="container footer-row">
          <div className="footer-item">
            <a href="#main" className="site-brand">
              KYAH|<span> Tra.</span>
            </a>
            <p className="text">
              Indulge in a world of wanderlust and create unforgettable memories
              with our customized travel experiences. Let us be your guide as you
              embark on a journey of a lifetime.
            </p>
          </div>

          <div className="footer-item">
            <h2>Follow us on: </h2>
            <ul className="social-links">
              <li style={{ margin: '0 50px' }}>
                <a href="https://www.facebook.com/kyahtravelandtours">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li style={{ margin: '0 0px' }}>
                <a href="https://www.instagram.com/kyah_travel_and_tours/">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <h2>Popular Places:</h2>
            <ul>
              <li>Bagiuo City</li>
              <li>Ilocos</li>
              <li>Anawangin</li>
              <li>Sagada</li>
              <li>La Union</li>
            </ul>
          </div>

          <div className="footer-item">
            <h2>Contact Us:</h2>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt" /> Studio City Filinvest City Alabang Muntinlupa, Muntinlupa City, Philippines, 1771 
              </li>
              <br/>
              <li>
                <i className="fas fa-phone" /> 0917 147 7889
              </li>
              <br />
              <li>
                <i className="fas fa-envelope" /> kyah_tra@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
