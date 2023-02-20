import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import Ourteam from "./Ourteam";

function About() {
  return (
    <div>
      <Navbar />
      <Header />
      <section id="about" className="py-4">
        <div className="container">
          <div className="title-wrap">
            <span className="sm-title">things to know about us</span>
            <h2 className="lg-title">our story</h2>
          </div>

          <div className="about-row">
            <div className="about-left my-2">
              <img src="../src/images/Kyah.logo.jpg" alt="about img" />
            </div>
            <div className="about-right">
              <h2>Kyah Tra</h2>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                vitae sed aperiam qui repudiandae earum voluptatem. Modi at
                inventore omnis veniam necessitatibus exercitationem vel
                nesciunt delectus ex officiis, culpa doloremque odit illo saepe
                placeat. Delectus consequuntur reprehenderit omnis accusantium
                officiis!
              </p>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique explicabo blanditiis quidem consequuntur qui quaerat
                fuga iste tenetur consequatur porro. Aliquam maiores alias
                doloribus at quisquam quo numquam perferendis. Odit!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Ourteam />
      <Footer />
    </div>
  )
}

export default About;
