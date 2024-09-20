import React from 'react'
import html from './assets/html.jpg'
import './content.css'
import javascript from './assets/javascript.jpg'

function Content3(props) {
  return (
    <div className={props.value?'maincontent3':'darkmode3'}>

        <div className='box1'>
            <h1 className='heading1'>JAVASCRIPT</h1>
            <p className='paratag'>The language for Programming web pages </p>
            <button className='button1'>Learn JAVASCRIPT</button>
            <br></br>
            <button className='button2'>Video Tutorial</button>
            <br></br>
            <button className='button3'>JAVASCRIPT Reference</button>
            <br></br>
            <button className='button4'>Get Certified</button>
        </div>
        <div className='box2'>
            <h2 >JAVASCRIPT Example</h2>
            <div>
               <img src={javascript}/>
            </div>
        </div>
      
    </div>
  )
}

export default Content3
