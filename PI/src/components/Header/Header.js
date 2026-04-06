import React from "react";
import Menu from "../Menu/Menu";

function Header() {
  return (
    <header>
      <div className="header-top">
        <img src="/img/logo.jpg" alt="logo" className="logo" />
      </div>

      <nav>
        <Menu />
      </nav>
    </header>
  );
}

export default Header;