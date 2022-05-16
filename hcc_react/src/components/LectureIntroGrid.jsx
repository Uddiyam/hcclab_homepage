import React from "react";
import styles from "../styles/LectureIntroGrid.module.css";
import LectureIntro from "./LectureIntro";

export default function LectureIntroGrid({ lectureInfo }) {
  return (
    <>
      {lectureInfo.map((info, i) => {
        return (
          <div className={styles.lectureIntroGridWrapper} key={i}>
            <div className={styles.lectureIntroGridTitle}>
              {`${info.type.eng} (${info.type.kor})`}
            </div>
            <div className={styles.lectureIntroGridTemplate}>
              {info.lists.map((listItem, i2) => {
                return (
                  <LectureIntro
                    titleEng={listItem.titleEng}
                    titleKor={listItem.titleKor}
                    yearSemester={listItem.yearSemester}
                    summary={listItem.summary}
                    key={i2}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
