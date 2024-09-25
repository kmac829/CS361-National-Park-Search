import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './map.css'
//props.location
const map=withScriptjs(withGoogleMap((props)=>
    <GoogleMap 
        defaultZoom={8} 
        defaultCenter={props.location}
    >
        <Marker position={props.location} />
    </GoogleMap>
))


export default map