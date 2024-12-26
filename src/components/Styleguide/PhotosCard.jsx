import React from "react";
import "./Photo.css";

export const PhotoCard = ({ imageSrc, title, colors }) => {
  return (
    <div className="photoCard">
      <div className="photoColorPalette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="colorDot"
            style={{ backgroundColor: color }}
            role="presentation"
            aria-hidden="true"
          />
        ))}
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${title} photograph example`}
        className="cardImage"
      />
      <div className="cardTitle">{title}</div>
    </div>
  );
};
