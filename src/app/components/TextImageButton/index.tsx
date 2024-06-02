'use client'

import './style.css'
import Button from '../Button'
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css'

type TextImageButtonProps = {
    text?: string;
    image?: string;
    altImage?: string;
    buttonVariant: "primary" | "secondary";
    buttonText: string;

}

const TextImageButton = ({ text, image, altImage, buttonVariant, buttonText }: TextImageButtonProps) => {
    return (
        <section className={styles.section}>
            <div className={styles.TextImageButton}>
                <div className={styles.textButton}>
                    <h2>{text}</h2>


                    <Link id='link' href={"/pages/cadastro"}>
                        <Button id='button-below-text' variant={buttonVariant} text={buttonText} onClick={() => { }} />
                    </Link>
                </div>

                <div className='image-button'>
                    <Image src={image ?? ''} alt={altImage ?? ''} />


                    <Link id='link' href={"/pages/cadastro"}>
                        <Button id='button-below-image' variant={buttonVariant} text={buttonText} onClick={() => { }} />
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default TextImageButton