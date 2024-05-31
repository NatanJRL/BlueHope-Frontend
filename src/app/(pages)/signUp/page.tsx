'use client'
import React from 'react'
import Button from '@/app/components/Button'
import Input from '@/app/components/Input'
import styles from "./styles.module.css"
import Link from 'next/link'
import Image from 'next/image'

const SignIn = () => {
  return (
    <main className={styles.signUpContainer}>

            <div className={styles.leftSideGroup}>

                <div className={styles.leftSideContainer}>

                    <div className={styles.headerSignUp}>
                        <Link href={"/home"}>
                            <Image src={"/BlueHope-Logo.svg"}
                                width={60}
                                height={60}
                                id='logo'
                                className={styles.logo}
                                alt='Logo da BlueHope'
                            />
                        </Link>
                        <h1>Sign Up</h1>
                    </div>

                    <div className={styles.formSignUp}>
                        <div className={styles.halfInputGroup}>

                            <div className={styles.inputLabelGroup}>
                                <label htmlFor="text">Info:</label>
                                <input type="text" />
                            </div>

                            <div className={styles.inputLabelGroup}>
                                <label htmlFor="text">Info:</label>
                                <input type="text" name="" id="" />
                            </div>

                        </div>

                        <Input
                            label='info:'
                            name='info'
                            id='info'
                            onChange={() => {}}
                            type='text'
                            value={""}
                        />

                        <Input
                            label='info:'
                            name='info'
                            id='info'
                            onChange={() => {}}
                            type='text'
                            value={""}
                        />

                        <Input
                            label='info:'
                            name='info'
                            id='info'
                            onChange={() => {}}
                            type='text'
                            value={""}
                        />

                        <Input
                            label='info:'
                            name='info'
                            id='info'
                            onChange={() => {}}
                            type='text'
                            value={""}
                        />

                        <Input
                            label='info:'
                            name='info'
                            id='info'
                            onChange={() => {}}
                            type='text'
                            value={""}
                        />


                        <div className={styles.signUpButton}>
                            <Button
                                onClick={() => {}}
                                id='signInButton'
                                text='Cadastrar'
                                variant='secondary'
                            />
                        </div>

                    

                    </div>
                </div>

            </div>


        <div className={styles.rightSideGroup}>
            <h1>Plante a esperança conosco</h1>
        </div>
    </main>
  )
}

export default SignIn
