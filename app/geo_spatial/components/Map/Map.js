"use client";
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';
const Map = ({addLocation}) => {
  const [search, setSearch] = useState('')
  const mapContainerStyle = {
    width: '100%',
    height: '25em'
  };

  const center = {
    lat: 27.672932021393862,
    lng: 85.31184012689732,
  };

  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMapClick = (event) => {
    // Add a new marker at the clicked position
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkers([...markers, newMarker]);
    addLocation(newMarker);
  };


  return (
   <>
    <form className="search-form form">
    <input type="text" placeholder="Search Location" className="text-input" required  value={search} onChange={(e)=>{
      setSearch(e.target.value)
    }}/>
    <input type="submit" value="Search" className="button"/>
</form>
    <div className="map">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          mapTypeId="terrain"
          onClick={handleMapClick} // Attach the click event handler
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
   </>
  );
};

export default Map;

