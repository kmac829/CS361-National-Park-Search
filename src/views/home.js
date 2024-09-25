import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json"
import Map from "../components/map";
import Navbar from '../components/Navbar';
import '../styles.css'
import { toSlug } from "../utility";

function Home() {
    const navigate = useNavigate()

    const handleChange = e=>{
        navigate(e.target.value)
    }
    const parks = []
    const states = Object.keys(data).map(
      state=>{
        data[state].parks.forEach(
          park =>{
            parks.push(<option value={`${state}/${toSlug(park.name)}`}>{park.name}</option>)
          }
        )
        return(<option value={state}>{data[state].name}</option>)
      }
    )
    
    return ( <body>
      <Navbar />
      <div > 
        <h1 id="center">
          Find Your National Park
        </h1> 
        <br />  
        <form>
        <h3 id="center">
          Search by State:
          <select onChange={handleChange}>
              <option value=""> Please select state</option>
              {states}  
          </select>
        </h3>
        <br />
        <h3 id="center">
          Search by National Park:
          <select onChange={handleChange}>
              <option value=""> Please select park</option>
              {parks}  
          </select>
        </h3>
        <br/> <br/>
      </form>
      <div style={{"display": "flex", "justify-content": "center"}}>
      
      <Map containerElement={<div style={{height:'300px'}} class="thumbPhoto" />} mapElement={<div style={{height:'300px'}} />} loadingElement={<div style={{height:'100%'}} />} googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_fMyry5P6pgWgr9VPbmKoAfcoIEXQjUc&v=3.exp&libraries=geometry,drawing,places" location={{lat: 44.5646, lng: -123.2620}}></Map>
      </div>
      </div>
      </body>
     )
}

export default Home;
