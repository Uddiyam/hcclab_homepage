import React from "react";
import PeopleIntro from "./PeopleIntro";
import styles from "../styles/PeopleIntroGrid.module.css";

export default function PeopleIntroGrid({ peopleInfo }) {
  return (
    <div className={styles.Background}>
      {peopleInfo.map((listItem, i) => {
        return (
          <PeopleIntro
            name={listItem.name}
            info={listItem.info}
            img={listItem.image}
            key={i}
          />
        );
      })}
    </div>
  );
}
