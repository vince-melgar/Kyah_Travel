import React from 'react'

function Services() {
  return (
    <div>
        <section id = "services" className = "py-4">
            <div className = "container">
                <div className = "title-wrap">
                    <span className = "sm-title">know about services that we offer</span>
                    <h2 className = "lg-title">Our services</h2>
                </div>

                <div className = "services-row">
                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-hotel"></i>
                        </span>
                        <h3>Luxurious Hotel</h3>
                        <p className = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                        
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-map-marked-alt"></i>
                        </span>
                        <h3>Trave Guide</h3>
                        <p className = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                        
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-money-bill"></i>
                        </span>
                        <h3>Suitable Price</h3>
                        <p className = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo, totam repellat velit, dignissimos sequi error a minima architecto fugit nisi dolorum repellendus?</p>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services