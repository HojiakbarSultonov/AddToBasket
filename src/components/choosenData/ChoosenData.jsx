import React, { useContext, useState } from "react";

import { StateContext } from "../../context";

function ChoosenData({ image, id, title, raqam }) {
  const { dispatch } = useContext(StateContext);

  const deleteBtn = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: id });
  };

  return (
    <div className="basketInfo">
      <button onClick={() => deleteBtn(id)}>delete</button>
      <h1>{title}</h1>

      <img width={"250px"} src={image} alt="" />
    </div>
  );
}

export default ChoosenData;
