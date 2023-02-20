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
              People often inquire about the significance of KYAH. It appears that this is a relatively new term to many. KYAH is a Filipino expression of endearment used for an older brother, referred to as "KUYA". This travel agency was named after the owner's love of travel, meeting lots of people in the street who appreciate the sunshine and the ocean, thus the name of the travel agency.
              KYAH Travel & Tours is based in Studio City, Filinvest City, Alabang, and Muntinlupa City, Philippines. We began our business in Alabang, Muntinlupa City in 2018.
              Our staff is comprised of highly skilled individuals in the tourism sector focused on our priority of Quality Service and Customer Satisfaction. We are travelers ourselves, so our goal is to provide world-class services to every customer and take them to their desired destination to Discover the Philippines in Comfort and Luxury, without breaking the bank. 
              To give our customers better service, we offer diverse tailored services for everyone’s journey requirements like:
              Terrestrial Tour Packages
              </p>
              <p className="text">
                Group and Private tours
              Urban Tours within Ilocos, Baguio, Anawangin, Sagada & La Union
              Vacation & Promotion Travel Packages across the Philippines
              We also supply Exclusive Travel Services 24/7  on the go to make their travel hassle-free. It’s like having your own private TRAVEL SERVICES DEPARTMENT 24/7, yet at a LOWER COST.
              Experience the Philippines in Splendor and Ease with KYAH Travel and Tours!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Ourteam />
      <Footer />
    </div>
  );
}

export default About;
