import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "Image_link_1",
    "Image_link_2",
    "Image_link_3",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Image Slider</h2>

      <img
        src={images[index]}
        alt={`Image ${index + 1}`}
        width="300"
        height="300"
      />

      <p>Image {index + 1}</p>
    </div>
  );
};

export default ImageSlider;
