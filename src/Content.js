import React, { useEffect } from 'react'
import html from './assets/html.jpg'
import './content.css'
import css from'./assets/css.jpg'
import javascript from './assets/javascript.jpg'

function Content(props) {
  // useEffect(()=>{
  //   return{
  //     props.bgclr
  //   }
  // })
  return (
    <div>
<div className={props.value?'maincontentlight':'darkmode1'} id='html'>

<div className='box1'>
    <h1 className='heading1'>HTML</h1>
    <p className='paratag'>The language for building web pages </p>
    <button className='button1'>Learn HTML</button>
    <br></br>
    <button className='button2'>Video Tutorial</button>
    <br></br>
    <button className='button3'>HTML Reference</button>
    <br></br>
    <button className='button4'>Get Certified</button>
</div>
<div className='box2'>
    <h2 >HTML Example</h2>
    <div>
       <img src={html}/>
       
    </div>
</div>

</div>




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


    <div className={props.value?'maincontent3':'darkmode3'}>

        <div className='box1'>
            <h1 className='heading1'>JAVASCRIPT</h1>
            <p className='paratag'>The language for Programming web pages </p>
            <button className='button1'>Learn JAVASCRIPT</button>
            <br></br>
            <button className='button2'>Video Tutorial</button>
            <br></br>
            <button className='button3'>JS Reference</button>
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





    </div>
    
    
  )
}

export default Content
