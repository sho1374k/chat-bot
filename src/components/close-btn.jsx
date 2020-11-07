import React from "react";

export const CloseBtn = (props) => {
  return(
    <button
      className="close-btn"
      onClick={props.closeMenu}
    >
      閉じる
    </button> 
  )
}