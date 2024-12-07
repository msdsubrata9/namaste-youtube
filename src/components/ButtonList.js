import React from "react";
import Button from "./Button";

function ButtonList() {
  const buttonNameList = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Romance",
    "Coding",
    "Web Dev",
    "Comedy",
    "Bollywood",
    "Virat Kohli",
    "Sandeep",
    "Motivation",
    "Spirituality",
    "Gym",
  ];
  return (
    <div className="w-full max-w-screen-xl overflow-x-auto whitespace-nowrap pb-2">
      <div className="flex">
        {buttonNameList.map((buttonName) => (
          <Button key={buttonName} name={buttonName} />
        ))}
      </div>
    </div>
  );
}

export default ButtonList;
