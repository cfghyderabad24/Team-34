import React, { useState } from "react";
import "../styles/View.css";

const ngos = [
  { id: 1, name: "STBHAT", description: "Kavya@gmail.com" },
  { id: 2, name: "Sumeet", description: "sumeetcfg@gmail.com" },
  { id: 3, name: "Shaktiman", description: "shakthi@gmail.com" },
  { id: 4, name: "Tata", description: "Tata@gmail.com" },
];

const ngoDetails = {
  1: [
    {
      serialNumber: 1,
      name: "Person One",
      email: "personone@example.com",
      score: 75,
    },
    {
      serialNumber: 2,
      name: "Person Two",
      email: "persontwo@example.com",
      score: 55,
    },
    {
      serialNumber: 3,
      name: "Person Nine",
      email: "personnine@example.com",
      score: 80,
    },
    {
      serialNumber: 4,
      name: "Person Ten",
      email: "personten@example.com",
      score: 45,
    },
  ],
  2: [
    {
      serialNumber: 1,
      name: "Person Three",
      email: "personthree@example.com",
      score: 60,
    },
    {
      serialNumber: 2,
      name: "Person Four",
      email: "personfour@example.com",
      score: 65,
    },
    {
      serialNumber: 3,
      name: "Person Eleven",
      email: "personeleven@example.com",
      score: 70,
    },
    {
      serialNumber: 4,
      name: "Person Twelve",
      email: "persontwelve@example.com",
      score: 50,
    },
  ],
  3: [
    {
      serialNumber: 1,
      name: "Person Five",
      email: "personfive@example.com",
      score: 85,
    },
    {
      serialNumber: 2,
      name: "Person Six",
      email: "personsix@example.com",
      score: 58,
    },
    {
      serialNumber: 3,
      name: "Person Thirteen",
      email: "personthirteen@example.com",
      score: 90,
    },
    {
      serialNumber: 4,
      name: "Person Fourteen",
      email: "personfourteen@example.com",
      score: 62,
    },
  ],
  4: [
    {
      serialNumber: 1,
      name: "Person Seven",
      email: "personseven@example.com",
      score: 45,
    },
    {
      serialNumber: 2,
      name: "Person Eight",
      email: "personeight@example.com",
      score: 95,
    },
    {
      serialNumber: 3,
      name: "Person Fifteen",
      email: "personfifteen@example.com",
      score: 55,
    },
    {
      serialNumber: 4,
      name: "Person Sixteen",
      email: "personsixteen@example.com",
      score: 75,
    },
  ],
};

const View = () => {
  const [selectedNgo, setSelectedNgo] = useState(null);

  const handleCardClick = (ngoId) => {
    setSelectedNgo(ngoId);
  };

  const handleViewAll = () => {
    setSelectedNgo(null);
  };

  return (
    <div className="view-container">
      <button className="view-all-button" onClick={handleViewAll}>
        View All NGOs
      </button>
      <div className="cards-container">
        {ngos.map((ngo) => (
          <div
            key={ngo.id}
            className="card"
            onClick={() => handleCardClick(ngo.id)}
          >
            <h3>{ngo.name}</h3>
            <p>{ngo.description}</p>
          </div>
        ))}
      </div>
      {selectedNgo && (
        <div className="table-container">
          <h2>Details for {ngos.find((ngo) => ngo.id === selectedNgo).name}</h2>
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {ngoDetails[selectedNgo].map((detail) => (
                <tr
                  key={detail.serialNumber}
                  style={{
                    backgroundColor: detail.score > 60 ? "#22c55e" : "#e11d48",
                    color: "#fff",
                  }}
                >
                  <td>{detail.serialNumber}</td>
                  <td>{detail.name}</td>
                  <td>{detail.email}</td>
                  <td>{detail.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default View;
