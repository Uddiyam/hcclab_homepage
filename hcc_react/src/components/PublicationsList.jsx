import React from "react";
import styles from "../styles/PublicationsList.module.css";

export default function PublicationsList({ pd, order }) {
  return (
    <div
      className={`styles.publicationsListWrapper ${order ? styles.isEven : ""}`}
    >
      <div className={styles.publicationsListTitle}>{pd.title}</div>
      <div className={styles.publicationsListContent}>
        <ul>
          {pd.items.map((pi, i) =>
            order ? (
              <li key={i}>
                <span>
                  {`[${pd.items.length - i}] ${pi.writers.join(", ")} (${
                    pi.year
                  }). ${pi.subject}`}
                  {pi.type && (
                    <span className={styles.publicationsListPoint}>
                      {" "}
                      (
                      <span
                        className={styles.publicationsListStrong}
                      >{`${pi.type}`}</span>
                      ).
                    </span>
                  )}
                </span>
              </li>
            ) : (
              <li key={i}>
                <span>
                  {`[${pd.items.length - i}] ${pi.writers.join(", ")} ${
                    pi.subject
                  } (${pi.year}).`}
                  {pi.award && (
                    <span className={styles.publicationsListPoint}>
                      {" "}
                      -&nbsp;
                      <span
                        className={styles.publicationsListStrong}
                      >{`${pi.award}`}</span>
                      .
                    </span>
                  )}
                </span>
              </li>
            )
          )}
          {order && (
            <li className={styles.publicationsListPage}>
              {"Refer to "}
              <a href="https://scholar.google.co.kr/citations?user=gb_6VUIAAAAJ">
                google scholar page
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
