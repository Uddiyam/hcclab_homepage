import React from "react";
import styles from "../../styles/Professor.module.css";

export default function ProfessorList2({ year, title, context }) {
  return (
    <li>
      <span className={styles.text_style_li}>{year}</span>
      <span className={styles.text_style_li}>{'"'+ title + '",'}</span>
      <span className={styles.text_style_li}>{context}</span>
    </li>
  );
}
