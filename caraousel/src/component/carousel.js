import { useState } from "react";
import './carousel.css'

export default function Caraousel (){

    const images=[
        'https://th.bing.com/th/id/OIP.ltgB9qpPVPwolAtG4_FfswHaJ4?rs=1&pid=ImgDetMain',
        'https://static.pexels.com/photos/9611/flowers.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/6/60/Beautiful-pink-flower_-_West_Virginia_-_ForestWander.jpg'
    ]

    
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
    return(
        <>
        <button onClick={prevSlide} >back</button>

        <div className="carousel-slide">
        <img src={images[currentIndex]} style={{width:"20%",height:"200px"}} />
      </div>
        <button onClick={nextSlide}>Next</button>
{
        <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div> }
        </>
    )
}