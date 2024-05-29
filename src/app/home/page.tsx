import React from 'react'
import Header from '../components/Header'
import styles from './styles.module.css'
import Image from 'next/image'


const Home = () => {
  return (
    <>
      <Header />

      

      <div className={styles.videoContainer}>

        <div className={styles.titleContainer}>
          <h1>A ESPERANÇA É AZUL OCEANO</h1>
        </div>

        <video className={styles.video} width="100%" preload='true' autoPlay loop muted playsInline>
          <source src="/ocean.mp4" type="video/mp4"/>
        </video>
      </div>


      <div className={styles.break}></div>

      <div className={styles.textImageContainer}>
        <h3>
          Lorem ipsum dolorlorum fugit fugiat quidem, alias praesentium laudantium commodi, dolore obcaecati natus excepturi consequuntur doloremque, quia porro repellat. Provident odit modi commodi a.
        </h3>

        <Image className={styles.fishImage}
              src={"/plastic_fish.jpg"}
              width={10000}
              height={10000}
              alt='Imagem'
        ></Image>
      </div>

      <div className={styles.break}></div>

    </>
  )
}

export default Home