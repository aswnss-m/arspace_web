"use client";
import React, { useState, useMemo } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';
import Select from 'react-select';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Map = () => {
  const [search, setSearch] = useState('');
  const mapContainerStyle = {
    width: '100%',
    height: '25em',
  };

  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

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

  return (
    <>
      <form className="search-form form">
        <PlacesAutocomplete setSearch={setSearch} />
        <input type="submit" value="Search" className="button" />
      </form>
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
    </>
  );
};

const PlacesAutocomplete = ({ setSearch }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSearch(address);
  };

  return (
    <select onChange={handleSelect} className="combobox-input" disabled={!ready}>
      <option value="" disabled selected>
        Search an address
      </option>
      {status === "OK" &&
        data.map(({ place_id, description }) => (
          <option key={place_id} value={description}>
            {description}
          </option>
        ))}
    </select>
  );  
};

export default Map;