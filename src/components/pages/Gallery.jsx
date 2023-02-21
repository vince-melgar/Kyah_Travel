import Navbar from "../Navbar";
import Footer from "../Footer";
import Album from "../Album";


function Gallery() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center">Photo Gallery</h1>
      <hr/>
      {/* <Header /> */}
      <Album />
      <Footer />
    </div>    
  );
}

export default Gallery;
