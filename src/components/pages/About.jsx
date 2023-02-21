import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";
import Ourteam from "./Ourteam";

function About() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <section id="about" className="py-4">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="h1">Our Story</h2>
          </div>
          <hr />

          <div className="row">
            <div className="col-md-6 my-2">
              <img src="../src/images/Kyah.logo.jpg" alt="about img" className="img-fluid" />
            </div>
            <div className="col-md-6 my-2">
              <h2>Kyah Tra</h2>
              <p>
                People often inquire about the significance of KYAH. It appears that this is a relatively new term to many. KYAH is a Filipino expression of endearment used for an older brother, referred to as "KUYA". This travel agency was named after the owner's love of travel, meeting lots of people in the street who appreciate the sunshine and the ocean, thus the name of the travel agency.
              </p>
              <p>
                KYAH Travel &amp; Tours is based in Studio City, Filinvest City, Alabang, and Muntinlupa City, Philippines. We began our business in Alabang, Muntinlupa City in 2018.
                Our staff is comprised of highly skilled individuals in the tourism sector focused on our priority of Quality Service and Customer Satisfaction. We are travelers ourselves, so our goal is to provide world-class services to every customer and take them to their desired destination to Discover the Philippines in Comfort and Luxury, without breaking the bank. 
              </p>
              <p>
                To give our customers better service, we offer diverse tailored services for everyone’s journey requirements like:
              </p>
              <ul>
                <li>Terrestrial Tour Packages</li>
                <li>Group and Private Tours</li>
                <li>Urban Tours within Ilocos, Baguio, Anawangin, Sagada & La Union</li>
                <li>Vacation &amp; Promotion Travel Packages across the Philippines</li>
              </ul>
              <p>
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
