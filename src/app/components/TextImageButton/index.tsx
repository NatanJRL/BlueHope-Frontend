'use client'
import styles from './styles.module.css'
import Button from '../Button'
import Link from 'next/link';
import Image from 'next/image';

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
                <div className={styles.TextButton}>
                    <h2>{text}</h2>


                    <Link id={styles.Link} href={"/pages/signUp"}>
                        <Button id={styles.ButtonBelowText} variant={buttonVariant} text={buttonText} onClick={() => { }} />
                    </Link>
                </div>

                <div className={styles.ImageButton}>
                    <Image src={image ?? ''} alt={altImage ?? ''} />


                    <Link id={styles.Link} href={"/pages/signUp"}>
                        <Button id={styles.ButtonBelowImage} variant={buttonVariant} text={buttonText} onClick={() => { }} />
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default TextImageButton