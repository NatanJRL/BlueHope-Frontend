import React from 'react'
import Header from '@/app/components/Header'
import styles from './styles.module.css'
import Image from 'next/image'
import oceanBottle from '../../../../public/oceanBottle.svg'
import TextImageButton from '@/app/components/TextImageButton'
import BlueHopeLogo from "../../../../public/BlueHope-Logo.svg"
import Footer from '@/app/components/Footer'


const About = () => {
  return (
    <div>
      <Header />

      <div className={styles.wholeAboutPage}>
          
        <div className={styles.aboutContainer}>

          <div className={styles.textImageBox}>

            <div className={styles.textBox}>

              <h1>Quem é a <span>Blue<strong>Hope?</strong></span></h1>
              <p>A BlueHope é uma iniciativa criada com o propósito de desenvolver uma solução capaz de auxiliar no combate contra a agressão aos oceanos, provocada pelo lixo e principalmente pelo plástico despejado em nossos oceanos.</p>

            </div>

            <Image className={styles.bottleImage}
              src={oceanBottle}
              width={1000}
              height={1000}
              alt='Ocean Bottle image'
            />

          </div>

          <div className={styles.textBox}>

            <h1>O que fazemos?</h1>
            <p>A BlueHope foca seus esforços no desenvolvimento de tecnologias capazes de reconhecer e mapear lixo despejado nos oceanos, utilizando inteligência artificial. </p>
            <p>Apesar de simples, os modelos de IA que desenvolvemos podem ser importantes ferramentas no combate a poluição marítma, garantindo a qualidade da água e principalmente, a longevidade do planeta Terra.</p>

          </div>
          



        </div>


      </div>
      <TextImageButton text='Venha conosco e faça parte da luta pela esperança' image={BlueHopeLogo} buttonText='Faça o Teste Grátis' buttonVariant='secondary' altImage='Logo da BlueHope' />
      <Footer />

    </div>
  )
}

export default About