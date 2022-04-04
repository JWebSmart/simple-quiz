import React from "react";
import "./Button.scss";

export function Button({ children, size = "", color = "", className = "", onClick, onDoubleClick, ...props }) {
  return (
    <button
      {...props}
      className={`btn${className && ` ${className}`}${size && ` ${size}`}${color && ` ${color}`}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {children}
    </button>
  );
}
