import React from 'react'
import html from './assets/html.jpg'
import './content.css'
import css from'./assets/css.jpg'

function Content2(props) {
  return (
    <div className={props.value?'maincontent2':'darkmode2'} id='css'>
        <div className='box1'>
            <h1 className='heading1'>CSS</h1>
            <p className='paratag'>The language for Styling web pages </p>
            <button className='button1'>Learn CSS</button>
            <br></br>
            <button className='button2'>CSS Reference</button>
            <br></br>
            <button className='button3'>Get Certified</button>
            <br></br>
            
        </div>
        <div className='box3'>
            <h2>CSS Example</h2>
            <div>
               <img src={css}/>
            </div>
        </div>
      
    </div>
  )
}

export default Content2
