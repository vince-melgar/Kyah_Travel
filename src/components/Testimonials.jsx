import React from 'react'

function Testimonials() {
  return (
    <div>
        <section id = "testimonials" className = "py-4">
            <div className = "container">
                <div className = "title-wrap">
                    <span className = "sm-title">what our clients say about us</span>
                    <h2 className = "lg-title">testimonials</h2>
                </div>

                <div className = "test-row">
                    <div className = "test-item">
                        <p className = "text">Thank you very much KYAH for showing us around Ilocos. The driver and coordinators are very nice to us. We pray for the continuing sucess of your bookings.</p>
                        <div className = "test-item-info">
                            <img src = "./src/images/test-1.jpg" alt = "testimonial"/>
                            <div>
                                <h3>Demi Bastawang Ducay</h3>
                                <p className = "text">Trip to Ilocos</p>
                            </div>
                        </div>
                    </div>

                    <div className = "test-item">
                        <p className = "text">Visited Sagada in 2019 and Ilocos this year as a joiner. Kyah never let me feel alone. Everything was well-organized. I enjoyed every moment of the trip. So loved the places we visited, ate, and stayed. Looking forward with more travel with Kyah in the next years. See you soon, Kyah Rein and Ses Giselle! 💙💙</p>
                        <div className = "test-item-info">
                            <img src = "./src/images/test-2.jpg" alt = "testimonial"/>
                            <div>
                                <h3>Lyndon Balaga</h3>
                                <p className = "text">Trip to Sagada</p>
                            </div>
                        </div>
                    </div>

                    <div className = "test-item">
                        <p className = "text">Thank you KYAH for making our weekend memorable at Baguio City! Very accommodating and helpful during our trip. The best yung pictures parang nakalibre kami sa prenup hahaha. Maraming salamaaat!</p>
                        <div className = "test-item-info">
                            <img src = "./src/images/test-3.jpg" alt = "testimonial"/>
                            <div>
                                <h3>Tyler Evangelista</h3>
                                <p className = "text">Trip to Baguio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Testimonials