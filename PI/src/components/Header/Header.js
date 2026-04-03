import React from "react";
import Menu from "../Menu/Menu";

function Header() {
  return (
    <header>
      <div className="header-top">
        <img src="/img/logo.png" alt="logo" className="logo" />
        <h1>Series</h1>
      </div>

      <nav>
        <Menu />
      </nav>
    </header>
  );
}

export default Header;