import React, { useState, useEffect } from "react";

import bannerImg from "../assets/images/banner-home.jpg"
import banner2Img from "../assets/images/banner-home2.jpg"
import gallery1Img from "../assets/images/gallery1.jpeg"
import gallery2Img from "../assets/images/gallery2.jpeg"
import gallery3Img from "../assets/images/gallery3.jpg"
import gallery4Img from "../assets/images/gallery4.jpg"
import gallery5Img from "../assets/images/gallery5.jpg"
import gallery6Img from "../assets/images/gallery6.jpg"
import gallery7Img from "../assets/images/gallery7.jpg"
import gallery8Img from "../assets/images/gallery8.jpg"
import gallery9Img from "../assets/images/gallery9.jpg"
import gallery10Img from "../assets/images/gallery10.jpg"
import gallery11Img from "../assets/images/gallery11.jpg"
import { FaPause, FaPlay, FaBackward, FaForward } from "react-icons/fa6";

const images: string[] = [
    bannerImg,
    banner2Img,
    gallery1Img,
    gallery2Img,
    gallery3Img,
    gallery4Img,
    gallery5Img,
    gallery6Img,
    gallery7Img,
    gallery8Img,
    gallery9Img,
    gallery10Img,
    gallery11Img,
];

const ImageGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="flex flex-col w-8/12 items-center space-y-4 p-4">
      <div className="flex gap-5 justify-end w-full">
        <FaBackward className="opacity-80 hover:opacity-100 transition" onClick={prevImage}/>
        <div
          onClick={() => setIsPlaying(!isPlaying)}
          className="opacity-80 hover:opacity-100 transition"
        >
          {isPlaying ? <FaPause/> : <FaPlay/>}
        </div>
        <FaForward className="opacity-80 hover:opacity-100 transition" onClick={nextImage}/>
      </div>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className=" w-1/2 max-h-5/6 object-cover"
      />
      <div className="w-full text-left text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageGallery;
