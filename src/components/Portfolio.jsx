import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img1 from "../photo/photo-app-9.jpg"; 
import img2 from "../photo/photo-app-3.jpg"; 
import img3 from "../photo/photo-app-4.jpg"; 
import img4 from "../photo/photo-app-8.jpg"; 
import img5 from "../photo/photo-app-6.jpg"; 
import img6 from "../photo/photo-app-10.jpg"; 


function Portfolio() {
  const images = [img1 , img2 , img3 , img4 , img5 , img6];

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group rounded-lg shadow-lg overflow-hidden"
            >
              {/* Lazy loaded image */}
              <LazyLoadImage
                src={src}
                alt={`Portfolio ${index + 1}`}
                effect="blur"
                className="w-full h-50 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-white font-semibold text-lg">
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
