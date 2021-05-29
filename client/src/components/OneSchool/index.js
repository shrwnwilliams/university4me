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
    studentSize: "",
    costInState: "",
    costOutState: "",
    costProgram: "",
    actCumulative: "",
    actEnglish: "",
    actMath: "",
    actWriting: "",
    satReading: "",
    satMath: "",
    satWriting: "",
    admissionOverall: "",
  });

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setSchoolState({ ...schoolState, id: id });
    console.log(schoolState);
    console.log(id);
    API.getById(id)
      .then(function (res) {
        console.log(res);
        setSchoolState({
          name: res.data.results[0]["school.name"],
          city: res.data.results[0]["school.city"],
          state: res.data.results[0]["school.state"],
          zip: res.data.results[0]["school.zip"].split("-")[0],
          url: res.data.results[0]["school.school_url"],
          studentSize: res.data.results[0]["latest.student.size"],
          costInState: res.data.results[0]["latest.cost.tuition.in_state"],
          costOutState: res.data.results[0]["latest.cost.tuition.out_of_state"],
          costProgram: res.data.results[0]["latest.cost.tuition.program_year"],
          actCumulative:
            res.data.results[0][
              "latest.admissions.act_scores.midpoint.cumulative"
            ],
          actEnglish:
            res.data.results[0][
              "latest.admissions.act_scores.midpoint.english"
            ],
          actMath:
            res.data.results[0]["latest.admissions.act_scores.midpoint.math"],
          actWriting:
            res.data.results[0][
              "latest.admissions.act_scores.midpoint.writing"
            ],
          satReading:
            res.data.results[0][
              "latest.admissions.sat_scores.midpoint.critical_reading"
            ],
          satMath:
            res.data.results[0]["latest.admissions.sat_scores.midpoint.math"],
          satWriting:
            res.data.results[0][
              "latest.admissions.sat_scores.midpoint.writing"
            ],
          admissionOverall:
            res.data.results[0]["latest.admissions.admission_rate.overall"],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function percentage(num) {
    return num * 100;
  }

  console.log(percentage(0.4586));

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header">
          <h2>{schoolState.name}</h2>
        </div>
        <div className="card-body">
          <h5 className="card-title">Located in</h5>
          <p className="card-text">
            {schoolState.city}, {schoolState.state} {schoolState.zip}
          </p>

          <h3>Student Size</h3>
          <p>{schoolState.studentSize}</p>

          {schoolState.admissionOverall === null ? (
            <></>
          ) : (
            <div>
              <h3>Admission Rate</h3>{" "}
              <p>{`${percentage(schoolState.admissionOverall)}%`}</p>
            </div>
          )}

          {!schoolState.satReading &&
          !schoolState.satWriting &&
          !schoolState.satMath ? (
            <></>
          ) : (
            <>
              <h3>SAT Scores</h3>
              <p>
                Critical Reading: <span>{schoolState.satReading}</span>
              </p>
              <p>
                Math: <span>{schoolState.satMath}</span>
              </p>
              <p>
                Writing: <span>{schoolState.satWriting}</span>
              </p>
            </>
          )}

          {!schoolState.actEnglish &&
          !schoolState.actMath &&
          !schoolState.actWriting &&
          !schoolState.actCumulative ? (
            <></>
          ) : (
            <>
              <h3>ACT Scores</h3>
              <p>
                English: <span>{schoolState.actEnglish}</span>
              </p>
              <p>
                Math: <span>{schoolState.actMath}</span>
              </p>
              <p>
                Writing: <span>{schoolState.actWriting}</span>
              </p>
              <p>
                Cumulative: <span>{schoolState.actCumulative}</span>
              </p>
            </>
          )}
          <h3>Cost</h3>
          {schoolState.costInState === null ? (
            <></>
          ) : (
            <p>
              In State: <span>${schoolState.costInState}</span>
            </p>
          )}
          {schoolState.costOutState === null ? (
            <></>
          ) : (
            <p>
              Out of State: <span>${schoolState.costOutState}</span>
            </p>
          )}
          {schoolState.costProgram === null ? (
            <></>
          ) : (
            <p>
              Program Year: <span>${schoolState.costProgram}</span>
            </p>
          )}
          {schoolState.url.includes("https") ? (
            <a
              href={schoolState.url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Visit their website
            </a>
          ) : (
            <a
              href={`redirect/${schoolState.url}`}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Visit their website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default OneSchool;
