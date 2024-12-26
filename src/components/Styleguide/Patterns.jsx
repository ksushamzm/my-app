import React from "react";
import "./PatternSection.css";

function PatternsSection() {
  return (
    <div className="patternSection">
      <div className="PatternHeading">6. Декоративные элементы</div>
      <div className="patternContent">
        <div className="patternBlock">
          <p className="patternDescription">
            Декоративные элементы в виде национальной вышивки применяются для
            разделения и украшения разных информационных блоков
          </p>
          <img
            src="./images/PatternsStyleGuide.svg"
            className="patternElements"
          />
        </div>
        <img src="./images/Screenshot.svg" className="PatternExample" />
      </div>
    </div>
  );
}

export default PatternsSection;
