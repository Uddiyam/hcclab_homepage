import React from "react";
import "../styles/Header.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo common">
        <img
          className="logo_img"
          src="logo.jpg"
          aria-label="광운대학교 인간중심컴퓨팅 연구실"
        />
        <h2 className="title">KW-HCC Lab</h2>
      </div>
      <div className="list">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Introduction">Introduction</Link>
            </li>
            <li>
              <Link to="/People">People</Link>
            </li>
            <li>
              <Link to="/Lectures">Lectures</Link>
            </li>
            <li>
              <Link to="/Publications">Publications</Link>
            </li>
          </ul>
        </nav>
        <div className="search">
          <FontAwesomeIcon className="i" icon={faSearch} size="2x" />
          <span className="tooltip">검색창열기</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
