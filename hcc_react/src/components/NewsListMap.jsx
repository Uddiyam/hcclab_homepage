import React from "react";
import NewsList from "./NewsList.jsx";

export default function NewsListMap({ list }) {
  return (
    <div>
      {list.map((t, i) => (
        <NewsList year={t.year} group={t.group} context={t.context} key={i} />
      ))}
    </div>
  );
}
