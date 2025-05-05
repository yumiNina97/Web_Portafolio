import React from "react";
import x111 from "./1-1-1.png";
import x21 from "./2-1.png";
import { CardGridImage } from "./CardGridImage";
import { CardGridImageWrapper } from "./CardGridImageWrapper";
import { CardsWrapper } from "./CardsWrapper";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TextContentHeading } from "./TextContentHeading";
import estudianteImage from "./estudiante-de-ingenier-a-de-sistemas-disciplinada-resiliente-y-proactiva-con-gran-inter-s-en-el-mbito-de-la-ciberseguridad.svg";
import "./style.css";

export const WebPortafolio = () => {
  return (
    <div className="web-portafolio">
      <Header />

      <div className="hero" data-responsive-mode="desktop">
        <div className="hero__background" />
        <img className="hero__image" alt="Hero element" src={x21} />
      </div>

      <CardGridImage />
      <CardsWrapper />
      <CardGridImageWrapper />

      <Footer />

      <img
        className="about__image"
        alt="Estudiante"
        src={estudianteImage}
      />

      <TextContentHeading
        align="start"
        className="contact__heading"
        heading="Contacto"
        subheading=""
      />

      <div className="contact__subheading-wrapper">
        <div className="contact__subheading">{""}</div>
      </div>

      <p className="footer__date">04 de Noviembre de 2022</p>

      <div className="articles__title">Artículos</div>
      <img className="articles__image" alt="Artículo" src={x111} />

      <div className="contact__label">Contactos</div>
    </div>
  );
};
