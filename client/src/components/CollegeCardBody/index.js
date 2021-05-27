import React from 'react';

function CollegeCardBody (props) {
// console.log(props)

    return(
        <div className="card">

        <div className="card-body">
          <h5 className="card-title">{props["school.name"]}</h5>
          <p className="card-text">
{props["school.city"]}, {props["school.state"]} {props["school.zip"].split("-")[0]}
          </p>
          <a href={props["school.school_url"]} target="_blank" rel="noreferer noopener" className="btn btn-primary">
            Check out their website!
          </a>
          <button className="mx-2 btn btn-secondary" data-id={props.id}>Add to favorites</button>
        </div>

      </div>
    )
}

export default CollegeCardBody;