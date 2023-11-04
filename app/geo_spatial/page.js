'use client';
import { useState } from "react";
import "./page.css"
import Map from "./components/Map/Map"
import FlowCard from "./components/FlowCard/FlowCard"

function page() {
  const [search, setSearch] = useState('')
  const [locations, setLocations] = useState([])

  const pushLocation = (location) => {
    setLocations([...locations, location])
    console.log('location update')
  }
  const [Location, setLocation] = useState([])
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmitInMap(search);

  };
  return (
    <div className="tool-container">
      <div className="tool">
        <Map/>
        <div className="flow-container">
          {
            locations.length === 0? <>
            please select a location
            </>:(

              locations.map((location, index) => {
                <FlowCard
                  key={index}
                  lat={location.lat}
                  log = {location.lng}
                />
              })
            )}
            <FlowCard
                  key={0}
                  lat={56}
                  log = {25}
            />
        </div>
      </div>
    </div>
  )
}

export default page
