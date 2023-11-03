import "./page.css"

function page() {
  return (
    <div className="tool-container">
      <div className="map-container">
        <form className="form">
            <input type="text" placeholder="Search Location" required/>
            <input type="submit" value="Search" />
        </form>
        <div className="map"></div>
        <div className="flow-container">
            
        </div>
      </div>
    </div>
  )
}

export default page
