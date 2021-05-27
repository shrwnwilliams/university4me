import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import API from "../../utils/API";

function OneSchool(props) {
  const [schoolState, setSchoolState] = useState({
    name: "",
    city: "",
    state: "",
    zip: "",
    url: "",
  });
  const { id } = useParams();

  useEffect(() => {
    API.getById(id)
      .then(function (res) {
        console.log(res.data.results[0]);
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
      <div class="card">
        <div class="card-header">{schoolState.name}</div>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">
            Located in {schoolState.city}, {schoolState.state} {schoolState.zip}
          </p>
          <a
            href={schoolState.url}
            target="_blank"
            rel="noreferer noopener"
            className="btn btn-primary"
            class="btn btn-primary"
          >
            Visit their website
          </a>
        </div>
      </div>
    </div>
  );
}

export default OneSchool;
