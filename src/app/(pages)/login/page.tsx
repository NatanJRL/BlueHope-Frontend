"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.css";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const submitRequest = async () => {
    try {
      const url = "http://localhost:8081/auth/login";
      const response = await axios.post(url, {
        email: login.email,
        senha: login.senha,
      });

      console.log(response.data);

      setError("");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response!.status === 401) {
        setError("Email ou senha incorretos");
      } else {
        setError("Ocorreu um erro ao fazer login");
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
            className={error ? styles.error : ""}
          />
          <Input
            label="Senha:"
            type="password"
            name="senha"
            id="password"
            onChange={handleChange}
            value={login.senha}
            isForLogin
            className={error ? styles.error : ""}
          />
        </div>

        <Button
          onClick={submitRequest}
          variant="secondary"
          text="Entrar"
          id={styles.button}
        />

        {error && <p className={styles.errorText}>{error}</p>}

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
