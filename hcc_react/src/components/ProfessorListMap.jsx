import React, { useState } from "react";
import ProfessorList0 from "./ProfessorList0.jsx";
import ProfessorList1 from "./ProfessorList1.jsx";
import ProfessorList2 from "./ProfessorList2.jsx";
import ProfessorList3 from "./ProfessorList3.jsx";
import styles from "../styles/Professor.module.css";

export default function ProfessorListMap({ list, category }) {
  const [category_num] = useState(category); //유형 불러오기
  return (
    <div>
      {category_num === 0 && (
        <ul className={styles.square}>
          {list.map((t, i) => (
            <ProfessorList0 context={t.context} key={i} />
          ))}
        </ul>
      )}
      {category_num === 1 && (
        <ul className={styles.square}>
          {list.map((t, i) => (
            <ProfessorList1
              year_start={t.year_start}
              year_end={t.year_end}
              context={t.context}
              key={i}
            />
          ))}
        </ul>
      )}

      {category_num === 2 && (
        <ul className={styles.square}>
          {list.map((t, i) => (
            <ProfessorList2
              year={t.year}
              title={t.title}
              context={t.context}
              key={i}
            />
          ))}
        </ul>
      )}

      {category_num === 3 && (
        <ul className={styles.square}>
          {list.map((t, i) => (
            <ProfessorList3
              year={t.year}
              prize={t.prize}
              context={t.context}
              context1={t.context1}
              key={i}
            />
          ))}
        </ul>
      )}

      {category_num === 4 && (
        <ul className={styles.square}>
          {list.map((t, i) => (
            <div>
              <li className={styles.text_style_li}>{t.type.title}</li>
              <div style={{ marginLeft: "2rem" }}>
                {t.list.map((listitem, j) => {
                  return <ProfessorList0 context={listitem.context} key={j} />;
                })}
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
