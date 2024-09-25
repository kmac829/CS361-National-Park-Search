import React from "react";
import {Link} from "react-router-dom"
import { toSlug } from "../utility";
import Navbar from '../components/Navbar';
import "../styles.css"


function State(props){
    const parks = props.data.parks.map(
        park=>{
            return(<li><Link to={`/${props.data.name}/${toSlug(park.name)}`}>{park.name}</Link></li>)
        }
    )
    return (<div> 
        <Navbar />
        <Link to="/">Back</Link>
        <h1 id="center">Welcome to {props.data.name}!</h1>
        <h3 id="center">Find Your Park!</h3>
        <br />
        <ul id="align">{parks}</ul>
        </div>)
}
export default State