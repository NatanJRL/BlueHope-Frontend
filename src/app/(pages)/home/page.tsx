"use client";
import React from "react";
import Header from "../../components/Header";
import styles from "./styles.module.css";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";
import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer";


const Home = () => {
  const router = useRouter();

  return (
    <>
      <Header 
        isForHome
      />

      <div className={styles.videoContainer}>
        <div className={styles.titleContainer}>
          <h1>A ESPERANÇA É AZUL OCEANO</h1>
          <div className={styles.buttonGrid}>
            <Button
              onClick={() => {
                router.push("/signUp");
              }}
              text="Criar conta"
            ></Button>
            <Button
              onClick={() => {
                router.push("/login");
              }}
              text="Entrar"
              variant="secondary"
            ></Button>
          </div>
        </div>

        <video
          className={styles.video}
          width="100%"
          preload="true"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/ocean.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.break}></div>

      <h4 className={styles.introduceText}>Com a IA da BlueHope você pode</h4>

      <div className={styles.cardGroup}>
        <Card path="/pin_icon.svg" text="Mapear o Despejo de Plástico" />

        <Card
          path="/lens_icon.svg"
          text="Identificar Lixo Marinho em Imagens"
        />

        <Card path="/pin_icon.svg" text="Mapear Despejo de Plástico" />
      </div>

      <Footer/>
    </>
  );
};

export default Home;
