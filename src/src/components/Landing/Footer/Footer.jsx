import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contentWrapper">
        <div className="mainContent">
          <h2 className="headline">
            Погрузитесь в изучение <br /> уникальных культур!
          </h2>
          <button className="ctaButton">Зарегистрироваться</button>
        </div>
        <div className="bottomContent">
          <div className="socialMedia">
            <img
              src="./icons/vk-icon.svg"
              alt="Social media icon"
              className="socialIcon"
            />
            <img
              src="./icons/tg-icon.svg"
              alt="Social media icon"
              className="socialIcon"
            />
          </div>
          <p className="copyright">© 2024 Эхо. Все права защищены.</p>
        </div>
      </div>
      <div className="sideContent">
        <nav className="menu">
          <a href="/" className="menuItem menuItemActive">
            Главная
          </a>
          <a href="/authors" className="menuItem">
            Авторы
          </a>
          <a href="/map" className="menuItem">
            Карта
          </a>
        </nav>
        <div className="logo">ЭХО</div>
      </div>
    </footer>
  );
};

export default Footer;