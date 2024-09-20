
import './App.css';
import Login from './Login';
import Mainpage from './Mainpage';
import Navbar from './Navbar';
import Signup from './Signup';
import Content from './Content';
import Content2 from './Content2';
import Content3 from './Content3';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<Mainpage />}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path='/css'element={<Content2 />}/>
       </Routes>
       {/* <Navbar />
       <Content />
     <Content2/>
     <Content3/> */}

      
    </div>
  );
}

export default App;
