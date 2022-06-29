// import { faInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../styles/Activities.module.css";

export default function Activities({ activities }) {
  return (
    <div className={styles.Background}>
      {activities.map((type, i) => {
        return (
          <span key={i}>
            <div className={styles.Wrap}>
              <ul className={styles.TypeName}>
                <li>
                  <b>{`${type.type.type_name}`}</b>
                </li>
              </ul>
            </div>
            <div className={styles.Wrap}>
              {type.lists.map((listItem, i2) => {
                return (
                  <ul className={styles.Lists} key={i2}>
                    <li>
                      {`${listItem.info1} `}
                      <b>{listItem.bold1}</b>
                      {` ${listItem.info1_1}`}
                    </li>
                    <li>
                      {`${listItem.info2}`}
                      <b>{listItem.bold2}</b>
                      {` ${listItem.info2_1}`}
                    </li>
                  </ul>
                );
              })}
            </div>
          </span>
        );
      })}
    </div>
  );
}
