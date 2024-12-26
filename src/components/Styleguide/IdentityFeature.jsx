import React from "react";
import "./Description.css";

export default function IdentityFeature() {
  return (
    <div className="descriptionContainer">
      <h1 className="descriptionTitle">
        Айдентика ЭХО транслирует 3 важных качества:
      </h1>
      <div className="descriptionContent">
        <div className="featureList">
          <p className="featureItem">
            1) сохранение и популяризация культурного наследия.
          </p>
          <p className="featureItem">2) передача знаний об истории народов.</p>
          <p className="featureItem">
            3) открытая коммуникация и межкультурный диалог.
          </p>
        </div>

        <div className="descriptionList">
          <p className="descriptionItem">
            Для стиля характерно сочетание функциональных блоков <br /> и
            силуэтов главных этнических предметов, узоров.
          </p>
          <p className="descriptionItem">
            Работа с фотографией обязательна. Фотография визуально <br />
            отражает обсуждаемую тему, а также усиливает идею соединения
            поколений.
          </p>
        </div>
      </div>
    </div>
  );
}
