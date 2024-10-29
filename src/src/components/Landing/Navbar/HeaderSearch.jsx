import React from "react";
import "./HeaderSearch.css";

function HeaderSearch() {
  return (
    <header className="headerSearch">
      <div className="logoContainer">
        <div className="upperLogo">
          <img
            loading="lazy"
            src="../icons/burger-icon.svg"
            alt=""
            className="burgerIcon"
          />
          <div className="logoText">ЭХО</div>
        </div>
        <nav className="navigation">
          <div className="navItem navItem-active">Главная</div>
          <div className="navItem">Авторы</div>
          <div className="navItem">Карта</div>
        </nav>
      </div>
      <form className="searchContainer">
        <img src="../icons/search-icon.svg" alt="" className="searchIcon" />
        <label htmlFor="searchInput" className="visually-hidden">
          Введите запрос
        </label>
        <input
          type="text"
          id="searchInput"
          className="searchInput"
          placeholder="Введите запрос"
          aria-label="Введите запрос"
        />
      </form>
      <img
        src="../icons/user-icon.svg"
        alt="User profile"
        className="userIcon"
      />
    </header>
  );
}

export default HeaderSearch;
