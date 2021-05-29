import React from "react";

function CollegeCardBody(props) {
  // console.log(props)

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title"><a href={`/${props.id}`} target="_blank" rel="noreferrer">{props["school.name"]}</a></h5>
        <p className="card-text">
          {props["school.city"]}, {props["school.state"]}{" "}
          {props["school.zip"].split("-")[0]}
        </p>
        {props["school.school_url"].includes("https") ? (
            <a
              href={props["school.school_url"]}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Visit their website
            </a>
          ) : (
            <a
              href={`redirect/${props["school.school_url"]}`}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Visit their website
            </a>
          )}
        <button className="mx-2 btn btn-secondary" data-id={props.id}>
          Add to favorites
        </button>
      </div>
    </div>
  );
}

// subroute for id so OneSchool doesn't show up on each page 
// links without https:// linking back to this site instead of their own

export default CollegeCardBody;
