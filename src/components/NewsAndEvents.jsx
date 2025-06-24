import React from 'react'
import './NewsAndEvents.css'
import arrow from '../images/arrowcircleright.png'
import arrow1 from '../images/arrowcircleright2.png'
import LatestNews from './LatestNews'

const NewsAndEvents = () => {
  return (
    <>
      <div className='hero-container'>
        <div className='hero-bg-effect'>
          <div className='hero-text'>
            <h2>News & Events.</h2>
            <button className='yellow-btn'>More Info ⬇</button>
          </div>
          <div className='news-text'>
            <h4>Next Events <strong>| Roadshow // 27 May 2025</strong></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque odio obcaecati.</p>
            <div className='news2-text'>
              <p> <strong>01</strong> / 04</p>
              <div className='news2img'>
                <img src={arrow1} />
                <img src={arrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='LatestNews'>
        <h2>Latest News</h2>
        <div className='hr-line' />
        <div className='grid-wrappe4'>
          <LatestNews />
        </div>
      </div>
    </>
  )
}

export default NewsAndEvents
