import React from "react";
import styles from "../styles/Header.module.css";
import { useState } from "react";

export default function Header() {
  const linksObj = [
    {
      name: "Home",
      link: "/",
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
      link: "/",
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

  return (
    <div
      className={`${styles.headerWrapper} ${isScroll ? styles.isScrolled : ""}`}
    >
      <div className={styles.headerLeft}>
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
          {links.map((l, i) => {
            return (
              <li
                className={`${styles.headerLinkItem} ${
                  i === 3 ? styles.headerCurrentLink : ""
                }`}
                key={i}
              >
                <a href={l.link}>{l.name}</a>
              </li>
            );
          })}
          <li className={styles.headerSearchIcon}>
            <img
              width="21"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2lrGUOryxor3UWjEUjRs2aKB2eqkr_9ykMs_B4VwDBh4fVCYwYx-vYXLfRZe03UpPAU&usqp=CAU"
              alt="돋보기 아이콘"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
