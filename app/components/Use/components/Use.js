import './Use.css'
import Card from './Card/Card'
import { use_case } from '@/app/data'
function Use() {
  return (
    <div className="use-container">
        <div className='use-section'>
        <div className="use-heading">Use Cases</div>
      <div className="uses">
      {
        use_case.map((item, index) => {
          return (
            <Card props={item} key={index} />
          )
        })
      }
      </div>
    </div>
    </div>
  )
}

export default Use
