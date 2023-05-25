import React from "react";

const ItemList = ({ children }) => {
  return (
    <div className="grid py-4 rounded-lg overflow-hidden gap-1">{children}</div>
  );
};

export default ItemList;
