import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bgimage}></div>
      <div className={styles.description}>
        <p>
          Welcome to&nbsp;
          <code className={styles.code}>Sunfire Guardiands</code>
          &nbsp;Homepage
        </p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logoipsum.svg"
          alt="Next.js Logo"
          width={250}
          height={250}
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://discord.gg/CsFeH8Em45"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Discord <span>-&gt;</span>
          </h2>
          <p>Join our discord to stay in touch and recieve updates!</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Resources <span>-&gt;</span>
          </h2>
          <p>Find a list of resources and information to make your gameplay awesome!</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Members Area <span>-&gt;</span>
          </h2>
          <p>Special permission area for members only</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Change-log <span>-&gt;</span>
          </h2>
          <p>
            Follow along on our updates and improvements to the site.
          </p>
        </a>
      </div>
    </main>
  )
}
