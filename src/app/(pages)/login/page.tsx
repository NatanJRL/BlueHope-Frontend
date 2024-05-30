'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import Input from '@/app/components/Input'
import Button from '@/app/components/Button'

const Login = () => {
    
  return (
    <main className={styles.wholeContainer}>
        <Link href={"/home"}>
            <Image src={"/BlueHope-Logo.svg"}
                width={100}
                height={100}
                id='logo'
                className={styles.logoLogin}
                alt='Logo da BlueHope'
            />
        </Link>

        <div className={styles.loginTitleContainer}>
            <h1>LOGIN</h1>
            <br/>
            <p>Faça sua parte com a natureza</p>
        </div>

        <div className={styles.inputLoginContainer}>
            <Input
                label='Email:'
                type='email'
                name='email'
                id='email'
                onChange={() => {}}
                value={""}
            />
            <Input
                label='Senha:'
                type='password'
                name='password'
                id='password'
                onChange={() => {}}
                value={""}
            />
        </div>

        <Button
            onClick={() => {}}
            variant='secondary'
            text='Entrar'
        />

        <p className={styles.signupClickText}>Não tem cadastro? Faça já o seu! <Link className={styles.signupLink} href={"*"}>Clique aqui.</Link></p>


    </main>
  )
}

export default Login
