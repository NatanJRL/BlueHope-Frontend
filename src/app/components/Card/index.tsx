import React from 'react'
import Image from 'next/image'
import styles from '@/app/components/Card/styles.module.css'

type Props = {
    path: string,
    text: string
}

const Card: React.FC<Props> = ({path, text}) => {
  return (
    <div className={styles.cardGroup}>

      <div className={styles.card}>
        <Image className={styles.cardImage}
          src={path}
          width={100}
          height={100}
          alt='Icon'
        />

        <h2 className={styles.cardText}>{text}</h2>

      </div>

    </div>
  )
}

export default Card
