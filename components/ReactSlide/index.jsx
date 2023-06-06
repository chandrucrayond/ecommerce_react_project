import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import { sliderStyle } from "./style";


export default function SimpleSlider({ productData }) {
  const classes = sliderStyle();
  console.log(productData);
  var settings = {
    dots: false,
  };

  return (
    <div className={classes.sliderContainer}
    >
      <Slider {...settings}
      >
        {productData?.url?.map((url, index) =>
          <div>

            <img
              key={url}
              src={url}
              width={125}
              height={150}
            />

          </div>
        )}
      </Slider>
    </div>
  );
}

