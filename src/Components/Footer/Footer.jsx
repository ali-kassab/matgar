import React from 'react'
import '../Footer/Footer.css'
import { Link, Navigate } from 'react-router-dom'
import Aboutus from './../About us/Aboutus';



export default function Footer() {
    return <>

        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3 one col-sm-6">
                    <img src={require('../../images/image-2.png')} alt="logo" className='w-100' />
                    <hr />
                    <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                    <div className='contact-us d-flex justify-content-between align-items-center'>

                        <div className='cover-icon '><i className='fas fa-phone-alt'></i>
                            <div className='circle'></div>
                        </div>

                        <div className='text-contact'>
                            <h5>Contact Us</h5>
                            <h4>+01 123 456 7890</h4>
                        </div>
                    </div> </div>
                <div className="col-md-3 col-sm-6">
                    <h3>Quick Links</h3>
                    <hr />
                    <ul>
                        <li><Link to={'about us'}>About us</Link></li>
                        <li><Link to={'Services'}>services</Link></li>
                        <li><Link to={'Booking'}>booking</Link></li>
                        <li><Link to={'Faqs'}>faq's</Link></li>
                        <li><Link to={'Blogs'}>blogs</Link></li>
                        <li><Link to={'OurTeam'}>OurTeam</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h3>Our Service</h3>
                    <hr />
                    <ul>
                        <li><Link>Dental Care</Link></li>
                        <li><Link>Cardiac Clinic</Link></li>
                        <li><Link>Massege Therapy</Link></li>
                        <li><Link>Cardiology</Link></li>
                        <li><Link>Precise Diagnosis</Link></li>
                        <li><Link>Abmbulance Services</Link></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 four">
                    <h3>Subcribe</h3>
                    <hr />
                    <input className='email' placeholder='E-mail Address' type="text" />
                    <img className='plus' src={require('../../images/image-31.png')} alt="imogy" />
                    <button className='subscribe'> subscribe now</button>
                    <div className='icons d-flex justify-content-center align-items-center '>
                        <i class="fa-brands mx-3 fa-facebook"></i>
                        <i class="fa-brands mx-3 fa-twitter"></i>
                        <i class="fa-brands mx-3 fa-instagram"></i>
                        <i class="fa-brands mx-3 fa-google"></i>
                    </div>
                </div>

            </div>
            <hr />
            <div className='row Copyright'>
                <h6 >Copyright © 2023 Design & Developed by <span>ThemeTrades</span></h6>
            </div>
        </div>

    </>
}
