import Img1 from "../images/gallery-1.jpg";
import Img2 from "../images/gallery-2.jpg";
import Img3 from "../images/gallery-3.jpg";
import Img4 from "../images/gallery-4.jpg";
import Img5 from "../images/gallery-5.jpg";
import Img6 from "../images/gallery-6.jpg";
import Img7 from "../images/gallery-7.jpg";
import Img8 from "../images/gallery-8.jpg";
import Img9 from "../images/gallery-9.jpg";


const Album = () => {
    let data = [
      {
        id: 1,
        imgSrc: Img1,
      },
      {
        id: 2,
        imgSrc: Img2,
      },
      {
        id: 3,
        imgSrc: Img3,
      },
      {
        id: 4,
        imgSrc: Img4,
      },
      {
        id: 5,
        imgSrc: Img5,
      },
      {
        id: 6,
        imgSrc: Img6,
      },
      {
        id: 7,
        imgSrc: Img7,
      },
      {
        id: 8,
        imgSrc: Img8,
      },
      {
        id: 9, 
        imgSrc: Img9,
      },
    ]

    return(
        <>
            <div className="gallery">
                {data.map((item, index)=>{
                    return(
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} style={{width: '100%'}} />
                        </div>
                    )
                })}
            </div>
        </>
    )  
  }

  export default Album