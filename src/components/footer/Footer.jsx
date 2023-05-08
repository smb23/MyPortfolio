import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#/" className='footer__logo'>SAM23</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className='footer__socials'>
        <a href="https://github.com/smb23"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/samuel-borja-47b480275/"><FaLinkedin/></a>
        <a href="https://www.facebook.com/SamBorja23"><BsFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sam23. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer