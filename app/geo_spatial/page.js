'use client';
import "./page.css"
import { useState,useMemo } from "react";
import FlowCard from "./components/FlowCard/FlowCard"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function Page() {
  const [search, setSearch] = useState('')
  const mapContainerStyle = {
    width: '100%',
    height: '25em',
  };
  let index = 0;
  const center = useMemo(() => ({ lat: 12.988920669201654, lng: 80.23241308934357 }), []);

  const [markers, setMarkers] = useState([]);

  const handleMapClick = (event) => {
    // Add a new marker at the clicked position
    const newMarker = {
      index : index++,
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    // insert the marker object to the
    setMarkers([...markers, newMarker]);
  }
  return (
    <div className="tool-container">
      <div className="tool">
     
      {/* <form className="search-form form"> */}
        {/* <PlacesAutocomplete setSearch={setSearch} /> */}
        {/* <input type="submit" value="Search" className="button" />
      </form> */}

      <div className="map">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            mapTypeId="terrain"
            onClick={handleMapClick}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

{/* FlowCards */}
        <div className="flow-container">
          <h4>Selected Points</h4>
          {
            markers.length > 0 && markers.map((location) => (
              <FlowCard key={location.index} lat={location.lat} long = {location.lng}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Page
