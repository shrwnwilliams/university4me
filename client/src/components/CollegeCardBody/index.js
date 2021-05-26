import React from 'react';

function CollegeCardBody (props) {
// console.log(props)

    return(
        <div class="card">

        <div class="card-body">
          <h5 class="card-title">{props["school.name"]}</h5>
          <p class="card-text">
{props["school.city"]}, {props["school.state"]} {props["school.zip"].split("-")[0]}
          </p>
          <a href={props["school.school_url"]} target="_blank" rel="noreferer noopener" class="btn btn-primary">
            Go somewhere
          </a>
        </div>

      </div>
    )
}

export default CollegeCardBody;