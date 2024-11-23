import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from '../Header/Header';
import Main from '../Main/Main';

export default function App() {


  return (
    <div className='app'>
      <div className='app__wrapper'>
        <Header />
        <Main />
      </div>
    </div>
  )
}
