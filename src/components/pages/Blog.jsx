import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";

function Blog() {
  return (
    <div>
      <Navbar />
      <Header />
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
                <span className="blog-date">Feb 6, 2023</span>
              </div>
              <div className="blog-item-bottom">
                <span>Panagbenga Festival</span>
                <a href="#">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </a>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio voluptatem nulla harum accusantium tempora dicta
                  quas quod id, repellat temporibus illo libero explicabo
                  laboriosam.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-2.jpg" alt="blog" />
                <span className="blog-date">oct 28, 2021</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </a>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio voluptatem nulla harum accusantium tempora dicta
                  quas quod id, repellat temporibus illo libero explicabo
                  laboriosam.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-3.jpg" alt="blog" />
                <span className="blog-date">oct 28, 2021</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </a>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio voluptatem nulla harum accusantium tempora dicta
                  quas quod id, repellat temporibus illo libero explicabo
                  laboriosam.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-4.jpg" alt="blog" />
                <span className="blog-date">oct 28, 2021</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </a>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio voluptatem nulla harum accusantium tempora dicta
                  quas quod id, repellat temporibus illo libero explicabo
                  laboriosam.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-5.jpg" alt="blog" />
                <span className="blog-date">oct 28, 2021</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </a>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio voluptatem nulla harum accusantium tempora dicta
                  quas quod id, repellat temporibus illo libero explicabo
                  laboriosam.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-6.jpg" alt="blog" />
                <span className="blog-date">oct 28, 2021</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </a>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio voluptatem nulla harum accusantium tempora dicta
                  quas quod id, repellat temporibus illo libero explicabo
                  laboriosam.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-7.jpg" alt="blog" />
                <span className="blog-date">oct 28, 2021</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </a>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio voluptatem nulla harum accusantium tempora dicta
                  quas quod id, repellat temporibus illo libero explicabo
                  laboriosam.
                </p>
              </div>
            </div>

            <div className="blog-item my-2 shadow">
              <div className="blog-item-top">
                <img src="../src/images/blog-8.jpg" alt="blog" />
                <span className="blog-date">oct 28, 2021</span>
              </div>
              <div className="blog-item-bottom">
                <span>travel | john doe</span>
                <a href="#">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit?
                </a>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio voluptatem nulla harum accusantium tempora dicta
                  quas quod id, repellat temporibus illo libero explicabo
                  laboriosam.
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
