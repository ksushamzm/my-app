import React from "react";
import "./TitleHeader.css";
import { Link } from "react-router-dom";

export default function TitleHeader() {
  return (
    <div className="titleWrapper">
      <Link to="/">
        <nav className="articleBreadcrumbs">
          <img src="./images/arrow.svg" className="articleBackIcon" />
          <p>Назад на главную</p>
        </nav>
      </Link>
      <div className="mainTitleStyleGuide">Стайлгайд</div>
      <div className="subtitleStyleGuide">
        <span className="highlightedTextStyleGuide">ЭХО</span>
        <p className="descriptionStyleGuide">
          Медиа-гид по культуре
          <br />и быту малочисленных народов России
        </p>
      </div>
    </div>
  );
}
