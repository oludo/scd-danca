import Head from "next/head";
import styles from "../styles/Links.module.scss";

export default function DancaADois() {
  return (
    <>
      <Head>
        <title>SCD | Links Rápidos</title>
      </Head>

      <main className={styles.links}>
        {[
          {
            title: "Dança a Dois",
            description: "Para quem quer se divertir!",
            href: "/danca-a-dois",
          },
          {
            title: "Playlist - Forró",
            description: "As músicas das aulas em casa",
            href: "https://music.youtube.com/playlist?list=PLffvjDG7bxWssJeagE1-9qMBP030aseIB",
            rel: "noopener noreferrer",
          },
          {
            title: "Playlist - Samba",
            description: "As músicas das aulas em casa",
            href: "https://music.youtube.com/playlist?list=PLffvjDG7bxWuOhcIhRrgpW_4dVLRuq7uJ",
            rel: "noopener noreferrer",
          },
        ].map((link, index) => (
          <a
            key={index}
            className={styles.links_link}
            href={link.href}
            target="_blank"
            rel={link.rel}
          >
            <h2 className={styles.links_link_title}>{link.title}</h2>
            <p className={styles.links_link_description}>{link.description}</p>
          </a>
        ))}
      </main>
    </>
  );
}
