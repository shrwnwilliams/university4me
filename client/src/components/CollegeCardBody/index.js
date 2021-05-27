import React from "react";

function CollegeCardBody(props) {
  // console.log(props)

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"><a href={`/college/${props.id}`}>{props["school.name"]}</a></h5>
        <p className="card-text">
          {props["school.city"]}, {props["school.state"]}{" "}
          {props["school.zip"].split("-")[0]}
        </p>
        <a
          href={`${props["school.school_url"]}`}
          rel="noreferer"
          target="_blank"
          className="btn btn-primary"
        >
          Check out their website!
        </a>
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
