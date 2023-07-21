import React from 'react'
import '../Booking/Booking.css'
import Banner from '../Banner/Banner'
export default function Booking() {
  return <>
    <section><Banner title={'Booking'} /></section>
    <section>
      <div className='container bigbook'>
        <div className="booking">
          <h2>Book Appointment</h2>
          <div className='my-3'><select className='form-select form-control' name="department" placeholder='select Department' >
            <option>select Department</option>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select></div>
          <div className='my-3'><select className='form-select form-control' name="department" placeholder='select Doctor' >
            <option>select Doctor</option>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select></div>
          <input placeholder='Name' type="text" className='form-control my-3' />
          <input placeholder='Phone' type="number" className='form-control my-3' />
          <input type="date" className='form-control my-3' />

          <button>Appointment Now</button>


        </div>
      </div>
    </section>

  </>
}
