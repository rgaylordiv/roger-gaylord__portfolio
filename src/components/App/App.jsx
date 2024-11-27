import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Header/Header';
import Main from '../Main/Main';
import AboutMe from '../AboutMe/AboutMe';
import MySkills from '../MySkills/MySkills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

export default function App() {


  return (
    <div className='app'>
      <div className='app__wrapper'>
        <Header />
        <Main />
        <AboutMe />
        <MySkills />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
