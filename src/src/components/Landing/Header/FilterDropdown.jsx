import React from "react";
import styles from "./FeedComponent.css";

function FilterDropdown({ label, options, defaultOption }) {
  return (
    <div className="filterDropdown">
      <label className="filterLabel">{label}</label>
      <div className="dropdownWrapper">
        <select className="select" defaultValue={defaultOption}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img src="./icons/arrow-down.png" alt="" className="ropdownIcon" />
      </div>
    </div>
  );
}

export default FilterDropdown;