import React from 'react';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  <div className='container'>
    <Routes>  {/* Changed from <switch> to <Routes> */}
      <Route path='/' element={<Home />} />  {/* Use 'element' instead of 'component' */}
      <Route path='/blog/:id' element={<Blog />} />  {/* Use 'element' instead of 'component' */}
    </Routes>
  </div>
);

export default App;

