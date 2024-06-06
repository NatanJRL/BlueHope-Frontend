"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import styles from "./styles.module.css";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    senha: "",
  });

  const router = useRouter(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors: { email: string; senha: string } = { email: "", senha: "" };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(login.email)) {
      errors.email = "Email inválido";
    }

    if (login.senha.length < 6) {
      errors.senha = "Senha deve ter no mínimo 6 caracteres";
    }

    setValidationErrors(errors);

    return !errors.email && !errors.senha;
  };

  const submitRequest = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (!captcha) {
      return setError("reCAPTCHA inválido");
    }

    try {
      const url = "https://ba9c-2804-14d-32a7-496f-d983-5694-bf26-e1ac.ngrok-free.app/auth/login";
      const response = await axios.post(url, {
        email: login.email,
        senha: login.senha,
        recaptchaToken: captcha,
      });

      console.log(response);

      setSuccess("Login bem-sucedido!");
      setError("");

      setTimeout(() => {
        router.push("/home");
      }, 2000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
            setError("Email ou senha incorretos");
          } else {
            setError(`Erro ao fazer login: ${error.response.statusText}`);
          }
        } else if (error.request) {
          setError("Nenhuma resposta recebida do servidor");
        } else {
          setError(`Erro ao configurar a solicitação: ${error.message}`);
        }
      } else {
        setError("Ocorreu um erro desconhecido");
      }
    }
  };

  return (
    <main className={styles.wholeContainer}>
      <div className={styles.formLogin}>
        <div className={styles.loginTitleContainer}>
          <h1>Login</h1>
          <p>Faça sua parte com a natureza</p>
        </div>

        <div className={styles.inputLoginContainer}>
          <Input
            label="Email:"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={login.email}
            isForLogin
            className={validationErrors.email ? styles.error : ""}
          />
          {validationErrors.email && (
            <p className={styles.errorText}>{validationErrors.email}</p>
          )}
          <Input
            label="Senha:"
            type="password"
            name="senha"
            id="password"
            onChange={handleChange}
            value={login.senha}
            isForLogin
            className={validationErrors.senha ? styles.error : ""}
          />
          {validationErrors.senha && (
            <p className={styles.errorText}>{validationErrors.senha}</p>
          )}
        </div>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          className={`mx-auto`}
          onChange={setCaptcha}
        />

        <Button
          onClick={submitRequest}
          variant="secondary"
          text="Entrar"
          id={styles.button}
        />

        {error && <p className={styles.errorText}>{error}</p>}
        {success && <p className={styles.successText}>{success}</p>}

        <p className={styles.signupClickText}>
          Não tem cadastro? Faça já o seu!{" "}
          <Link className={styles.signupLink} href={"/signUp"}>
            Clique aqui.
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
