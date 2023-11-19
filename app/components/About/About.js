"use client"
import './About.css'

import { about } from '@/app/data'
import ReactPlayer from 'react-player'
// import Video from 'next-video';

function About() {
  return (
    <div className='about-container'>
      <div className="about">
          <div className="about-heading">About</div>
          <div className="about-content">
            {about}
          </div>
      </div>


    </div>
  )
}

export default About
