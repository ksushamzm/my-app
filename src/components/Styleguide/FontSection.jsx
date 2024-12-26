import React from "react";
import "./TypographySection.css";

function TypographySection() {
  return (
    <div className="fontSection">
      <div className="logoHeading">2. Типографика</div>
      <div className="textContent">
        <div className="textBlock">
          <p className="textDescription">
            Для оформления страницы необходимо использовать <br /> не более 2-х
            размеров и толщин текста. <br /> Для оформления кнопок используются
            2 размера <br /> и 2 толщины текста.
          </p>
          <div className="font">Suisse Intl</div>
        </div>
        <div className="textBlock">
          <div className="fontExample">
            <div className="fontExapleHeader">Headings</div>
            <p className="fontExample1Text1">Suisse Intl SemiBold 32px</p>
          </div>
          <div className="fontExample">
            <div className="fontExapleHeader">Main text</div>
            <p className="fontExample1Text2">Suisse Intl Light 20px</p>
          </div>
          <div className="fontExample">
            <div className="fontExapleHeader">Button text L</div>
            <p className="fontExample1Text3">Suisse Intl Medium 20px</p>
          </div>
          <div className="fontExample">
            <div className="fontExapleHeader">Button text M</div>
            <p className="fontExample1Text4">Suisse Intl Regular 20px</p>
          </div>
        </div>
      </div>

      <div className="textContent">
        <div className="textBlock">
          <p className="textDescription">
            Шрифт для заголовков - Tilda Sans. <br /> На одном макете необходимо
            использовать <br /> не более 2-х размеров текста.
          </p>
          <div className="font">Tilda Sans</div>
        </div>
        <div className="textBlock">
          <div className="fontExample">
            <div className="fontExapleHeader2">Title 1</div>
            <p className="fontExample1Text5">Tlda Sans Bold 96px</p>
          </div>
          <div className="fontExample">
            <div className="fontExapleHeader2">Title 2</div>
            <p className="fontExample1Text5">Tlda Sans Bold 64px</p>
          </div>
          <div className="fontExample">
            <div className="fontExapleHeader2">Title 3</div>
            <p className="fontExample1Text5">Tlda Sans Bold 48px</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypographySection;
