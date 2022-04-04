import React from "react";
import "./Text.scss";

export function Text({ children, size = "", color = "", className = "", ...props }) {
  return (
    <p {...props} className={`text${className && ` ${className}`}${size && ` ${size}`}${color && ` ${color}`}`}>
      {children}
    </p>
  );
}
