import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Dragon Ball Z");
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    // setCategories((c) => [...c, inputValue]);
    onNewCategory(inputValue);
    setInputValue('');

  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={() => onInputChange(event)}
      />
    </form>
  );
};

