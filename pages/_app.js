import 'theme/base.css';
import styles from 'theme/app.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const SOCIALS = [
  {
    name: 'twitter',
    url: 'https://twitter.com/gabmir_/',
  },
  {
    name: 'github',
    url: 'https://github.com/gabriel-miranda/',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/gabriel-miranda',
  },
];

export default function MyApp({ Component, pageProps }) {
  const { query } = useRouter();
  return (
    <>
      <header
        className={`${styles.header} ${query.slug ? styles.header_small : ''}`}
      >
        <Image
          src="/logo.png"
          alt="Logo of a guy sitting at a computer desk"
          width={100}
          height={100}
        />
        <div>
          <h1 className={styles.title}>
            <Link href="/">
              <a>gabmirdev</a>
            </Link>
          </h1>
          <p className={styles.description}>
            Engineering Manager - Software Engineer <br />
            Personal blog by{' '}
            <a
              href="https://www.linkedin.com/in/gabriel-miranda"
              target="_blank"
              rel="noreferrer"
            >
              Gabriel Miranda
            </a>
          </p>
        </div>
      </header>
      <Component {...pageProps} />
      <footer>
        {SOCIALS.map((link, index) => (
          <React.Fragment key={link.url}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={styles.footer_link}
            >
              {link.name}
            </a>
            <span className={styles.footer_separator}>
              {index !== SOCIALS.length - 1 && '•'}
            </span>
          </React.Fragment>
        ))}
      </footer>
    </>
  );
}
