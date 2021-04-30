import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <ul>
        <Link to="/about">
          <li>탄소배출이란?</li>
        </Link>
        <Link to="/current">
          <li>세계 탄소배출 현황</li>
        </Link>
        <Link to="/growth">
          <li>지속가능한 성장</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
