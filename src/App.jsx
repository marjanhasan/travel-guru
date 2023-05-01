import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import ActiveCard from "./ActiveCard";

function App() {
  let slides = [
    {
      url: "https://images.pexels.com/photos/7064356/pexels-photo-7064356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "beach",
      description:
        "Escape to the pristine sands and turquoise waters of our breathtaking beach. Experience ultimate relaxation, adventure, and serenity as you soak up the sun and let your worries wash away with the gentle waves. Come discover your perfect paradise and make memories that will last a lifetime.",
      id: 0,
    },
    {
      url: "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "boat",
      description:
        "Embark on an unforgettable journey across the open seas with our luxurious and state-of-the-art boats. Whether youre seeking thrilling adventures or peaceful escapes, our vessels offer the perfect blend of comfort and excitement. Experience the freedom and exhilaration of life on the water, as you explore new horizons and create lifelong memories with those closest to you",
      id: 1,
    },
    {
      url: "https://images.pexels.com/photos/2700573/pexels-photo-2700573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "forest",
      description:
        "Discover the awe-inspiring beauty of nature in our enchanting forest. Immerse yourself in the tranquil surroundings, breathe in the fresh air, and allow yourself to be fully present in the moment. Experience the thrill of adventure as you hike, bike, or simply stroll through our stunning wilderness. Come explore the wonders of our forest and reconnect with the natural world in a truly unforgettable way.",
      id: 2,
    },
    {
      url: "https://images.pexels.com/photos/6152151/pexels-photo-6152151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "city",
      description:
        "Embark on an unforgettable journey across the open seas with our luxurious and state-of-the-art boats. Whether youre seeking thrilling adventures or peaceful escapes, our vessels offer the perfect blend of comfort and excitement. Experience the freedom and exhilaration of life on the water, as you explore new horizons and create lifelong memories with those closest to you",
      id: 3,
    },
    {
      url: "https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "italy",
      description:
        "Experience the pulse of the city and immerse yourself in the vibrant energy of our urban metropolis. From the bustling streets to the iconic landmarks, our city offers a never-ending array of sights, sounds, and experiences. Discover the diverse culture, world-class cuisine, and dynamic nightlife that make our city a destination like no other. Come explore and create unforgettable memories in the heart of the action.",
      id: 4,
    },
    {
      url: "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "forest",
      description:
        "Discover the awe-inspiring beauty of nature in our enchanting forest. Immerse yourself in the tranquil surroundings, breathe in the fresh air, and allow yourself to be fully present in the moment. Experience the thrill of adventure as you hike, bike, or simply stroll through our stunning wilderness. Come explore the wonders of our forest and reconnect with the natural world in a truly unforgettable way.",
      id: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dim, setDim] = useState([]);
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };
  const cardClick = (id) => {
    setCurrentIndex(id);
  };
  const currentElement = slides.find((element) => element.id === currentIndex);
  useEffect(() => {
    setDim([
      ...slides.filter((e) => e.id > currentIndex),
      ...slides.filter((e) => e.id < currentIndex),
    ]);
  }, [currentIndex]);
  return (
    <div className="relative h-fit xl:h-screen text-white">
      <img
        src={currentElement.url}
        alt="Background image"
        className="absolute w-full h-full object-cover blur-sm"
      ></img>
      <div className="max-w-7xl lg:mx-auto relative z-10 mx-6">
        <nav className="flex justify-between items-center py-8">
          <span>brandName</span>
          <ul className="flex justify-between gap-2">
            <li>home</li>
            <li>contact</li>
            <li>about</li>
          </ul>
        </nav>
        <div className="pt-16 h-fit overflow-hidden">
          <div className="">
            <div className="lg:flex lg:gap-x-6">
              <div className="w-full lg:w-2/5 lg:shrink-0 ">
                <h1 className="text-5xl lg:text-8xl font-bold pb-6 uppercase">
                  {currentElement.title}
                </h1>
                <p className="text-base lg:text-xl pb-5 text-justify">
                  {currentElement.description}
                </p>
                <button className="px-6 py-2 rounded-lg bg-yellow-500 text-black mb-6">
                  show more
                </button>
              </div>
              <div className="w-max">
                <div className="flex">
                  <ActiveCard
                    currentIndex={currentIndex}
                    bg={currentElement}
                    click={cardClick}
                  />
                  {dim.map((slide, i) => (
                    <ImageSlider key={i} slide={slide} click={cardClick} />
                  ))}
                </div>
                <div className="flex gap-4 pt-6">
                  <div
                    onClick={goToPrevious}
                    className=" text-5xl text-black cursor-pointer"
                  >
                    ❰
                  </div>

                  <div
                    onClick={goToNext}
                    className=" text-5xl text-black cursor-pointer"
                  >
                    ❱
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
