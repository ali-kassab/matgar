import React from 'react'
import './../About part/Aboutpart.css'

export default function Aboutpart() {
  return <>

    <section>
      <div className='background'>
        <div className='container'>
          <div className="row">
            <div className='col-md-6 col-sm-12'>
              <div className='aboutItemPics '>
                <div className='centerdiv'></div>
                <div >
                  <img className='three' src={require('../../images/side.jpg')} alt="doctor" />
                  <img className='two' src={require('../../images/about2.jpg')} alt="doctor" />
                </div>
                <div>
                  <img className='one' src={require('../../images/about1.jpg')} alt="doctor" />

                  <div className='experience text-center'>
                    <span>20</span>
                    <h5>experience</h5>
                  </div>
                </div>

              </div>
            </div>
            <div className='col-md-6 col-sm-12'>

              <div className='aboutItemText text-center'>
                <h6>About Us</h6>
                <h2>The Great Place Of Medical Hospital Center</h2>
                <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                <div className='row aboutIcons '>
                  <div className=''>
                    <div className='aboutIconText Emergency '>
                      <i class=" fa-solid fa-truck-medical"></i>
                      <h4>

                        Emergency Help
                      </h4>

                    </div>
                    <div className='aboutIconText Qualified '>
                      <i class=" fa-solid fa-user-doctor"></i>
                      <h4>

                        Qualified Doctors

                      </h4>

                    </div>
                  </div>
                  <div className=''>
                    <div className='aboutIconText  Professionals'>
                      <i class=" fa-solid fa-user-tie"></i>
                      <h4>

                        Best Professionals

                      </h4>

                    </div>
                    <div className='aboutIconText Medical '>
                      <i class="  fa-solid fa-syringe"></i>
                      <h4>

                        Medical Treatment
                      </h4>
                    </div>

                  </div>
                </div>
                <button className='my-5'>read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
