import React from "react";

const Categories = ({ filterItems, categories }) => {
  return (
    <div className="btn-container">
      {categories.map((cat, index) => {
        return (
          <button
            type="button"
            onClick={() => filterItems(cat)}
            className="filter-btn"
            key={index}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
