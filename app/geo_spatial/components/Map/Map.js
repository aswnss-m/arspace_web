"use client";
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Map = ({ addLocation }) => {
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

  const { suggestions, setValue, clearSuggestions } = usePlacesAutocomplete();

  const handleSelect = async (description) => {
    // Clear the suggestions and set the selected location based on the address
    clearSuggestions();
    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = await getLatLng(results[0]);
      const newMarker = { lat, lng };
      setMarkers([...markers, newMarker]);
      addLocation(newMarker);
    } catch (error) {
      console.error("Error geocoding address:", error);
    }
  };

  return (
    <>
      <form className="search-form form">
        <input
          type="text"
          placeholder="Search Location"
          className="text-input"
          required
          value={suggestions.query}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
      {suggestions.status === "OK" && (
        <div className="suggestions">
          {suggestions.data.map((suggestion) => (
            <div
              key={suggestion.id}
              onClick={() => handleSelect(suggestion.description)}
              className="suggestion-item"
            >
              {suggestion.description}
            </div>
          ))}
        </div>
      )}
      <div className="map">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default Map;
