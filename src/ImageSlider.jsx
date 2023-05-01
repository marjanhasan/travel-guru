import React from "react";

const ImageSlider = ({ slide, click }) => {
  return (
    <div
      onClick={() => click(slide.id)}
      className="relative mr-3 h-[300px] w-[200px] inline-block duration-500 overflow-hidden rounded-2xl cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      <img src={slide.url} className="h-full w-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4">
        <h2 className="text-white text-3xl font-bold uppercase">
          {slide.title}
        </h2>
      </div>
    </div>
  );
};

export default ImageSlider;
