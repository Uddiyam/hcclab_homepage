import React from "react";
import styles from "../styles/PeopleIntro.module.css";

export default function PeopleIntro({ name, info, img }) {
  return (
    <div className={styles.Wrapper}>
      <div>
        <img className={styles.PeopleImg} src={img} alt={name} />
      </div>
      <h3 className={styles.Name}>{name}</h3>
      <div>
        <p className={styles.Intro}>{info}</p>
      </div>
    </div>
  );
}
