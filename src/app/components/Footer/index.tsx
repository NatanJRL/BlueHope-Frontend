import React from 'react'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footerGroup}>

        <div>
            <h2>1TDSPA</h2>
        </div>

        <div>

            <details>
                <summary>Pedro Lucca RM553873  <strong>⤵</strong></summary>
                ➲ <a href='https://github.com/GNoverHir'>GitHub/PedroMiranda</a>
            </details>

            <details>
                <summary>Pedro Moreira de Jesus RM553912 <strong>⤵</strong></summary>
                ➲ <a href='https://github.com/NatanJRL'>GitHub/PedroJesus</a>
            </details>

            <details>
                <summary>Natan Junior Rodrigues Lopes RM552626  <strong>⤵</strong></summary>
                ➲ <a href='https://github.com/QueijoQualho'>GitHub/NatanLopes</a>
            </details>

        </div>

    </footer>



  )
}

export default Footer
