import React from "react";
import "./ColorPalette.css";

export function LogoExample({ backgroundColor, imageSrc, description }) {
  return (
    <div className="colorLogoCard">
      <div className="colorLogoContainer" style={{ backgroundColor }}>
        <img
          loading="lazy"
          src={imageSrc}
          className="colorlogoImage"
          alt="Logo"
        />
      </div>
      <div className="logoDescription">{description}</div>
    </div>
  );
}
