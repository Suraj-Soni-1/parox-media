import React, { useRef, useEffect, useState } from "react";

// Add your 16 image paths here
const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
  "/13.jpg",
  "/14.jpg",
  "/15.jpg",
  "/16.jpg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Show 4 images at once, wrap around after the last
  const getVisibleImages = () => {
    let visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <div className="flex justify-center py-10 bg-gray-100">
      <div className="overflow-hidden w-full max-w-6xl">
        <div className="flex gap-6 justify-center transition-transform duration-700">
          {getVisibleImages().map((img, idx) => (
            <div key={idx} className="flex-shrink-0">
              <img
                src={img}
                alt={`Slide ${idx}`}
                className="h-48 w-48 object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
