"use client";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

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
  const [success, setSuccess] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [validationErrors, setValidationErrors] = useState({
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
  const router = useRouter(); 


  /* STEPS */
  const handleNext = () => {
    if (validate()) {
      setCurrentStep((prevState) => prevState + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prevState) => prevState - 1);
  };

  /* VALIDATION */
  const validate = () => {
    const errors: any = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!signup.nome.trim()) errors.nome = "Nome é obrigatório";
    if (!emailPattern.test(signup.email)) errors.email = "Email inválido";
    if (signup.senha.length < 6)
      errors.senha = "Senha deve ter no mínimo 6 caracteres";
    if (!signup.phone.trim()) errors.phone = "Telefone é obrigatório";

    if (currentStep === 1) {
      if (!signup.cep.trim()) errors.cep = "CEP é obrigatório";
      if (!signup.rua.trim()) errors.rua = "Rua é obrigatória";
      if (!signup.bairro.trim()) errors.bairro = "Bairro é obrigatório";
      if (!signup.numero.trim()) errors.numero = "Número é obrigatório";
      if (!signup.cidade.trim()) errors.cidade = "Cidade é obrigatória";
      if (!signup.estado.trim()) errors.estado = "Estado é obrigatório";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  /* HANDLE INPUT CHANGE */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignup((prevSignup) => ({
      ...prevSignup,
      [name]: value,
    }));
  };

  /* VIA CEP */
  const handleCepFocus = async (e: React.FocusEvent<HTMLInputElement>) => {
    try {
      const url = "https://efcc-2804-14d-32a7-496f-7c59-c7b6-43b6-7ced.ngrok-free.app/viacep";
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

  /* SUBMIT FORM */
  const submitRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const url = "https://efcc-2804-14d-32a7-496f-7c59-c7b6-43b6-7ced.ngrok-free.app/auth/signup";
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
      setSuccess("Cadastro bem-sucedido!");
      setError("");

      setTimeout(() => {
        router.push("/home");
      }, 2000);
    } catch (error) {
      console.log(error);
      setError("Ocorreu um erro ao fazer o cadastro");
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

          <form onSubmit={submitRegister}>
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
                    className={validationErrors.nome ? styles.error : ""}
                  />
                  {validationErrors.nome && (
                    <p className={styles.errorText}>{validationErrors.nome}</p>
                  )}
                  <Input
                    label="Email:"
                    type="email"
                    name="email"
                    id=""
                    onChange={handleChange}
                    value={signup.email}
                    className={validationErrors.email ? styles.error : ""}
                  />
                  {validationErrors.email && (
                    <p className={styles.errorText}>{validationErrors.email}</p>
                  )}
                  <Input
                    label="Senha:"
                    type="password"
                    name="senha"
                    id=""
                    onChange={handleChange}
                    value={signup.senha}
                    className={validationErrors.senha ? styles.error : ""}
                  />
                  {validationErrors.senha && (
                    <p className={styles.errorText}>{validationErrors.senha}</p>
                  )}
                  <Input
                    label="Telefone:"
                    type="phone"
                    name="phone"
                    id=""
                    onChange={handleChange}
                    value={signup.phone}
                    className={validationErrors.phone ? styles.error : ""}
                  />
                  {validationErrors.phone && (
                    <p className={styles.errorText}>{validationErrors.phone}</p>
                  )}
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
                      className={validationErrors.cep ? styles.error : ""}
                    />
                    <Input
                      label="Rua:"
                      type="text"
                      name="rua"
                      id={styles.inputRegister}
                      onChange={handleChange}
                      value={signup.rua}
                      className={validationErrors.rua ? styles.error : ""}
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
                      className={validationErrors.bairro ? styles.error : ""}
                    />
                    <Input
                      label="Número:"
                      type="text"
                      name="numero"
                      id={styles.inputRegister}
                      onChange={handleChange}
                      value={signup.numero}
                      className={validationErrors.numero ? styles.error : ""}
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
                      className={validationErrors.cidade ? styles.error : ""}
                    />
                    <Input
                      label="Estado:"
                      type="text"
                      name="estado"
                      id={styles.inputRegister}
                      onChange={handleChange}
                      value={signup.estado}
                      className={validationErrors.estado ? styles.error : ""}
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
          </form>

          {error && <p className={styles.errorText}>{error}</p>}
          {success && <p className={styles.successText}>{success}</p>}

          <p className={styles.signupClickText}>
            Já tem cadastro?{" "}
            <Link className={styles.signupLink} href={"/login"}>
              Clique aqui.
            </Link>
          </p>
        </div>
      </main>
    </main>
  );
};

export default SignIn;
