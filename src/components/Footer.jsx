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
                    <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptates maiores nam vitae iusto. Placeat rem sint voluptas natus exercitationem autem quod neque, odit laudantium reiciendis ipsa suscipit veritatis voluptate.</p>
                </div>

                <div className = "footer-item">
                    <h2>Follow us on: </h2>
                    <ul className = "social-links">
                        <li>
                            <a href = "#">
                                <i className = "fab fa-facebook-f"/>
                            </a>
                        </li>
                        <li>
                            <a href = "#">
                                <i className = "fab fa-instagram"/>
                            </a>
                        </li>
                        <li>
                            <a href = "#">
                                <i className = "fab fa-twitter"/>
                            </a>
                        </li>
                        <li>
                            <a href = "#">
                                <i className = "fab fa-pinterest"/>
                            </a>
                        </li>
                        <li>
                            <a href = "#">
                                <i className = "fab fa-google-plus"/>
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