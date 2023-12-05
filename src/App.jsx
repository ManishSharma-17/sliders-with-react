import "./App.css";
import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import { cardData } from "./Carddata";

function App() {
  const slider = React.useRef(null);
  const slideNext = () => {
    slider?.current?.slickNext();
  };
  const slidePrev = () => {
    slider?.current?.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const post = cardData.map((e, i) => {
    return <Card img={e.img} heading={e.title} post={e.post} key={i} />;
  });

  return (
    <div className="min-h-screen bg-slate-500 flex items-center ">
      <div className="container mx-auto">
        <Slider ref={slider} {...settings}>
          {post}
        </Slider>
        <div className="flex justify-between mt-[50px] px-3">
          <button onClick={slidePrev}>Prev</button>
          <button onClick={slideNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
