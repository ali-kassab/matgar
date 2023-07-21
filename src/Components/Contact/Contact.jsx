import React, { useEffect } from 'react'
import '../Contact/Contact.css'
import Banner from '../Banner/Banner'
import { useFormik } from 'formik'
import axios from 'axios'
import 'animate.css';


export default function Contact() {



  async function regestration(obj) {
    
    
    
    try {

      let res = await axios.postForm('https://metalloid-clerk.000webhostapp.com/register',obj);
      console.log(res);

    } catch (error) {
      console.log('from resgest ', error);
    }

  }


  const formik = useFormik({

    initialValues: {

      name: '',
      email: '',
      password: '',

    },
    onSubmit: function (values) {
      regestration(values)

    },
    // validate: function (values) {

    //   let errors = {};
    //   if (values.name.length < 3) { errors.name = 'Name must be more than 3' }

    //   if (!values.email.match(/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)) { errors.email = 'email must be valid...' }

    //   if (values.password.length < 6 || values.password.length > 8) {
    //     errors.password = 'password must be between 6-8 charcter'
    //   }

    //   return errors;
    // }

  })


  return <>
    <section  >

      <div className='position-relative' ><Banner title={'contact us'} /></div>

      <div className='background'>
        <div className="container">


          <div className='contactform d-flex justify-content-center align-items-center'>

            <div className="row py-4">
              <div className="col-md-6 col-sm-12">
                <div className=" form animate__animated animate__fadeInDownBig">

                  <form onSubmit={formik.handleSubmit} >
                    <input className='form-control my-3' value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} id='name' placeholder='Name' type="text" />
                    {formik.errors.name && formik.touched.name ? <div className="alert alert-danger" role="alert">{formik.errors.name}</div> : ""}

      
                    <input className='form-control my-3' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} id='email' placeholder='E-mail' type="email" />
                    {formik.errors.email && formik.touched.email ? <div className="alert alert-danger" role="alert">{formik.errors.email}</div> : ""}

                    <input className='form-control my-3' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} id='password' placeholder='Password' type="password" />
                    {formik.errors.password && formik.touched.password ? <div className="alert alert-danger" role="alert">{formik.errors.password}</div> : ""}
                    <div><button type=' submit my-5'>Submit</button></div>

                  </form>

                </div>
              </div>


              <div className="col-md-6 col-sm-12">
                <div className="animate__animated side animate__fadeInUpBig ">
                  <div className='overlay py-5'>
                    <div className='textbox'>
                      <h3>Contact Us For Any Informations</h3>
                      <h5><i class="fa-solid fa-map-location mx-2 mt-2"></i> Location</h5>
                      <hr />
                      <h6 className='mx-2 '>2005 Stokes Isle Apt. 896, Venaville 10010, USA</h6>

                      <h5> <i class="fa-solid fa-id-badge mx-2 mt-4"></i> Email & Phone</h5>
                      <hr />
                      <a className='mx-2' href="">info@yourdomain.com</a>
                      <p className='mx-2'>(+68) 120034509 </p>

                      <h5 className='mx-3 mt-5 '>Follow Us</h5>
                      <div className='icons d-flex justify-content-center align-items-center '>
                        <i class="fa-brands mx-3 fa-facebook"></i>
                        <i class="fa-brands mx-3 fa-twitter"></i>
                        <i class="fa-brands mx-3 fa-instagram"></i>
                        <i class="fa-brands mx-3 fa-google"></i>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>




  </>
}
