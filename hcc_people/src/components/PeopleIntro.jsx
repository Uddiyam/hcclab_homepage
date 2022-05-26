import React from "react";

export default function PeopleIntro({ name, info, img }) {
  return (
    <div className="wrapper">
      <div>
        <img className="people_1" src={img} alt={name} />
      </div>
      <h3 className="name">{name}</h3>
      <div>
        <p className="intro">{info}</p>
      </div>
    </div>
  );
}
