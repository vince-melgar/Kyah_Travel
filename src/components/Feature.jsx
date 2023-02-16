import React from 'react'

function Feature() {
  return (
    <div>
        <section id = "featured" className = "py-4">
            <div className = "container">
                <div className = "title-wrap">
                    <span className = "sm-title">"Top Destinations: Explore our Recommended Locations"</span>
                    <h2 className = "lg-title">Featured places</h2>
                </div>

                <div className = "featured-row">
                    <div className = "featured-item my-2 shadow">
                        <img src = "./src/images/F-baguio.jpg" alt = "featured place"/>
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                Baguio City
                            </span>
                            <div>
                                <p className = "text"> Often called the "Summer Capital of the Philippines," it is a popular tourist destination for both local and international visitors seeking to escape the heat of the lowlands.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "featured-item my-2 shadow">
                        <img src = "./src/images/F-ilocos.jpg" alt = "featured place"/>
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                Ilocos
                            </span>
                            <div>
                                <p className = "text">Home to a number of stunning natural attractions, such as the Bangui Wind Farm, which features giant wind turbines overlooking the sea, and the Kapurpurawan Rock Formation.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "featured-item my-2 shadow">
                        <img src = "./src/images/F-anawangin.jpg" alt = "featured place"/>
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                Anawangin Cove
                            </span>
                            <div>
                                <p className = "text"> It is known for its pristine shoreline, crystal-clear waters, and scenic landscape of pine trees and volcanic ash.</p>
                            </div>
                        </div>
                    </div>

                    <div className = "featured-item my-2 shadow">
                        <img src = "./src/images/F-sagada.jpg" alt = "featured place"/>
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                Sagada
                            </span>
                            <div>
                                <p className = "text">It is known for its stunning natural beauty, rich cultural heritage, and unique outdoor activities. </p>
                            </div>
                        </div>
                    </div>

                    <div className = "featured-item my-2 shadow">
                        <img src = "./src/images/F-launion.jpg" alt = "featured place"/>
                        <div className = "featured-item-content">
                            <span>
                                <i className = "fas fa-map-marker-alt"></i>
                                La Union
                            </span>
                            <div>
                                <p className = "text">Known for its beautiful beaches, consistent surf breaks, and rich cultural heritage.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Feature;