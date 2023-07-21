import React from 'react'
import '../About us/Aboutus.css'
import Banner from './../Banner/Banner';
import 'animate.css';
import Aboutpart from '../About part/Aboutpart';


export default function Aboutus() {

  // let aboutIconText = document.querySelector('.aboutIconText')
  // let fasolid = document.querySelector('.fa-solid')

  // aboutIconText.addEventListener('click', function () {
  //   fasolid.classList.add('.animate__shakeX')
  // })


  return <>
    <Banner title={'About us'} />

 <section>
  <Aboutpart/>
 </section>

    <section >
      <div className='wards py-5'>
        <div className='container py-5'>
          <div className='row '>
            <div className='col-md-3 col-sm-6 aboutCustom'>
              <h2>120</h2>
              <h5>Years With You</h5>
              <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
            <div className='col-md-3 col-sm-6 aboutCustom'>
              <h2>400</h2>
              <h5>Awards</h5>
              <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
            <div className='col-md-3 col-sm-6 aboutCustom'>
              <h2>250</h2>
              <h5>Doctors</h5>
              <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
            <div className='col-md-3 col-sm-6 aboutCustom'>
              <h2>800</h2>
              <h5>Satisfied Client</h5>
              <p>Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  </>
}
