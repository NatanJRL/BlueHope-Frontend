import React from 'react'
import styles from './styles.module.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'


const apiShowcase = () => {
  return (
    <div>

        <Header/>

        
            <div className={styles.content}>

                <h1>IA</h1>

                <h3>Apenas com um clique seja capaz de descobrir a qualidade da agua</h3>

                <div className={styles.mapBox}>
                    <div className={styles.map}>
                    <iframe  src="map.html" width="100%" height="100%"></iframe>
                    </div>
                </div>

            </div>

        <Footer/>

    </div>
  )
}

export default apiShowcase
