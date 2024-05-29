import React from 'react'
import Header from '../components/Header'
import styles from './styles.module.css'

const Home = () => {
  return (
    <>
      <Header />

      

      <div className={styles.videoContainer}>

        <div className={styles.titleContainer}>
          <h1>NOS AJUDE A SALVAR O MUNDO</h1>
        </div>

        <video className={styles.video} width="100%" preload='true' autoPlay loop muted playsInline>
          <source src="/ocean.mp4" type="video/mp4"/>
        </video>
      </div>


      <div className={styles.break}></div>


    </>
  )
}

export default Home