'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

const Header = () => {

    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    return (
        <>
            <div className={styles.headerContainer}>
                <header className={styles.header}>


                    <Link href={"*"}>
                        <Image src={"/BlueHope-Logo.svg"}
                            width={60}
                            height={60}
                            id='logo'
                            className={styles.logo}
                            alt='Logo da BlueHope'
                        />
                    </Link>

                    <div onClick={toggleMenu} className={styles.mobileMenu}>
                        <div className={styles.menuLine}></div>
                        <div className={styles.menuLine}></div>
                        <div className={styles.menuLine}></div>
                    </div>

                    <nav style={{
                        transform: `${menuActive ? "translateX(10%)" : "translateX(1000%)"
                            }`,
                    }} className={styles.lateralListContainer}>
                        <ul className={styles.laterallinkList}>
                            <li>
                                <Link
                                    className={styles.laterallink}
                                    href={"*"}>Como usar</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.laterallink}
                                    href={"*"}>Vídeo</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.laterallink}
                                    href={"*"}>Sobre</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className={styles.listContainer}>
                        <ul className={styles.linkList}>
                            <li>
                                <Link
                                    className={styles.link}
                                    href={"*"}>Como usar</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.link}
                                    href={"*"}>Vídeo</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.link}
                                    href={"*"}>Sobre</Link>
                            </li>
                        </ul>
                    </nav>

                </header>
            </div>

        </>
    )
}

export default Header