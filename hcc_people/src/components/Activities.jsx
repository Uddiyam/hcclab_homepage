import { faInfo } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Activities({ activities }) {
  return (
    <div className="back">
      {activities.map((type, i) => {
        return (
          <>
            <div>
              <ul>
                <li className="type_name">
                  <b>{`${type.type.type_name}`}</b>
                </li>
              </ul>
            </div>
            <div>
              {type.lists.map((listItem, i2) => {
                return (
                  <ul className="lists">
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
          </>
        );
      })}
    </div>
  );
}
