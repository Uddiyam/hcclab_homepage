import React from "react";
import styles from "../styles/LectureIntro.module.css";

export default function LectureIntro({
  titleEng,
  titleKor,
  yearSemester,
  summary,
}) {
  return (
    <div className={styles.lectureIntroWrapepr}>
      <div className={styles.lectureIntro_TitleEng}>{titleEng}</div>
      <div className={styles.lectureIntro_TitleKor}>{`(${titleKor})`}</div>
      <div
        className={styles.lectureIntro_YearSemester}
      >{`개설년도/학기 : ${yearSemester}`}</div>
      <span className={styles.lectureIntro_Summary}>{summary}</span>
    </div>
  );
}
