import React from "react";
import { Card } from "flowbite-react";
import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

export default function Carousel2() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          backgroundColor: "rgb(173, 170, 170)",
          borderRadius: "40px",
        }}
        onClick={onClick}
      />
    );
  }
  const data = [
    {
      name: "card 1",
      image: "https://via.placeholder.com/150",
      disc: "description card 1",
    },
    {
      name: "card 2",
      image: "https://via.placeholder.com/150",
      disc: "description card 2",
    },
    {
      name: "card 3",
      image: "https://via.placeholder.com/150",
      disc: "description card 3",
    },
    {
      name: "card 4",
      image: "https://via.placeholder.com/150",
      disc: "description card 4",
    },
    {
      name: "card 5",
      image: "https://via.placeholder.com/150",
      disc: "description card 5",
    },
    {
      name: "card 6",
      image: "https://via.placeholder.com/150",
      disc: "description card 6",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-14 mb-20">
      <h1 className="text-[#555557] font-bold text-3xl ml-10  m-6">NOS PROJETS EN COURS</h1>
      <div className="w-5/6 m-auto">
        <Slider {...settings} className="m-4">
          {data.map((item, index) => (
            <div key={index} className="p-4">
              <Card
                className="max-w-sm shadow-white border-0 mx-auto rounded-lg"
                imgAlt={`Image of ${item.name}`}
                imgSrc={item.image}
              >
                <h5 className="text-xl font-bold tracking-tight text-[#3A5A40] ">
                  {item.name}
                </h5>
                <p className="font-normal text-gray-700 ">
                  {item.disc}
                </p>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
