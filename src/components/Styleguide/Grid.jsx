import React from "react";
import "./LogoBlock.css";

export default function Grid() {
  return (
    <section className="logoSection">
      <div className="logoBlockContainer">
        <h1 className="logoHeading">3. Сетка</h1>
        <p className="logoDescription">
          Для всех макетов используется сетка из 12 колонок.
          <br /> Отступ от краёв равен отступу между колонками.
        </p>
      </div>
      <img src="./images/Grid.svg" className="gridImage" />
    </section>
  );
}
