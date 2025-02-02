import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <div className="swapping-squares-spinner">
        <div className="square" />
        <div className="square" />
        <div className="square" />
        <div className="square" />
      </div>
    </div>
  );
};

export default Loading;
