import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from './components/About';
import CourseApp from './components/CourseApp';
import CourseItemDetail from './components/CourseItemDetail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<CourseApp />}/>
          <Route path='/about' element ={<About />}/>
          <Route path='/:id' element ={<CourseItemDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
