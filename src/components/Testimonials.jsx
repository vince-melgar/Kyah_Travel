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
                        <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis, asperiores, velit iste eos officiis tempora magni quaerat quo consectetur expedita cum recusandae facere nam voluptate minus iusto eum. Delectus!</p>
                        <div className = "test-item-info">
                            <img src = "./src/images/test-1.jpg" alt = "testimonial"/>
                            <div>
                                <h3>Kevin Wilson</h3>
                                <p className = "text">Trip to Bagiuo</p>
                            </div>
                        </div>
                    </div>

                    <div className = "test-item">
                        <p className = "text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ut dolores tenetur harum deserunt. Maxime tenetur consectetur recusandae nobis fugit iusto natus quibusdam nulla!</p>
                        <div className = "test-item-info">
                            <img src = "./src/images/test-2.jpg" alt = "testimonial"/>
                            <div>
                                <h3>Ben Davis</h3>
                                <p className = "text">Trip to Anawangin</p>
                            </div>
                        </div>
                    </div>

                    <div className = "test-item">
                        <p className = "text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sapiente amet expedita quae autem deleniti quo magni numquam facilis soluta dicta, praesentium ipsum, quos optio sed quibusdam! Reprehenderit recusandae provident id nemo!</p>
                        <div className = "test-item-info">
                            <img src = "./src/images/test-3.jpg" alt = "testimonial"/>
                            <div>
                                <h3>Jaura Jones</h3>
                                <p className = "text">Trip to Sagada</p>
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