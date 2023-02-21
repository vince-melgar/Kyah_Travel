import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";


function Blog() {
  return (
    <div>
      <Navbar />     
      {/* <Header /> */}
      <section id="blog" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <h2 className="sm-title">read these blog for information</h2>
            <h3 className="lg-title">recent blog</h3>
          </div>

          <div className="blog-row">
            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-1.jpg" alt="blog" />
                <span className="blog-date">February 6, 2023</span>
              </div>
              <div className="blog-item-bottom">
                <a>
                  Panagbenga Festival
                </a>
                <p className="text">
                The Panagbenga Festival, also known as the "Baguio Flower Festival," is an annual celebration held in Baguio City, Philippines. It is a month-long event that starts from the first of February and culminates in a grand parade and street dancing on the last Sunday of the month. 
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-2.jpg" alt="blog" />
                <span className="blog-date">February 2, 2023</span>
              </div>
              <div className="blog-item-bottom">
                <a>
                  Sagada Festival
                </a>
                <p className="text">
                The Sagada Festival is a time of joy and celebration, as locals and visitors alike come together to participate in a variety of events and activities. From traditional dances to music performances, cultural exhibits to sports competitions, there's something for everyone to enjoy. 
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-6.jpg" alt="blog" />
                <span className="blog-date">January 14, 2023 </span>
              </div>
              <div className="blog-item-bottom">
                <a>
                  Anawangin Escapade
                </a>
                <p className="text">
                Anawangin Cove is a hidden gem located in the province of Zambales, Philippines. This secluded beach is accessible only by boat, which makes it a perfect destination for those who want to escape the city and immerse themselves in nature. Island hopping is also a popular activity in Anawangin Cove. Nearby islands like Capones Island and Camara Island are stunning and offer a unique experience for visitors.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-5.jpg" alt="blog" />
                <span className="blog-date">December 16, 2022</span>
              </div>
              <div className="blog-item-bottom">
                <a>
                  Baggak Festival
                </a>
                <p className="text">
                The town of Bauang, La Union, springs to life to put on this vibrant celebration. It is customary in Bauang for "Baggak" to be used as a metaphor for the beginning of a new day. There is an inherent unity and variety of culture in the Ilocano spirit shown during this event In addition, this is an appropriate time to greet and mingle with the returning family members. The festival's anniversary will be marked with a different theme each year.
                </p>
              </div>
            </div>
            
            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-3.jpg" alt="blog" />
                <span className="blog-date">June 23, 2022</span>
              </div>
              <div className="blog-item-bottom">
                <a>
                Empanada Festival
                </a>
                <p className="text">
                The noticeable orange tint containing a savory filling of the garlicky-flavored Batac longganisa, grated papaya, bean sprouts (toge), and egg makes the iconic look and taste of the Batac Empanada that is now sold outside its city of origin, Batac City, Ilocos Norte – even reaching faraway provinces.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-4.jpg" alt="blog" />
                <span className="blog-date">April 6, 2022</span>
              </div>
              <div className="blog-item-bottom">
                <a>
                  Sillag: Festival of Lights
                </a>
                <p className="text">
                The Sillag Festival was first held in 2012 in the province of Aurora, Philippines. The festival was created as a way to promote the province's tourism industry, as well as to celebrate the province's rich culture and history. The festival's name, "Sillag," is derived from the local term for "moonbeam" or "moonlight."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Blog;
