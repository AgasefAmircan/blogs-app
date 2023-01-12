import React from 'react'
import Logo from '../assets/download.png'
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made by <a href="https://github.com/agasefamircan" rel="noreferrer" target='_blank'> <b>Agasef</b> </a>
      </span>
    </footer>
  )
}

export default Footer