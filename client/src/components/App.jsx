import React, { useState } from 'react'
import axios from 'axios'
import bull from '../img/bull.png'
import '../styles/main.css'

const App = () => {
  const [rotate, setRotate] = useState('initial')

  const serverButton = async () => {
    await axios.get('http://localhost:8080/api/v1/')
  }

  const clearEffect = () => {
    serverButton()
    setRotate('back')
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={rotate}
      onClick={(e) => {
        e.preventDefault()
        setRotate('rotate')
        setTimeout(() => {
          clearEffect()
        }, 4000)
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          setRotate('rotate')
        }
        setTimeout(() => {
          clearEffect()
        }, 4000)
      }}
    >
      Boilerplate
      <img src={bull} alt="bull_logo" />
    </div>
  )
}

export default App
