import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header__container">
      <ul>
        <Link to="/about">
          <li>일상 속 탄소배출</li>
        </Link>
        <Link to="/">
          <li>온실가스 배출현황</li>
        </Link>
        <Link to="/Danger">
          <li>위기의 지구</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
