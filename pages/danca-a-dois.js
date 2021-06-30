import Image from "next/image";
import Head from "next/head";
import { FaWhatsapp } from "react-icons/fa";
import styles from "../styles/DancaADois.module.scss";
import makeFacebookPixel from "../libs/facebookPixel";
import makeGoogleAnalytics from "../libs/googleAnalytics";

const HeroImg = () => (
  <Image
    src="/hero.png"
    alt="hero-scd"
    layout="responsive"
    height={6}
    width={4}
    objectFit="cover"
    quality={100}
    priority
    placeholder="blur"
  />
);

export default function DancaADois() {
  let FacebookPixel, GoogleAnalytics;

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    FacebookPixel = makeFacebookPixel({ ID: "152464016914795" });
    FacebookPixel.initialize();
    FacebookPixel.track("PageView");
    GoogleAnalytics = makeGoogleAnalytics({ ID: "UA-200976932-1" });
    GoogleAnalytics.initialize();
  }

  return (
    <>
      <Head>
        <title>SCD | Dança a dois</title>
      </Head>

      <header className={styles.header}>
        <span className={styles.header_logo}>SCD</span>
        <br />
        <span className={styles.header_description}>Dança de Salão</span>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.hero_cta}>
            <h1 className={styles.hero_cta_heading}>
              Se divirta e relaxe aprendendo{" "}
              <span className={styles.hero_cta_heading_contrast}>
                dança a dois do zero
              </span>
              , mesmo sendo duro
            </h1>

            <p className={styles.hero_cta_text}>
              Normalmente as academias de dança ensinam as pessoas a serem
              dançarinos e não focam naquilo que os alunos realmente precisam.
            </p>

            <p className={styles.hero_cta_text}>
              Aqui no SCD, entendemos que a dança a dois deve ser um momento
              para esquecer os problemas, dar umas boas risadas e se divertir!
            </p>

            <a
              className={styles.hero_cta_button}
              href="https://api.whatsapp.com/send?phone=5521995758923&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas."
              target="_blank"
              onClick={() => FacebookPixel.track("Contact")}
            >
              <FaWhatsapp className={styles.hero_cta_button_icon} /> Quero minha
              aula grátis
            </a>
          </div>

          <div className={styles.hero_image}>
            <HeroImg />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        {[
          {
            title: "Fale com a gente",
            value: "(21) 99575-8923",
            href: "https://api.whatsapp.com/send?phone=5521995758923&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas.",
            onClick: () => FacebookPixel.track("Contact"),
          },
          {
            title: "Siga nos",
            value: "@scd.danca",
            href: "http://instagram.com/scd.danca",
          },
          {
            title: "Como chegar",
            value: "Rua do Amparo, 65 - Cascadura",
            href: "https://g.page/studio-carol-duarte?share",
          },
        ].map((contact, index) => (
          <div key={index} className={styles.footer_contact}>
            <h3 className={styles.footer_contact_title}>{contact.title}</h3>
            <a
              className={styles.footer_contact_link}
              href={contact.href}
              onClick={contact.onClick}
              target="_blank"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </footer>
    </>
  );
}
