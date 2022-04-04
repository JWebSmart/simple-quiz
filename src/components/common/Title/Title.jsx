import React from "react";
import "./Title.scss";

export function Title({ children, size = "", color = "", className = "", ...props }) {
  return (
    <h1 {...props} className={`title${className && ` ${className}`}${size && ` ${size}`}${color && ` ${color}`}`}>
      {children}
    </h1>
  );
}
