import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function PopUp(props) {
  setTimeout(() => {
    props.clickHandler(false);
  }, 5000);
  return (
    <div className="popup">
      <p>Already Exists!!!</p>
      <FontAwesomeIcon
        icon={faTimes}
        onClick={() => {
          props.clickHandler(false);
        }}
      />
    </div>
  );
}

export default PopUp;
