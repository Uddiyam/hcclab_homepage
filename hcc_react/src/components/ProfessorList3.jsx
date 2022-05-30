import React, { useState } from "react";
import styles from "../styles/Professor.module.css";

export default function ProfessorList3({ year, prize, context, context1 }) {
  const [prize_num] = useState(prize); //유형 불러오기
  console.log(prize_num);
  return (
    <li>
      <span className={styles.text_style_li}>{year}</span>
      <span className={styles.text_style_li}>
        {prize_num == 1
          ? "1st Prize,"
          : prize_num == 2
          ? "2st Prize,"
          : "3nd Prize,"}
      </span>
      <span className={styles.text_style_li}>{context + ","}</span>
      <span className={styles.text_style_li}>{context1}</span>
    </li>
  );
}
