import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

type Props= {
    text: string,
    path: string,
    width: number,
    height: number,
    variant?: 'imageText' | 'textImage';

}


const ImageText: React.FC<Props> = ({text, path, width, height, variant}) => {
  return (
    <div className={variant === "imageText" ?  styles.imageText : styles.textImage }>
    
        <p>{text}</p>

        <Image className={styles.mapImage}
            src={path}
            width={width}
            height={height}
            alt='image'
        />

    </div>
  )
}

export default ImageText
