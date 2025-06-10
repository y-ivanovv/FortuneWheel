import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const ItemContext = createContext();

const ItemContextProvider = ({ children }) => {
  const [color, setColor] = useState("#f44336");
  const handleColorChange = color => {
    setColor(color.hex);
  };

  const [item, setItem] = useState(
    JSON.parse(localStorage.getItem("ItemsInLocalStorage")) || []
  );

  const addItem = e => {
    e.preventDefault();

    let newItem = {
      id: uuid(),
      item: e.target[0].value,
      times: parseInt(e.target[1].value),
      background: color
    };
    setItem(prev => [...prev, newItem]);
    e.target.reset();
  };

  const removeItem = key => {
    let filteredItems = item.filter(el => el.id !== key);
    setItem(filteredItems);
  };

  useEffect(() => {
    localStorage.setItem("ItemsInLocalStorage", JSON.stringify(item));
  }, [item]);

  const contextValue = {
    color,
    handleColorChange,
    item,
    addItem,
    removeItem
  };

  return (
    <ItemContext.Provider value={contextValue}>{children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;
