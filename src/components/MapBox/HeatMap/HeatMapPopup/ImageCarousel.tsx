import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ArrowForwardIosIcon
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "30px",
        color: "#FFF",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ArrowBackIosNewIcon
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "30px",
        color: "#FFF",
        left: "10px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function ImageCarousel({ images, logoUrl }: any) {
  const isSingleImage = images.length === 1;

  const settings = {
    className: "center",
    dots: true,
    infinite: !isSingleImage,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "7px",
          height: "7px",
          background: "#FFF",
          borderRadius: "50%",
          transition: "width 0.3s ease, height 0.3s ease", // Add smooth transition
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !isSingleImage,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !isSingleImage,
          dots: true,
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
    <Box sx={{ width: "100%" }}>
      <Slider {...settings}>
        {images.map((image: any, index: number) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={`https://cloud.famproperties.com${image}`}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "12px 12px 0px 0px",
              }}
            />
            <figure
              style={{
                position: "absolute",
                bottom: "10px",
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "4px",
                backdropFilter: "blur(2px)",
                backgroundColor: "#ffffffc2",
                zIndex: 99,
                right: "10px",
              }}
            >
              <img
                src={logoUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "scale-down",
                }}
              />
            </figure>
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default ImageCarousel;
