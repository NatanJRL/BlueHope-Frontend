"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const steps = [
  {
    id: "PERSONAL",
    title: "Dados Pessoais",
  },
  {
    id: "ADDRESS",
    title: "Dados de Endereço",
  },
];

const SignIn = () => {
  /* STATES */
  const [signup, setSignup] = useState({
    nome: "",
    email: "",
    senha: "",
    phone: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: "",
    cidade: "",
    estado: "",
  });
  const [error, setError] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  /* VIACEP */

  /* STEPS */
  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
    console.log(currentStep);
  }
  function handlePrevious() {
    setCurrentStep((prevState) => prevState - 1);
    console.log(currentStep);
  }

  /* PEGA DADO */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleCepFocus = async (e: React.FocusEvent<HTMLInputElement>) => {
    try {
      const url = "http://localhost:8081/viacep";
      const value = e.target.value;

      const response = await axios.post(url, {
        cep: value,
      });

      const data = response.data;

      setSignup((prevSignup) => ({
        ...prevSignup,
        bairro: data.bairro,
        cidade: data.cidade,
        estado: data.estado,
        rua: data.rua,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const submitRegister = async () => {
    try {
      const url = "http://localhost:8081/auth/signup";
      const response = await axios.post(url, {
        nome: signup.nome,
        email: signup.email,
        senha: signup.senha,
        telefone: signup.phone,
        enderecos: [
          {
            bairro: signup.bairro,
            cep: signup.cep,
            localidade: signup.cidade,
            logradouro: signup.rua,
            numero: signup.numero,
            uf: signup.estado,
          },
        ],
      });

      console.log(response.data);

      setError("");
    } catch (error) {
      console.log(error);
    }
  };

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
                  label="Nome:"
                  type="text"
                  name="nome"
                  id=""
                  onChange={handleChange}
                  value={signup.nome}
                />
                <Input
                  label="Email:"
                  type="email"
                  name="email"
                  id=""
                  onChange={handleChange}
                  value={signup.email}
                />
                <Input
                  label="Senha:"
                  type="password"
                  name="senha"
                  id=""
                  onChange={handleChange}
                  value={signup.senha}
                />
                <Input
                  label="Telefone:"
                  type="phone"
                  name="phone"
                  id=""
                  onChange={handleChange}
                  value={signup.phone}
                />
              </>
            )}
            {steps[currentStep].id === "ADDRESS" && (
              <>
                <div className={styles.registerInputContainer}>
                  <Input
                    label="CEP:"
                    type="text"
                    name="cep"
                    id={styles.inputRegister}
                    onChange={handleChange}
                    value={signup.cep}
                    onBlur={handleCepFocus}
                  />
                  <Input
                    label="Rua:"
                    type="text"
                    name="rua"
                    id={styles.inputRegister}
                    onChange={handleChange}
                    value={signup.rua}
                  />
                </div>
                <div className={styles.registerInputContainer}>
                  <Input
                    label="Bairro:"
                    type="text"
                    name="bairro"
                    id={styles.inputRegister}
                    onChange={handleChange}
                    value={signup.bairro}
                  />
                  <Input
                    label="Número:"
                    type="text"
                    name="numero"
                    id={styles.inputRegister}
                    onChange={handleChange}
                    value={signup.numero}
                  />
                </div>

                <div className={styles.registerInputContainer}>
                  <Input
                    label="Cidade:"
                    type="text"
                    name="cidade"
                    id={styles.inputRegister}
                    onChange={handleChange}
                    value={signup.cidade}
                  />
                  <Input
                    label="Estado:"
                    type="text"
                    name="estado"
                    id={styles.inputRegister}
                    onChange={handleChange}
                    value={signup.estado}
                  />
                </div>
              </>
            )}
          </div>

          {currentStep == 0 ? (
            <Button
              onClick={handleNext}
              variant="secondary"
              text="Avançar"
              id={styles.button}
            />
          ) : (
            <div className={styles.buttonContainer}>
              <Button
                onClick={handlePrevious}
                variant="primary"
                text="Voltar"
                id={styles.button}
              />
              <Button
                onClick={submitRegister}
                variant="secondary"
                text="Enviar"
                id={styles.button}
              />
            </div>
          )}
          <div className={styles.buttonContainer}></div>

          <p className={styles.signupClickText}>
            Não tem cadastro? Faça já o seu!{" "}
            <Link className={styles.signupLink} href={"/signUp"}>
              Clique aqui.
            </Link>
          </p>
        </div>
      </main>
    </main>
  );
};

export default SignIn;
