import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>MD Care | A Hospital Admin Website</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/jilenski/capstoneHospitalApp" className='btn' target='_blank'>GitHub</a>
          <a href="https://wd42p-kodego.com/power-puff-girls/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>BandShirts.com | An E-commerce Website</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/smb23/BandShirts.com.io" className='btn' target='_blank'>GitHub</a>
          <a href="https://smb23.github.io/BandShirts.com.io/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>A Portfolio of A Teacher</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/smb23/wilfredoborja1997.com.io" className='btn' target='_blank'>GitHub</a>
          <a href="https://smb23.github.io/wilfredoborja1997.com.io/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Sam23 Concerts Blog | A Blog Website</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/smb23/sam23blog.io" className='btn' target='_blank'>GitHub</a>
          <a href="https://smb23.github.io/sam23blog.io/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>MovieHub</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/smb23/MP2" className='btn' target='_blank'>GitHub</a>
          <a href="https://moviehub56.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>My Personal Portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio