import React from 'react'
import '../LoadingScreen/Loading.css'
export default function Loading() {

  let loader = document.querySelector('.loader')

  window.addEventListener('load', function () {
    loader.style.display = 'none';
  })
  return <>
    <div class="loader"></div>

  </>
}
