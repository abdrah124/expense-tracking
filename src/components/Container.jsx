import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-md min-h-screen w-11/12 sm:w-full text-center mx-auto">
      {children}
    </div>
  );
};

export default Container;
