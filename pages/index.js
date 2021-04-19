import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>stackii</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <p className={styles.stackii}>
          stackii
        </p>
        <h1 className={styles.title}>
          ultimate library for building products
        </h1>


        <p className={styles.description}>
          we aggregate the web for the best resources so you dont have to.
        </p>

        <div className={styles.btn}>

          <a href="https://library.stackii.dev/" target="_blank"><button className={`${styles.btnCard} ${styles.btnPrimary}`}>
            free search
          </button></a>



          <button className={`${styles.btnCard} ${styles.btnSecondary}`}>
            get updates
          </button>

        </div>



        <div className={styles.grid}>

          <div className={styles.card}>
            <h3>
            📱 code
            </h3>
            <p>
              the first step into creating your dream product
            </p>
          </div>

          <div className={styles.card}>
            <h3>
            🎨  design
            </h3>
            <p>
              find the best design tools and resources to create your product
            </p>
          </div>

          <div className={styles.card}>
            <h3>
            🔧  tools
            </h3>
            <p>
              all the tools you will need, from website analytics to automation
            </p>
          </div>

          <div className={styles.card}>
            <h3>
            🦄  startups
            </h3>
            <p>
              join the community and start sharing your products
            </p>
          </div>
         
        </div>
      </main>

    </div>
  )
}
