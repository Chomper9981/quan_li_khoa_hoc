import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import About from './components/About';
import CourseApp from './components/CourseApp';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<CourseApp />}/>
          <Route path='/about' element ={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
