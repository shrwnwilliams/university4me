import React from "react";
import CollegeCardBody from "../CollegeCardBody";
import { Link } from "react-router-dom";

function CollegeCard({ colleges }) {
  // console.log(colleges[0]["school.name"]);
  return (
    <div className="container">
      {colleges.map((college) => (
        <CollegeCardBody key={college.id} {...college} />
      ))}
    </div>
  );
}

export default CollegeCard;
