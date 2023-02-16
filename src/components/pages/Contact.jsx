import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header'
import Footer from '../Footer'

function Contact() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <section id = "contact" className = "py-4">
            <div className = "container">
                <div className = "title-wrap">
                    <span className = "sm-title">get in touch with us</span>
                    <h2 className = "lg-title">contact us</h2>
                </div>

                <div className = "contact-row">
                    <div className = "contact-left">
                        <form className = "contact-form">
                            <input type = "text" className = "form-control" placeholder="Your name"/>
                            <input type = "email" className = "form-control" placeholder="Your email"/>
                            <textarea rows = "4" className = "form-control" placeholder="Your message"></textarea>
                            <input type = "submit" className = "btn" value = "Send message"/>
                        </form>
                    </div>
                    <div className = "contact-right my-2">
                        <div className = "contact-item">
                            <span className = "contact-icon flex">
                                <i className = "fa fa-phone-alt"/>
                            </span>
                            <div>
                                <span>Phone</span>
                                <p className = "text">+01-584-886-009</p>
                            </div>
                        </div>
                        <div className = "contact-item">
                            <span className = "contact-icon flex">
                                <i className = "fa fa-map-marked-alt"/>
                            </span>
                            <div>
                                <span>Address</span>
                                <p className = "text">102 East 22nd Street, NY</p>
                            </div>
                        </div>
                        <div className = "contact-item">
                            <span className = "contact-icon flex">
                                <i className = "fa fa-envelope"/>
                            </span>
                            <div>
                                <span>Message</span>
                                <p className = "text">info@tripboss.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Contact