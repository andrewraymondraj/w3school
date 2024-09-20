import React, { useState } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Content2 from './Content2'
import Content3 from './Content3'
// import List from './List'

const Mainpage = () => {
  const [bgclr,newbglclr] = useState(true)
  return (
    <div>
        < Navbar value={bgclr} newvalue={newbglclr} />
        <Content  value={bgclr} />
        {/* <Content2 value={bgclr}/>
        <Content3 value={bgclr}/> */}
       
      
    </div>
  )
}

export default Mainpage
