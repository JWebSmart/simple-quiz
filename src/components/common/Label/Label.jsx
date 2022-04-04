import React from "react";
import "./Label.scss";

export function Label({ children, size = "", color = "", className = "", ...props }) {
  return (
    <label {...props} className={`label${className && ` ${className}`}${size && ` ${size}`}${color && ` ${color}`}`}>
      {children}
    </label>
  );
}
