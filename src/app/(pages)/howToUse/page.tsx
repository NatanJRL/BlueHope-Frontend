import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import ImageText from '@/app/components/ImageText'
import TextImageButton from '@/app/components/TextImageButton'
import BlueHopeLogo from "../../../../public/BlueHope-Logo.svg"

const comoUsar = () => {
  return (
    <div>
        <Header/>

            <div className={styles.wholePage}>

                <div className={styles.howToUseGroup}>

                    <div className={styles.textBox}>
                        
                        <h1>Como o modelo de IA funciona?</h1>

                        <p>O modelo de IA que desenvolvemos é capaz de prever a qualidade da água com base em informações estatísticas do uso de plástico em diversos países.</p>

                    </div>

                    <ImageText
                        text='Para utilizá-lo, basta entrar na página do modelo, e clicar em algum país presente no mapa, o que irá o selecionar com o marcador'
                        path='/map1.svg'
                        width={10000}
                        height={10000}
                        
                    />

                    <div>
                        
                        <ImageText
                            text='Aguarde um pouco o aparecimento do marcador, e em seguida, clique nele para que as informações fornecidas por nossa API sejam exibidas no mapa:'
                            path='/map2.svg'
                            width={10000}
                            height={10000}
                            variant='imageText'
                        />

                        <div className={styles.textBox}>
                            <h1><strong>Atenção!</strong></h1>
                            <p><strong>O primeiro clique efetuado pode demorar um pouco para exibir o marcador.</strong></p>
                        </div>

                    </div>

                    <div className={styles.textBox}>

                        <h1>Venha conosco</h1>
                        <p>Apesar de simples, os modelos de IA que desenvolvemos podem ser importantes ferramentas no combate a poluição marítma, garantindo a qualidade da água e principalmente, a longevidade do planeta Terra.</p>
                    
                    </div>


                    <TextImageButton text='Venha conosco e faça parte da luta pela esperança' image={BlueHopeLogo} buttonText='Faça o Teste Grátis' buttonVariant='secondary' altImage='Logo da BlueHope' />
                
                </div>

            </div>

        <Footer/>
    </div>
  )
}

export default comoUsar
