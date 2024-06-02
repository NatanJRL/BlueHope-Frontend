'use client'
import React, { useState } from 'react'
import Button from '@/app/components/Button'
import Input from '@/app/components/Input'
import styles from "./styles.module.css"
import Link from 'next/link'

const steps = [
    {
        id: "PERSONAL",
        title: "Dados Pessoais"
    },
    {
        id: "ADDRESS",
        title: "Dados de Endereço"
    }
];

const SignIn = () => {

    const [currentStep, setCurrentStep] = useState(0);

    function handleNext() {
        setCurrentStep((prevState) => prevState + 1);
        console.log(currentStep)
    }
    function handlePrevious() {
        setCurrentStep((prevState) => prevState - 1)
        console.log(currentStep)
    }

    return (
        <main className={styles.signUpContainer}>
            <main className={styles.wholeContainer}>

                <div className={styles.formLogin}>

                    <div className={styles.loginTitleContainer}>
                        <h1>Cadastro</h1>
                        <br />
                        <p style={{ color: "#032D60" }}>{steps[currentStep].title}</p>
                        <br />
                        <p>Faça sua parte com a natureza</p>
                        <p className="step-guide">
                            {currentStep + 1} de {steps.length}
                        </p>
                    </div>

                    <div className={styles.inputLoginContainer}>

                        {steps[currentStep].id === "PERSONAL" && (
                            <>
                                <Input
                                    label='Nome:'
                                    type='text'
                                    name='email'
                                    id=""
                                    onChange={() => { }}
                                    value={""}
                                />
                                <Input
                                    label='Email:'
                                    type='email'
                                    name='email'
                                    id=""
                                    onChange={() => { }}
                                    value={""}
                                />
                                <Input
                                    label='Senha:'
                                    type='password'
                                    name='password'
                                    id=""
                                    onChange={() => { }}
                                    value={""}
                                />
                                <Input
                                    label='Telefone:'
                                    type='phone'
                                    name='phone'
                                    id=""
                                    onChange={() => { }}
                                    value={""}
                                />
                            </>

                        )}
                        {steps[currentStep].id === "ADDRESS" && (
                            <>
                            
                                <div className={styles.registerInputContainer}>
                                    <Input
                                        label='CEP:'
                                        type='text'
                                        name='cep'
                                        id={styles.inputRegister}
                                        onChange={() => { }}
                                        value={""}
                                    />
                                    <Input
                                        label='Rua:'
                                        type='text'
                                        name='rua'
                                        id={styles.inputRegister}
                                        onChange={() => { }}
                                        value={""}
                                    />
                                </div>
                                <div className={styles.registerInputContainer}>
                                    <Input
                                        label='Bairro:'
                                        type='text'
                                        name='bairro'
                                        id={styles.inputRegister}
                                        onChange={() => { }}
                                        value={""}
                                    />
                                    <Input
                                        label='Número:'
                                        type='text'
                                        name='numero'
                                        id={styles.inputRegister}
                                        onChange={() => { }}
                                        value={""}
                                    />
                                </div>

                                <div className={styles.registerInputContainer}>
                                    <Input
                                        label='Cidade:'
                                        type='text'
                                        name='cidade'
                                        id={styles.inputRegister}
                                        onChange={() => { }}
                                        value={""}
                                    />
                                    <Input
                                        label='Estado:'
                                        type='text'
                                        name='estado'
                                        id={styles.inputRegister}
                                        onChange={() => { }}
                                        value={""}
                                    />
                                </div>
                            </>

                        )}

                    </div>

                    {currentStep == 0 ? (

                        <Button
                            onClick={handleNext}
                            variant='secondary'
                            text='Avançar'
                            id={styles.button}
                        />
                    ) : (

                        <div className={styles.buttonContainer}>
                            <Button
                                onClick={handlePrevious}
                                variant='primary'
                                text='Voltar'
                                id={styles.button}
                            />
                            <Button
                                onClick={() => { console.log(currentStep) }}
                                variant='secondary'
                                text='Enviar'
                                id={styles.button}
                            />
                        </div>


                    )}
                    <div className={styles.buttonContainer}>




                    </div>

                    <p className={styles.signupClickText}>Não tem cadastro? Faça já o seu! <Link className={styles.signupLink} href={"/signUp"}>Clique aqui.</Link></p>
                </div>



            </main>
        </main>
    )
}

export default SignIn
