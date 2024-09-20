import React, { useState } from 'react'
import logo from './assets/logo.jpeg'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import Content from './Content'
import Content2 from './Content2'
import Content3 from './Content3'
import left from './assets/left.jpg'
function Navbar(props) {
  const [state,setState]=useState(["JAVA","HTML","CSS","JAVASCRIPT","SQL","REACT","ANGULAR","PYTHON","PHP","C","C++","C#","BOOTSTRAP","MYSQL","JQUERY","DJANGO","MANGODB","DSA"])


  const[search,setSearch]=useState("")
  const [status,setstatus] = useState(false)
  const [resbox,newresbox] = useState(false)
  const value=" "


  const filtersearch=(
    state.filter((value)=>value.toLowerCase().includes(search.toLowerCase()))
  )

  const showresult=()=>{
    setstatus(!status)
  }
  const hideresult=()=>{
    setInterval(()=>{
      setstatus(!status)

  },2000)
    
  }


  const showbox=()=>{
    newresbox(false) 
  
  }
  const hidebox=()=>{
    setInterval(()=>{
      newresbox(false)
      setstatus(false)


  },5000)
  }

  // const [bgclr,newbglclr] = useState(true)
  const changebgclr=()=>{
  props.newvalue(!props.value);
  background()

 
}
const background=()=>{
  if(props.value == true){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "black"
  }
  else{
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
   
}

  // const selectedval=()=>{
  //   alert(`You Selected ${value}`)
  // }

 
  return (
    <div>
        
        <div className={props.value?'mainnavbar':'mainnavbar1'}>
              <div className='nav1'>
                 <img className='logo' src={logo}/>
                 <h2 className='heading'>Learn to code</h2>
                 <p>Tutorials</p>
                 <p>Exercises</p>
                 <p>Certificates</p>
                 <p>Services</p>
               </div>

               <div className='nextnav'> 
                  <input className='searchbar' type='text' placeholder='search....' onChange={(e)=>setSearch(e.target.value)} onClick={()=>showresult()}  />
                  <FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass} />
               </div>
               <div className='darkmode' onClick={()=>changebgclr()}>
                       <FontAwesomeIcon icon={faCircleHalfStroke} />
               </div>

               <div className=' buttons'>
                <NavLink to='/Signup'>
                    <button  className='signup'>Sign Up</button>
                </NavLink>
                 <NavLink to='/Login'>
                 <button className='login'>Log in</button>
                 </NavLink>
                 
               </div>
       </div>
            <div >
              {status || resbox ? 
              <div className='filtersearch'onMouseOver={()=>showbox()} onMouseLeave={()=>hidebox()} >
                    {filtersearch.map((value)=><h5 onClick={()=>alert(`You Selected ${value}`)} >{value}</h5>)}
                 </div> 
                 :""}
               {/* {resbox ? 
              <div className='filtersearch' onMouseOver={()=>showbox()} onMouseOut={()=>hidebox()}>
                    {filtersearch.map((value)=><h4 onClick={()=>alert(`You Selected ${value}`)} >{value}</h4>)}
                 </div> 
                 :""} */}
                    
            </div>
            
            <div className={props.value?'scrolllight':'scrolldark'}>
              {/* <FontAwesomeIcon icon={faArrowLeft} /> */}
                  <h4>HTML</h4>
                  <h4> CSS</h4>
                  <h4>JAVASCRIPT</h4>
                  <h4>SQL</h4>
                  <h4>PYTHON</h4>
                  <h4>JAVA</h4>
                  <h4>PHP</h4>
                  <h4>C</h4>
                  <h4>C++</h4>
                  <h4>C#</h4>
                  <h4>BOOTSTRAP</h4>
                  <h4>REACT</h4>
                  <h4>MYQSQL</h4>
                  <h4>JQUERY</h4>
                  <h4>EXCEL</h4>
                  <h4>XML</h4>
                  <h4>DJANGO</h4>
                  <h4>NUMPY</h4>
                  <h4>PANDAS</h4>
                  <h4>NODEJS</h4>
                  <h4>R</h4>
                  <h4>TYPESCRIPT</h4>
                  <h4>ANGULAR</h4>
                  <h4>GIT</h4>
                  <h4>MANGODB</h4>
                  <h4>ASP</h4>
    </div>
    <hr></hr>
           {/* <Content value={bgclr} />  
           <Content value={bgclr} />
           <Content2 />
           <Content3 /> */}

    </div>
 
  )
}

export default Navbar

