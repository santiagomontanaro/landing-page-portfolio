import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import s from '../scss/Jump.module.css'

function Jump() {

  //jumpscare when the page is loaded;
  useEffect(() => {
    //play sound effect when the page is loaded
    const audio = new Audio('https://www.myinstants.com/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3');
    audio.play();
    // adjust the volume of the sound effect to 0.5
    audio.volume = 0.1;
  }, []);

  return (
    <div>
      <div className={s.main} id='jump'></div>
      <div className={s.text}>
        <h1>Te avisé</h1>
        <Link to='/'>
          <button className={s.button}>Volver</button>
        </Link>
      </div>
    </div>
  )
}

export default Jump