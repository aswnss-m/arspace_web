import "./page.css"
import Map from "./components/Map/Map"
import FlowCard from "./components/FlowCard/FlowCard"
function page() {
  return (
    <div className="tool-container">
      <div className="tool">
        <form className="search form">
            <input type="text" placeholder="Search Location" required/>
            <input type="submit" value="Search" />
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
