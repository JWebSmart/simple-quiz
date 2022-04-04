import React from "react";
import "./Radio.scss";

export function Radio({
  data = [],
  value = "",
  name,
  size = "",
  color = "",
  type = "inline",
  className = "",
  onChange,
  ...props
}) {
  return (
    <div {...props} className={`radio-wrapper ${type} ${className} ${size} ${color}`}>
      {data.map((el, index) => (
        <div key={index} className="radio-item">
          <input
            type="radio"
            id={`${name}-${index}-item`}
            name={name}
            value={el.value}
            onChange={event => onChange(event.target.value)}
            checked={el.value === value ? true : false}
          />
          <label htmlFor={`${name}-${index}-item`}>{el.label}</label>
        </div>
      ))}
    </div>
  );
}
