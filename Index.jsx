import React from "react";
import x111 from "./1-1-1.png";
import x21 from "./2-1.png";
import { CardGridImage } from "./CardGridImage";
import { CardGridImageWrapper } from "./CardGridImageWrapper";
import { CardsWrapper } from "./CardsWrapper";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TextContentHeading } from "./TextContentHeading";
import estudianteDeIngenierADeSistemasDisciplinadaResilienteYProactivaConGranInterSEnElMbitoDeLaCiberseguridad from "./estudiante-de-ingenier-a-de-sistemas-disciplinada-resiliente-y-proactiva-con-gran-inter-s-en-el-mbito-de-la-ciberseguridad.svg";
import "./style.css";

export const WebPortafolio = () => {
  return (
    <div className="web-portafolio">
      <Header />
      <div className="frame" data-responsive-mode="desktop">
        <div className="hero-basic" />

        <img className="element" alt="Element" src={x21} />
      </div>

      <CardGridImage />
      <CardsWrapper />
      <CardGridImageWrapper />
      <Footer />
      <img
        className="estudiante-de"
        alt="Estudiante de"
        src={
          estudianteDeIngenierADeSistemasDisciplinadaResilienteYProactivaConGranInterSEnElMbitoDeLaCiberseguridad
        }
      />

      <TextContentHeading
        align="start"
        className="text-content-heading-instance"
        heading="Contacto"
        subheading=""
      />
      <div className="subheading-wrapper">
        <div className="subheading-2">{""}</div>
      </div>

      <p className="text-wrapper-2">04 de Noviembre de 2022</p>

      <div className="text-wrapper-3">Artículos</div>

      <img className="img" alt="Element" src={x111} />

      <div className="text-wrapper-4">Contactos</div>
    </div>
  );
};
