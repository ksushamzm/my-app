import React from "react";
import "./LogoBlock.css";

export default function LogoBlock() {
  return (
    <section className="logoSection">
      <div className="logoBlockContainer">
        <h1 className="logoHeading">1. Логотип</h1>
        <p className="logoDescription">
          Логотип состоит из знака ЭХО. <br /> Выполнен в виде оттиска,
          олицетворяющего отпечатка в истории
        </p>
      </div>
      <img
        loading="lazy"
        src="./images/Logo.svg"
        className="logoImage"
        alt="ЭХО логотип - оттиск, олицетворяющий отпечаток в истории"
      />
    </section>
  );
}
