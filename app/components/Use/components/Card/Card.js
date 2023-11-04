import "./Card.css"
import { tick } from "@/app/svgs"
function Card({props}) {
  return (
    <div className="card">
      <div className="card-title">
        {props.name}
      </div>
      <div className="card-description">
        {props.description}
      </div>
      <ul className="card-points">
        {
          props.key_points.map((item, index) => {
            return (
              <li key={index} className="card-point">{tick}{item}</li>
            )
          })
        }
      </ul>
      <div className="card-image">
        {props.img}
      </div>
    </div>
  )
}

export default Card
