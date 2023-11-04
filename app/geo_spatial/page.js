'use client';
import { useState } from "react";
import "./page.css"
import Map from "./components/Map/Map"
import FlowCard from "./components/FlowCard/FlowCard"
function page() {
  const [search, setSearch] = useState('')
  const [Location, setLocation] = useState(null)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmitInMap(search);

  };
  return (
    <div className="tool-container">
      <div className="tool">
        <Map onFormSubmitInMap = {handleFormSubmit}/>
        <div className="flow-container">
          <FlowCard />
        </div>
      </div>
    </div>
  )
}

export default page
