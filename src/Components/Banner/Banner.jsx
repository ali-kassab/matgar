import React from 'react'
import '../Banner/Banner.css'
import 'animate.css';
export default function Banner(props) {
    return <>

        <div className='Banner'>
        <div ><img src={require('../../images/image-11.png')} alt="imogy" /></div>
            <div className='overlay'>
                <h2 className='animate__animated  animate__backInLeft animate__slow 2s' >{props.title}</h2>
                <div className='animate__animated  animate__backInRight animate__slow 2s'>
                    <button >
                        <i class="fa-solid fa-house mx-2"></i> Home / {props.title} </button>
                </div>
                <div className='imageplus'><img  src={require('../../images/image-31.png')} alt="imogy" />
                </div>
            </div>
        </div>
    </>
}
