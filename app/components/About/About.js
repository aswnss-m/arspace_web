import './About.css'
import { about } from '@/app/data'
function About() {
  return (
    <div className='about-container'>
      <div className="about">
          <div className="about-heading">About Us</div>
          <div className="about-content">
            {about}
          </div>
      </div>
    </div>
  )
}

export default About
