'use client';
import "./page.css"
import { useState,useMemo } from "react";
import FlowCard from "./components/FlowCard/FlowCard"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";

// const PlacesAutocomplete = ({ setSearch }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSearch(address);
//   };

//   return (
//     <select onChange={handleSelect} className="combobox-input" disabled={!ready}>
//       <option value="" disabled selected>
//         Search an address
//       </option>
//       {status === "OK" &&
//         data.map(({ place_id, description }) => (
//           <option key={place_id} value={description}>
//             {description}
//           </option>
//         ))}
//     </select>
//   );  
// };

function page() {
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
          <h4>Selected</h4>
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

export default page
