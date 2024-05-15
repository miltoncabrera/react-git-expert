import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball Z"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <h1>GifExpertsApp</h1>

      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
        // setCategories={setCategories}
      />

      <hr />
      <button onClick={onAddCategory}>Agregar</button>

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </div>
  );
};
