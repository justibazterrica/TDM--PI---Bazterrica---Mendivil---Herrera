import React from "react";
import Menu from "../Menu/Menu";
import "./Header.css"

function Header() {
  return (
    <header>
      <div className="header-top">
        <img src="/img/logo.jpg" alt="logo" className="logo" />
        <h1>UdesaMovies</h1>
      </div>

      <nav>
        <Menu />
      </nav>
    </header>
  );
}

export default Header;