import React, { useState } from "react";
import "../styles/Header.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };

  return (
    <header className="header">
      <div className="burger" onClick={() => toggleMenu()}>
        <GiHamburgerMenu style={{ width: 35, height: 60 }} />
        <span className="sidebar">사이드바 표시</span>
      </div>
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
          <ul className="ul_1">
            <li className="list_name">
              <Link to="/">Home</Link>
            </li>
            <li className="list_name">
              <Link to="/Introduction">Introduction</Link>
            </li>
            <li className="list_name">
              <Link to="/People">People</Link>
            </li>
            <li className="list_name">
              <Link to="/Lectures">Lectures</Link>
            </li>
            <li className="list_name">
              <Link to="/Publications">Publications</Link>
            </li>
          </ul>
        </nav>
        <div className="search">
          <FontAwesomeIcon className="i" icon={faSearch} size="2x" />
          <span className="tooltip">검색창열기</span>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="menuview">
            <div className="backview" onClick={() => toggleMenu()}>
              <AiOutlineClose style={{ width: 30, height: 30 }} />
              <span className="tooltip1">사이드바 닫기</span>
            </div>
            <div className="menuview_mobile">
              <ul>
                <li className="list_name_1">
                  <Link to="/">Home</Link>
                </li>
                <li className="list_name_1">
                  <Link to="/Introduction">Introduction</Link>
                </li>
                <li className="list_name_1">
                  <Link to="/People">People</Link>
                </li>
                <li className="list_name_1">
                  <Link to="/Lectures">Lectures</Link>
                </li>
                <li className="list_name">
                  <Link to="/Publications">Publications</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="shadow_view"></div>
        </>
      )}
    </header>
  );
};

export default Header;
