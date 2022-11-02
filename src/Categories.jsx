import React, { useState } from "react";
const Categories = () => {
  const [index, setIndex] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const handleButtonClick = (e) => {
    setIndex(e);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((e,i) => (
          <li key={i}
            onClick={() => handleButtonClick(i)}
            className={index === i ? "active" : ""}
          >
            {categories[i]}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
