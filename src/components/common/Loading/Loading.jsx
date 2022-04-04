import React from "react";

export function Loading({ children, size = "", color = "", className = "", ...props }) {
  return (
    <h1 {...props} className={`loading${className && ` ${className}`}${size && ` ${size}`}${color && ` ${color}`}`}>
      {children}
    </h1>
  );
}
