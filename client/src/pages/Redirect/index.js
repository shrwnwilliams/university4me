import React from 'react';
import { useParams } from "react-router";

function Redirect (props){
    const { url } = useParams();

    return (
        <div className="text-center">
            <h1>Uh-oh~!</h1>
            <h3>Look's like that school's website isn't very secure!</h3>
            <h5>If you'd like, you can continue onwards to their website by clicking the button bellow.</h5>
            <button><a href={`//${url}`}>Hello</a></button>
        </div>
    )
}

export default Redirect;