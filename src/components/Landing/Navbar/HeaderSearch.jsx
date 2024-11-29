import React from "react";
import { Link } from "react-router-dom";
import "./HeaderSearch.css";

function HeaderSearch() {
  return (
    <header className="headerSearch">
      <div className="logoContainer">
        <div className="upperLogo">
          <img src="./icons/burger-icon.svg" className="burgerIcon" />
          <div className="logoText">ЭХО</div>
        </div>
        <nav className="navigation">
          <Link to="/" class="navItem navItem-active a">
            Главная
          </Link>
          <Link to="/error" class="navItem a">
            Авторы
          </Link>
          <Link to="/error" class="navItem a">
            Карта
          </Link>
        </nav>
      </div>
      <form className="searchContainer">
        <img src="./icons/search-icon.svg" className="searchIcon" />
        <input
          type="text"
          id="searchInput"
          className="searchInput"
          placeholder="Введите запрос"
          aria-label="Введите запрос"
        />
      </form>
      <img
        src="./icons/user-icon.svg"
        alt="User profile"
        className="userIcon"
      />
    </header>
  );
}

export default HeaderSearch;
