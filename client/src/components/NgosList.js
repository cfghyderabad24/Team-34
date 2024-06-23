import React from "react";
import "../styles/NgosList.css";

const ngos = [
  // ONGC Foundation
  // Inlaks Shivdasani Foundation
  // Narotam Sekhsaria Foundation
  // Lady Tata Memorial Trust
  // Tata Trust
  "Sitaram Jindal Foundation",
  "Swami Dayanand Education Foundation",
  "North South Foundation",
  "Aga Khan Foundation",
  "NGDr. Reddy’s FoundationO5",
  "NGO6",
  "NGO7",
  "NGO8",
  "NGO9",
  "NGO10",
  "NGO11",
  "NGO12",
  "NGO13",
  "NGO14",
  "NGO15",
];

const splitIntoColumns = (array, numColumns) => {
  const columns = Array.from({ length: numColumns }, () => []);
  array.forEach((item, index) => {
    columns[index % numColumns].push(item);
  });
  return columns;
};

const NgosList = () => {
  const columns = splitIntoColumns(ngos, 3);
  return (
    <div className="ngos-list-container">
      <h1 className="ngos-list-header">NGOs List</h1>
      <div className="ngos-list">
        {columns.map((column, colIndex) => (
          <div className="ngos-column" key={colIndex}>
            <ul>
              {column.map((ngo, index) => (
                <li key={index}>{ngo}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NgosList;
