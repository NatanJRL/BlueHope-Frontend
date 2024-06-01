'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import Input from '@/app/components/Input'
import Button from '@/app/components/Button'
import Header from '@/app/components/Header'

const Login = () => {
    
  return (
    <main className={styles.wholeContainer}>

        <div className={styles.formLogin}>
        
            <div className={styles.loginTitleContainer}>
                <h1>Login</h1>
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
                    isForLogin
                />
                <Input
                    label='Senha:'
                    type='password'
                    name='password'
                    id='password'
                    onChange={() => {}}
                    value={""}
                    isForLogin
                />
            </div>

            <Button
                onClick={() => {}}
                variant='secondary'
                text='Entrar'
                id={styles.button}
            />
            <p className={styles.signupClickText}>Não tem cadastro? Faça já o seu! <Link className={styles.signupLink} href={"/signUp"}>Clique aqui.</Link></p>
        </div>
        


    </main>
  )
}

export default Login
