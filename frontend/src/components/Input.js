import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        className={props.cssClasse}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Input;
