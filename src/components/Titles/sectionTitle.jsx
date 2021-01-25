import React from "react";
import "./titles.css";

const SectionTitle = ({
  title,
  borderBottomColor = "#11abb0",
  color = "#000"
}) => {
  return (
    <div
      className="section-title-container"
      style={{ borderBottomColor, color }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default SectionTitle;
