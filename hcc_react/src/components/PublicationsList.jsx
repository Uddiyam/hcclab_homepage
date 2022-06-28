import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/PublicationsList.module.css";

export default function PublicationsList({ pd, order }) {
  const [writersArr, setWritersArr] = useState(null);

  useEffect(() => {
    const boldProfessorName = () => {
      let tempArr = Array(pd.items.length)
        .fill(null)
        .map((el) => Array(3).fill(null));
      pd.items.forEach((pi, i) => {
        pi.writers.forEach((pw) => {
          if (pw === "Park, K.") tempArr[i][1] = <b>Park, K.</b>;
          else if (pw === "Park, K.*") tempArr[i][1] = <b>Park, K.*</b>;
          if (pw !== "Park, K." && pw !== "Park, K.*") {
            if (tempArr[i][1] === null) {
              if (tempArr[i][0] === null) tempArr[i][0] = [pw];
              else tempArr[i][0].push(pw);
            } else {
              if (tempArr[i][2] === null) tempArr[i][2] = [pw];
              else tempArr[i][2].push(pw);
            }
          }
        });
      });
      setWritersArr([...tempArr]);
    };
    boldProfessorName();
  }, []);

  return (
    <div
      className={`styles.publicationsListWrapper ${order ? styles.isEven : ""}`}
    >
      <div className={styles.publicationsListTitle}>{pd.title}</div>
      <div className={styles.publicationsListContent}>
        {writersArr && (
          <ul>
            {pd.items.map((pi, i) =>
              order ? (
                <li key={i}>
                  <span>
                    {`[${pd.items.length - i}]`}
                    {writersArr[i][0] && writersArr[i][0].join(", ") + ", "}
                    {writersArr[i][1]},
                    {writersArr[i][2] && writersArr[i][2].join(", ")}
                    {`(${pi.year}). ${pi.subject}`}
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
                    {`[${pd.items.length - i}]`}
                    {writersArr[i][0] && writersArr[i][0].join(", ") + ", "}
                    {writersArr[i][1]},
                    {writersArr[i][2] && writersArr[i][2].join(", ")}
                    {`${pi.subject} (${pi.year}).`}
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
        )}
      </div>
    </div>
  );
}
