import React from "react";
import "./ColorPalette.css";

export function ColorSwatch({ backgroundColor, name, hex, rgb }) {
  return (
    <div className="colorCard">
      <div
        className="colorSwatch"
        style={{ backgroundColor }}
        role="img"
        aria-label={`Color swatch for ${name}: ${hex}`}
      />
      <div className="colorLabel">
        {name}
        <br />
        HEX: {hex} RGB: {rgb}
      </div>
    </div>
  );
}
