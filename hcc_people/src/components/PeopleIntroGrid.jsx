import React from "react";
import PeopleIntro from "./PeopleIntro";

export default function PeopleIntroGrid({ peopleInfo }) {
  return (
    <div className="back">
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
