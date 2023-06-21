import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from './components/Navbar'
import { Profile } from './components/Profile';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Footer} from './components/Footer';
function App() {
 

  return (
    <div className='App'>
      <NavBar/>
     <Profile/>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  );
}

export default App;
