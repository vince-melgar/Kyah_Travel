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
                        <h3>Comfortable Accomodation</h3>
                        <p className = "text">a range of options, from budget-friendly to high-end accommodations. </p>
                        
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-map-marked-alt"></i>
                        </span>
                        <h3>Travel Guide</h3>
                        <p className = "text">Specialize in providing personalized and unforgettable travel experiences. Our knowledgeable guides will ensure that you get the most out of your trip. We offer a variety of tours to different destinations in Northern Luzon, including historical landmarks, natural wonders, and cultural hotspots.</p>
                        
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-money-bill"></i>
                        </span>
                        <h3>Affordable Price</h3>
                        <p className = "text">Our travel packages include a variety of destinations and activities to suit your interests and budget. Whether you're a budget-conscious traveler looking for a deal, or just want to save some money without sacrificing quality, our affordable travel packages are the perfect choice.</p>
                        
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-car"></i>
                        </span>
                        <h3>Safe Transportation</h3>
                        <p className = "text">Our drivers are carefully vetted, trained, and regularly monitored to ensure that they adhere to all traffic rules and regulations. We also maintain our vehicles to the highest standards to ensure that they are in optimal condition and regularly undergo safety inspections.</p>
                        
                    </div>

                    <div className = "services-item">
                        <span className = "services-icon">
                            <i className = "fas fa-camera"></i>
                        </span>
                        <h3>Instagrammable Pictures</h3>
                        <p className = "text">These experiences taken together are much more valuable than the sum of your destination's goods and services. Don't worry of who will be taking your photos, We got you!</p>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Services