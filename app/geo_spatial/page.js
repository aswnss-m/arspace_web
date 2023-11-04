import "./page.css"
import Map from "./components/Map/Map"
import FlowCard from "./components/FlowCard/FlowCard"

function page() {
  return (
    <div className="tool-container">
      <div className="tool">
        <form className="search-form form">
            <input type="text" placeholder="Search Location" className="text-input" required/>
            <input type="submit" value="Search" className="button"/>
        </form>
        <Map />
        <div className="flow-container">
          <FlowCard />
        </div>
      </div>
    </div>
  )
}

export default page
