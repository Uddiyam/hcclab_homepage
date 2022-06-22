import React from "react";
import styles from "../../styles/Professor.module.css";

export default function ProfessorList1({ year_start, year_end, context }) {
  return (
    <li>
      <span className={styles.text_style_li}>{year_start}</span>
      <span className={styles.text_style_li}>{"-"}</span>
      <span className={styles.text_style_li}>{year_end}</span>
      <span className={styles.text_style_li}>{context}</span>
    </li>
  );
}
