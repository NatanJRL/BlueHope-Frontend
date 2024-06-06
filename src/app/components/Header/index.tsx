'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'

    type Prop = {
        isForHome?: boolean
    }

const Header: React.FC<Prop> = ({
    isForHome  = false
}) => {

    const [scrollY, setScrollY] = useState(0)
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <div className={`${styles.headerContainer} ${isForHome && scrollY > 230 ? styles.scrolled : ''} ${isForHome ? styles.homeHeaderContainer : ''}`}>
                <header className={`${styles.header} ${isForHome && scrollY > 230 ? styles.scrolled : ''} ${isForHome ? styles.homeHeader : ''} `}>


                    <Link href={"/home"}>
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
                                    href={"/login"}>Modelo de IA</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.laterallink}
                                    href={"*"}>Vídeo</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.laterallink}
                                    href={"/about"}>Sobre</Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className={styles.listContainer}>
                        <ul className={styles.linkList}>
                            <li>
                                <Link
                                    className={styles.link}
                                    href={"/login"}>Modelo de IA</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.link}
                                    href={"*"}>Vídeo</Link>
                            </li>
                            <li>
                                <Link
                                    className={styles.link}
                                    href={"/about"}>Sobre</Link>
                            </li>
                        </ul>
                    </nav>

                </header>
            </div>

        </>
    )
}

export default Header