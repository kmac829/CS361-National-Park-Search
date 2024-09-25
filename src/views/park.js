import React, {useState} from "react";
import {Link} from "react-router-dom"
import Map from "../components/map";
import Navbar from '../components/Navbar';
import "../styles.css"


const Park=((props)=>{
    const [weather, setWeather] = useState(<div>Temperature: fetching <br/>Weather: fetching </div>)
    fetch(`http://local.service:5000/weather/${props.data.name}`).then(
        async response => {
            const data = await response.json()
            setWeather(<div>Local Time: {data.dayhour} <br/>Temperature: {data.temp_now}&deg; F<br/>Weather: {data.weather_now} <br/>Wind: {data.wind}</div>)
        }
    )
    const campgrounds = props.data.campgrounds.map(campground=>(<li><a href={`https://www.recreation.gov${campground.link}`}>{campground.name}</a></li>))
    return (<div> 
        <Navbar />
        <Link to={`/${props.region}`}>Back</Link>
        <h1 id="center">Welcome to {props.data.name}!</h1>
        <img class="thumbPhoto" src= {props.data.images} /> 
        <Map containerElement={<div style={{height:'300px'}} class="thumbPhoto" id="right"/>} mapElement={<div style={{height:'300px'}} />} loadingElement={<div style={{height:'100%'}} />} googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_fMyry5P6pgWgr9VPbmKoAfcoIEXQjUc&v=3.exp&libraries=geometry,drawing,places" location={{lat: props.data.latitude, lng: props.data.longitude}}></Map>
        {weather}
        <br/>
        <p>{props.data.text}</p>
        <h2>Where to Camp: </h2>
        <ul>{campgrounds}</ul>
        
        </div>)
})
export default Park