import React, { useState } from 'react'
import '../Home/Home.css'
import image1 from '../../images/doctor-7c2bc96d67d3eba1d64a.png'
import Aboutpart from './../About part/Aboutpart';
import { Link } from 'react-router-dom';

export default function Home() {


  const [scrollColor, setscrollColor] = useState(false);
  function scroll() {
    if (window.scrollY >= '149') {
      setscrollColor(true)
    } else {
      setscrollColor(false)
    }
  }
  window.addEventListener('scroll', scroll)


  const [h3color, seth3color] = useState(false);
  function h3scroll() {
    if (document.onmouseenter) {
      seth3color(true)
    } else {
      seth3color(false)
    }
  }
  window.addEventListener('mouseenter', h3scroll)





  const [color, setcolor] = useState('#1F2278');
  //  const [baccolor, setbaccolor] = useState('#f17732');
  function change() {

    return { color: 'red' }
  }

  return <>

    <header className='home'>
      <div className='container'>
        <div className="row">
          <div className="col-md-8 col-lg-8">
            <h5 style={change()}>We Provide All Health Care Solution</h5>
            <h2 style={{ color: color }}>Protect Your Health And Take Care To Of Your Health</h2>
            <h3 className={h3color ? 'bg-danger' : ''}>Lorem ipsum dolor sit amet.</h3>
            <h4 onScroll={() => { setscrollColor(true) }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eum voluptatum magnam oluta op</h4>
            <button className={scrollColor ? 'bg-danger' : ''} onMouseLeave={() => { setcolor('#1F2278') }} onMouseEnter={() => { setcolor('red') }}><Link>Read More</Link></button>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className='item'>
              <img id='imgDoctor' src={image1} alt="doctor" className='w-100' />
              <i classNamess="fa-regular fa-square"></i>
            </div>
          </div>
        </div>
      </div>


    </header>
    <section>
      <Aboutpart />
    </section>

  </>
}
