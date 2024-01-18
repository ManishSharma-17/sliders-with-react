import React from "react";
import Navbar from "./components/Navbar";
import Slider from "react-slick";
import { cardData } from "./Carddata";
import Card from "./Card";
import { Faq } from "./components/pages/Faq";
import Contact from "./components/Contact";
import DashBoard from "./components/DashBoard";

const App = () => {
  const slider = React.useRef(null);

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "flex",
  //         background: "orange",
  //         height: "40px",
  //         width: "40px",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         borderRadius: "30px",
  //         bottom: "3px",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "flex",
  //         background: "orange",
  //         height: "40px",
  //         width: "40px",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         borderRadius: "30px",
  //       }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  const slideNext = () => {
    slider?.current?.slickNext();
  };
  const slidePrev = () => {
    slider?.current?.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: false,
    infinite: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    duplicate: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <DashBoard />
      {/* slider */}
      <div className="min-h-screen bg-slate-500 flex items-center overflow-hidden">
        <div className="container mx-auto">
          <Slider ref={slider} {...settings}>
            {cardData.map((e, i) => {
              return (
                <Card
                  img={e.img}
                  heading={e.title}
                  id={i}
                  post={e.post}
                  key={i}
                  icon={e.icon}
                />
              );
            })}
          </Slider>
          <div className="flex justify-between mt-[50px] px-3 ">
            <button onClick={slidePrev} className="p-4 bg-green-300">
              Prev
            </button>
            <button onClick={slideNext} className="p-4 bg-green-300">
              Next
            </button>
          </div>
        </div>
      </div>
      <Faq />
      <Contact />
    </>
  );
};

export default App;
