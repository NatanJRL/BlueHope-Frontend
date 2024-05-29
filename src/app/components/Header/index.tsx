import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

const Header = () => {



    return (
        <>
            <div className={styles.headerContainer}>
                <header className={styles.header}>

                    <Link href={"*"}>
                        <Image src={"/Blue_Hope_Logo.png"}
                            width={100}
                            height={100}
                            alt='Logo da BlueHope'
                        ></Image>
                    </Link>

                    

                    <nav >
                        <ul className={styles.linkList}>
                            <li>
                                <Link
                                    className={styles.link}
                                    href={"&"}>Como usar</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.link}
                                    href={"&"}>Vídeo</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.link}
                                    href={"&"}>Sobre</Link>
                            </li>
                        </ul>
                    </nav>

                </header>
            </div>

        </>

    )
}

export default Header