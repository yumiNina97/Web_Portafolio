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
import "./styleBEM.css";

export const WebPortafolio = () => {
  return (
    <div className="web-portafolio">
      <Header />

      <section className="hero" data-responsive-mode="desktop">
        <div className="hero__background" />
        <img className="hero__image" alt="Hero element" src={x21} />
      </section>

      <main>
        <CardGridImage />
        <CardsWrapper />
        <CardGridImageWrapper />

        <img
          className="about__image"
          alt="Descripción de estudiante"
          src={estudianteImage}
        />

        <section className="articles">
          <h2 className="articles__title">Artículos</h2>
          <img className="articles__image" alt="Artículo destacado" src={x111} />
        </section>

        <section className="contact">
          <TextContentHeading
            align="start"
            className="contact__heading"
            heading="Contacto"
            subheading=""
          />

          <div className="contact__subheading-wrapper">
            <div className="contact__subheading">{""}</div>
          </div>
          
          <div className="contact__label">Contactos</div>
        </section>
      </main>

      <Footer>
        <p className="footer__date">04 de Noviembre de 2022</p>
      </Footer>
    </div>
  );
};
