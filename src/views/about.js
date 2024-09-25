import React from "react";
import {Link} from "react-router-dom"
import Navbar from '../components/Navbar';
import "../styles.css"

function About(){
    return (<div> 
        <Navbar />
        <Link to="/">Back</Link>
        <h1 className="h1" id="center">Find Your Park Instructions:</h1>
        <ol id="center"><li>Go to the main home page. </li>
            <li>Find the state you would like to search in.</li>
            <li>Select the National Park.</li>
            <li>Go Explore!</li>
        </ol>
        </div>)
}
export default About