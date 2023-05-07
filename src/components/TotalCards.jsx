import React, { useEffect, useRef } from "react";
import axios from "axios";

const TotalCards = () => {
  const arr = ["people", "planets", "vehicles", "species", "starships"];
  const totalArr = [];
  const total = useRef(0);
  const getall = () => {
    arr.forEach((item) => {
      axios.get(`https://swapi.dev/api/${item}/`).then((response) => {
        totalArr.push({ resource: item, count: response.data.count });
      });
    });
    console.log(totalArr);
    total.current = totalArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    );
    console.log(total.current);
  };
  useEffect(() => {
    getall();
  }, []);

  return (
    <div>
      Total Items:{total.current}
      <div>
        {totalArr.map((val, ind) => {
          return (
            <span key={ind}>
              {val.resource}:- {val.count}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TotalCards;
