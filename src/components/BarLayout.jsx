import React from "react";

const BarLayout = ({ children }) => {
  return (
    <div className="flex justify-around p-4 bg-slate-800 pb-8 rounded-b-md pl-3 text-gray-200 mx-auto">
      {children}
    </div>
  );
};

export default BarLayout;
