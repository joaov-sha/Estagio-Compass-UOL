import React, { useState } from "react";
import css from "./Selector.module.css";

interface SelectorProps {
  categories: string[];
  onSelect: (category: string) => void;
}

const Selector: React.FC<SelectorProps> = ({ categories, onSelect }) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const handleSelect = (category: string) => {
    setActiveCategory(category);
    onSelect(category);
  };

  return (
    <div className={css.selectorContainer}>
      {categories.map((category) => (
        <button
          key={category}
          className={`${css.selectorButton} ${
            activeCategory === category ? css.active : ""
          }`}
          onClick={() => handleSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Selector;