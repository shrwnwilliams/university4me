import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../../utils/API";

function OneSchool() {
  const [schoolState, setSchoolState] = useState({
    id: "",
    name: "",
    city: "",
    state: "",
    zip: "",
    url: "",
  });
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setSchoolState({ ...schoolState, id: id });
    console.log(schoolState);
    API.getById(schoolState.id)
      .then(function (res) {
        console.log(res.data.results);
        setSchoolState({
          name: res.data.results[0]["school.name"],
          city: res.data.results[0]["school.city"],
          state: res.data.results[0]["school.state"],
          zip: res.data.results[0]["school.zip"].split("-")[0],
          url: res.data.results[0]["school.school_url"],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">{schoolState.name}</div>
        <div className="card-body">
          <h5 className="card-title">Hello</h5>
          <p className="card-text">
            Located in {schoolState.city}, {schoolState.state} {schoolState.zip}
          </p>

          <a
            href={schoolState.url}
            target="_blank"
            rel="noreferer noopener"
            className="btn btn-primary"
            className="btn btn-primary"
          >
            Visit their website
          </a>
        </div>
      </div>
    </div>
  );
}

export default OneSchool;
