import React from "react";
import styles from "../styles/Header.module.css";
import { useState } from "react";
import { ReactComponent as Dropdown } from "../icons/dropdown.svg";
import { ReactComponent as Hamburger } from "../icons/hamburger.svg";
import { ReactComponent as Cross } from "../icons/cross.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";

export default function Header({ url }) {
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
    {
      name: "더보기",
      display: "none",
    },
  ];
  const [links, setLinks] = useState(linksObj);
  const [isScroll, setIsScroll] = useState(false);
  const [menuShowMore, setMenuShowMore] = useState(false);
  const [isModal, setIsModal] = useState(null);

  const handleModal = () =>
    setIsModal(isModal === null || isModal === false ? true : false);

  window.addEventListener("scroll", (e) => {
    window.scrollY ? setIsScroll(true) : setIsScroll(false);
  });

  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };

  return (
    <div
      className={`${styles.headerWrapper} ${
        isScroll ? styles.isScrolled : ""
      } ${isModal ? styles.isTransparent : ""}`}
    >
      <div className={styles.headerLeft}>

        <div
          onClick={handleModal}
          className={`${styles.headerIconWrapper} ${
            isModal === false && styles.headerIconReverse
          } ${isModal === true && styles.headerIconAnimation}`}
        >
          {isModal ? (
            <Cross
              className={`${styles.headerIcon} ${styles.headerShowIcon} ${styles.headerCross}`}
              width="24"
              height="24"
            />
          ) : (
            <Hamburger
              className={`${styles.headerIcon} ${styles.headerShowIcon} ${styles.headerHamburger}`}
              width="24"
              height="24"
            />
          )}

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
        <ul
          className={`${styles.headerLinkList} ${
            isModal === true && styles.isFlex
          } ${isModal === false && styles.slideOut}
          ${isModal === true && styles.slideIn} `}
        >
          {links.map((l, i) => {
            return (
              <li
                className={`${styles.headerLinkItem} ${
                  i === url ? styles.headerCurrentLink : ""
                } ${isModal === true && styles.listSlideIn}`}
                key={i}
              >
                {l.link !== undefined ? (
                  <a href={l.link}>{l.name}</a>
                ) : (
                  <span
                    className={styles.headerShowMore}
                    onMouseOver={() => setMenuShowMore(true)}
                    onMouseOut={() => setMenuShowMore(false)}
                  >
                    {l.name}
                    <Dropdown width="24" height="24" />
                    {menuShowMore && (
                      <div className={styles.headerMenuModal}>
                        <ul className={styles.headerTempMenu}>
                          {links.slice(3, 5).map((l, i) => {
                            return (
                              <li
                                className={`${styles.headerLinkItem} ${
                                  i + 3 === url ? styles.headerCurrentLink : ""
                                } ${isModal === true && styles.listSlideIn}`}
                                key={i}
                              >
                                <a href={l.link}>{l.name}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </span>
                )}
              </li>
            );
          })}

        </ul>
        <span
          className={styles.headerSearchIcon}
          onClick={(e) => alert("준비중입니다.")}
        >
          <img
            width="21"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ2lrGUOryxor3UWjEUjRs2aKB2eqkr_9ykMs_B4VwDBh4fVCYwYx-vYXLfRZe03UpPAU&usqp=CAU"
            alt="돋보기 아이콘"
          />
        </span>
      </div>
      {isModal && (
        <div className={styles.headerModal} onClick={handleModal}></div>

      )}
    </div>
  );
}
