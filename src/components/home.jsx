/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import '../main.scss'

const Home = () => {
  const [rotate, setRotate] = useState('initial')
  const clearEffect = () => {
    setRotate('back')
  }
  return (
    <div
      className={rotate}
      onClick={(e) => {
        e.preventDefault()
        setRotate('rotate')
        setTimeout(() => {
          clearEffect()
        }, 4000)
      }}
    >
      Boilerplate
    </div>
  )
}

export default Home
