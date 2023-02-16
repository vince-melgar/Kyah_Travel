import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Featured from "../Feature";
import Services from "../Services";
import Testimonials from "../Testimonials";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Featured />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
