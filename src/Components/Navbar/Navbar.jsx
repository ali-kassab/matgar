import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
import logo from '../../images/image.png'



export default function Navbar() {



  return <>

    <nav class="navbar navbar-expand-lg container navbar-light ">
      <Link className="navbar-brand" to="home">

        <img src={logo} alt="logo" />
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link className="nav-link" to="home">Home <span class="sr-only">(current)</span></Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pages
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="About us">about us</Link>
              <Link className="dropdown-item" to="Team">our team</Link>
              <Link className="dropdown-item" to="Booking">booking</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="Login">login/regester</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Services"> Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Blogs"> Blogs</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="contact us"> contact us</Link>
          </li>
          <Link className="nav-link" to="#"> search <i class="fa-solid fa-magnifying-glass"></i></Link>
          <Link className="nav-link" to="#"> </Link>
          
        </ul>

      </div>
    </nav>



  </>
}
