import React from "react";
import { ColorSwatch } from "./ColorSwatch";
import { LogoExample } from "./LogoExample";
import "./ColorPalette.css";

const colorData = [
  {
    backgroundColor: "rgba(233, 90, 50, 1)",
    name: "Оранжевый",
    hex: "#E95A32",
    rgb: "233 90 50",
  },
  {
    backgroundColor: "rgba(12, 45, 87, 1)",
    name: "Тёмно-синий",
    hex: "#0C2D57",
    rgb: "12 45 87",
  },
  {
    backgroundColor: "rgba(17, 17, 18, 1)",
    name: "Чёрный",
    hex: "#111112",
    rgb: "17 17 18",
  },
  {
    backgroundColor: "rgba(255, 254, 252, 1)",
    name: "Белый",
    hex: "#FFFEFC",
    rgb: "255 254 252",
  },
];

const usageBlocks = [
  { width: "373px", backgroundColor: "rgba(255, 254, 252, 1)" },
  { width: "417px", backgroundColor: "rgba(233, 90, 50, 1)" },
  { width: "248px", backgroundColor: "rgba(12, 45, 87, 1)" },
  { width: "83px", backgroundColor: "rgba(17, 17, 18, 1)" },
];

function ColorPalette() {
  return (
    <section className="colorSection">
      <div className="colorSectionHeader">
        <h1 className="colorsTitle">4. Цвета</h1>
        <div className="colorGrid">
          {colorData.map((color, index) => (
            <ColorSwatch key={index} {...color} />
          ))}
        </div>
      </div>

      <p className="colorDescription">
        Пропорционально, цвета делятся таким образом, что светлые оттенки
        <br />
        занимают основную часть макета, акцентные цвета используются для
        <br />
        выделения тематических блоков. Не стоит злоупотреблять тёмными цветами!
      </p>

      <div className="colorUsageGrid">
        {usageBlocks.map((block, index) => (
          <div
            key={index}
            className="usageBlock"
            style={{
              backgroundColor: block.backgroundColor,
              width: block.width,
            }}
            role="presentation"
          />
        ))}
      </div>

      <p className="colorDescription">
        Выбирайте цвет логотипа и фона
        <br />
        согласно следующим схемам:
      </p>

      <div className="logoExamples">
        <LogoExample
          backgroundColor="rgba(255, 254, 252, 1)"
          imageSrc="./images/LogoExample1.svg"
          description="Логотип в хэдере Фон: Белый Лого: Оранжевый"
        />
        <LogoExample
          backgroundColor="rgba(12, 45, 87, 1)"
          imageSrc="./images/LogoExample2.svg"
          description="Логотип в футере Фон: Тёмно-синий Лого: Белый"
        />
      </div>
    </section>
  );
}

export default ColorPalette;
