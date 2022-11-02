import React from 'react'
import { Link } from 'react-router-dom'
import s from '../scss/Welcome.module.css'

function Dont() {
  return (
    <div className={s.main}>
      <div className={s.main__text}>
        <h1>Te dije que no entres</h1>
      </div>
      <div className={s.main__btns}>
        <Link to='/vuelve/atras'>
          <button className={s.blue}>Recomiendo que no sigas</button>
        </Link>
        <Link to='/'>
          <button className={s.blue}>Vuelve atrás</button>
        </Link>
      </div>
    </div>
  )
}

export default Dont
