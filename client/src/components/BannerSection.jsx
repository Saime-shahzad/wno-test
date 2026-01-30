import React from "react";
import { Carousel, Button } from "antd";
import BannerDes from "./BannerDes";
import bannerImage from "../assets/images/bannerImage.png";


const sliderData = [
  {
    id: 1,
    title: "Discover New Places",
    description: "Explore the world with our curated guides and travel tips.",
    image: bannerImage,
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Adventure Awaits",
    description: "Find your next adventure and create unforgettable memories.",
    image: "https://picsum.photos/1920/800?2",
    buttonText: "Book Now",
  },
  {
    id: 3,
    title: "Relax & Unwind",
    description: "Discover peaceful retreats and luxurious escapes.",
    image: "https://picsum.photos/1920/800?3",
    buttonText: "Learn More",
  },
];

const BannerSection = ({commonDescription , buttonText}) => {
  return (
    <Carousel
      
    //   autoplaySpeed={2000}
      dots={true}
      effect="fade"
      className="h-screen"
    >
      {sliderData.map((slide) => (
        <div key={slide.id} className="relative w-full h-screen">
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="text-left px-8 md:px-16 max-w-xl text-white">
              <BannerDes buttonText={slide.title} name={true} description={slide.description} slideTittle={slide.title} />
             
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default BannerSection;
