import React from "react";

export const OpenBtn = (props) => {
  return(
    <button
      className="open-btn"
      onClick={props.openMenu}
    >open</button>
  )
}