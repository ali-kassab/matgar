import React from 'react'
import '../Blogs/Blogs.css'
import Banner from '../Banner/Banner'
import 'animate.css';
export default function Blogs() {
  return <>

    <Banner title={'Blog'} />


    <section className='blog'>
      <div className='container'>
        <div className="row ">
          <div className='col-md-4  col-sm-6'>
            <div className="itemBlog animate__animated animate__fadeInLeftBig animate__slower">
              <div className='blogImage'><img src={require('../../images/pic1-a3848a1189e2114e1b47.jpg')} alt="doctor" /></div>
              <div className='blogIcon'>

                <span> <img src={require('../../images/image-20.jpeg')} alt="doctor item" />   John deo</span>

                <span>
                  <i class="fa-solid fa-calendar-days"></i> 21 July 2021</span>
              </div>
              <h3 >Dental Care for Women is very important</h3>
              <button className='blogRead'>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="itemBlog animate__animated animate__fadeInLeftBig animate__slower">
              <div className='blogImage'><img src={require('../../images/pic2-67db6c474a828bd7a0cd.jpg')} alt="doctor" /></div>
              <div className='blogIcon'>

                <span> <img src={require('../../images/apple-touch-icon-72x72-precomposed.png')} alt="doctor item" />   Peter Packer</span>

                <span>
                  <i class="fa-solid fa-calendar-days"></i> 20 July 2021</span>
              </div>
              <h3 >Dental Care for Women is very important</h3>
              <button className='blogRead'>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="itemBlog animate__animated animate__fadeInLeftBig animate__slower">
              <div className='blogImage'><img src={require('../../images/pic3-89b8315141d75bd31ced.jpg')} alt="doctor" /></div>
              <div className='blogIcon'>

                <span> <img src={require('../../images/image-22.jpeg')} alt="doctor item" />  Sonar Moyna</span>

                <span>
                  <i class="fa-solid fa-calendar-days"></i> 19 July 2021</span>
              </div>
              <h3 >Dental Care for Women is very important</h3>
              <button className='blogRead'>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div className='col-md-4  col-sm-6'>
            <div className="itemBlog animate__animated animate__fadeInUpBig animate__slower">
              <div className='blogImage'><img src={require('../../images/pic55.44c2a54210474d223a99.jpg')} alt="doctor" /></div>
              <div className='blogIcon'>

                <span> <img src={require('../../images/image-23.jpeg')} alt="doctor item" />Kalina</span>

                <span>
                  <i class="fa-solid fa-calendar-days"></i> 18 July 2021</span>
              </div>
              <h3 >Dental Care for Women is very important</h3>
              <button className='blogRead'>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="itemBlog animate__animated animate__fadeInUpBig animate__slower">
              <div className='blogImage'><img src={require('../../images/pic17.a59ea2da7cc4c0bbd908.jpg')} alt="doctor" /></div>
              <div className='blogIcon'>

                <span> <img src={require('../../images/image-24.jpeg')} alt="doctor item" /> Michel</span>

                <span>
                  <i class="fa-solid fa-calendar-days"></i> 17 July 2021</span>
              </div>
              <h3 >Dental Care for Women is very important</h3>
              <button className='blogRead'>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="itemBlog animate__animated animate__fadeInUpBig animate__slower">
              <div className='blogImage'><img src={require('../../images/pic4-28ea761e88293ca4d821.jpg')} alt="doctor" /></div>
              <div className='blogIcon'>

                <span> <img src={require('../../images/image-25.jpeg')} alt="doctor item" />Peter Packer</span>

                <span>
                  <i class="fa-solid fa-calendar-days"></i> 16 July 2021</span>
              </div>
              <h3 >Dental Care for Women is very important</h3>
              <button className='blogRead'>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div className='col-md-4  col-sm-6'>
            <div className="itemBlog animate__animated animate__fadeInRightBig animate__slower">
              <div className='blogImage'><img src={require('../../images/pic9.9ca3a0422fec87cd6c98.jpg')} alt="doctor" /></div>
              <div className='blogIcon'>

                <span> <img src={require('../../images/image-25.jpeg')} alt="doctor item" />   John deo</span>

                <span>
                  <i class="fa-solid fa-calendar-days"></i> 21 July 2021</span>
              </div>
              <h3 >Dental Care for Women is very important</h3>
              <button className='blogRead'>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="itemBlog animate__animated animate__fadeInRightBig animate__slower">
              <div className='blogImage'><img src={require('../../images/pic1-a3848a1189e2114e1b47.jpg')} alt="doctor" /></div>
              <div className='blogIcon'>

                <span> <img src={require('../../images/image-20.jpeg')} alt="doctor item" />   John deo</span>

                <span>
                  <i class="fa-solid fa-calendar-days"></i> 21 July 2021</span>
              </div>
              <h3 >Dental Care for Women is very important</h3>
              <button className='blogRead'>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="itemBlog animate__animated animate__fadeInRightBig animate__slower">
              <div className='blogImage'><img src={require('../../images/pic7.c1733b79898885a595bd.jpg')} alt="doctor" /></div>
              <div className='blogIcon'>

                <span> <img src={require('../../images/image-20.jpeg')} alt="doctor item" />   John deo</span>

                <span>
                  <i class="fa-solid fa-calendar-days"></i> 21 July 2021</span>
              </div>
              <h3 >Dental Care for Women is very important</h3>
              <button className='blogRead'>Read More <i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
      

        </div>
      </div>
    </section>

  </>
}
