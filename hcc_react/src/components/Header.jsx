import React from "react";
import styles from "../styles/Header.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const linksObj = [
    {
      name: "Home",
      link: "/Home",
    },
    {
      name: "Introduction",
      link: "/",
    },
    {
      name: "People",
      link: "/",
    },
    {
      name: "Lectures",
      link: "/Lectures",
    },
    {
      name: "Publications",
      link: "/",
    },
  ];
  const [links, setLinks] = useState(linksObj);
  const [isScroll, setIsScroll] = useState(false);

  window.addEventListener("scroll", (e) => {
    window.scrollY ? setIsScroll(true) : setIsScroll(false);
  });

  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };

  return (
    <div
      className={`${styles.headerWrapper} ${isScroll ? styles.isScrolled : ""}`}
    >
      <div className={styles.headerLeft}>
        <div className={styles.hamburger_view} onClick={() => toggleMenu()}>
          <GiHamburgerMenu style={{ width: 20, height: 20 }} />
        </div>
        <img
          width="142"
          className={styles.headerLogo}
          src="/logos/logo_kw.jpg"
          alt="광운대학교 로고"
        />
        <span className={styles.headerName}>KW-HCC Lab</span>
      </div>
      <div className={styles.headerRight}>
        <ul className={styles.headerLinkList}>
          <div className={styles.hiddenview}>
            {links.map((l, i) => {
              return (
                <li
                  className={`${styles.headerLinkItem} ${
                    i === 0 ? styles.headerCurrentLink : ""
                  }`}
                  key={i}
                >
                  <a href={l.link}>{l.name}</a>
                </li>
              );
            })}
          </div>
          <li className={styles.headerSearchIcon}>
            <img
              width="21"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2lrGUOryxor3UWjEUjRs2aKB2eqkr_9ykMs_B4VwDBh4fVCYwYx-vYXLfRZe03UpPAU&usqp=CAU"
              alt="돋보기 아이콘"
            />
          </li>
        </ul>
      </div>
      {isOpen && (
        <>
          <div className={styles.menuview}>
            <div className={styles.backview} onClick={() => toggleMenu()}>
              <AiOutlineClose style={{ width: 30, height: 30 }} />
            </div>
            <div className={styles.menuview_mobile}>
              {links.map((l, i) => {
                return (
                  <li
                    className={`${styles.headerLinkItem} ${
                      i === 0 ? styles.headerCurrentLink : ""
                    }`}
                    key={i}
                  >
                    <a href={l.link}>{l.name}</a>
                  </li>
                );
              })}
            </div>
          </div>
          <div className={styles.shadow_view}></div>
        </>
      )}
    </div>
  );
}
