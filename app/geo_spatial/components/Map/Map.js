"use client";
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';
const Map = () => {
  const mapContainerStyle = {
    width: '800px',
    height: '800px',
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
  };

  const handleMarkerClick = (marker) => {
    // Display the GPS data when a marker is clicked
    setSelectedMarker(marker);
  };

  return (
    <div className="map">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={center}
          mapTypeId="hybrid"
          onClick={handleMapClick} // Attach the click event handler
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker}
              onClick={() => handleMarkerClick(marker)}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      {selectedMarker && (
        <div className="marker-info">
          <p>Latitude: {selectedMarker.lat}</p>
          <p>Longitude: {selectedMarker.lng}</p>
        </div>
      )}
    </div>
  );
};

export default Map;

