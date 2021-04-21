import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>stackii</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>

      <main className={styles.main}>

        <div className={styles.homeContainer}>
          <div className={styles.textContainer}>
            <p className={styles.stackii}>
              stackii
            </p>
            <h1 className={styles.title}>
              Ultimate library for building products
            </h1>


            <p className={styles.description}>
              We aggregate the web for the best resources created by indie hackers and side project enthusiasts.
            </p>

            <div className={styles.btn}>

              <a href="https://library.stackii.dev/" target="_blank"><button className={`${styles.btnCard} ${styles.btnPrimary}`}>
                free search
              </button></a>

              <button className={`${styles.btnCard} ${styles.btnSecondary}`}>
                get updates
              </button>

            </div>

          </div>

          <div className={styles.imgContainer}>
          <lottie-player 
            src="https://assets5.lottiefiles.com/packages/lf20_jn4vvm3d.json"  
            background="transparent"  
            speed="1"
            className={styles.img}
            loop="true"  
            autoplay>

          </lottie-player>

          </div>

        </div>

        <div className={styles.categoriesContainer}>

          <div className={styles.categoriesTitle}>
            <h2>Categories</h2>
          </div>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h3>25 resources</h3>
              <h1>Web Development</h1>
              <p>Learn the basics of web development with some of the best resources on the web. From learning platforms to libraries, you'll have everything you need to start building.</p>
              <h4>Check us out</h4>
            </div>

            <div className={styles.card}>
              <h3>20 resources</h3>
              <h1>code</h1>
              <p>the first step into creating your dream product</p>
            </div>

            <div className={styles.card}>
              <h3>20 resources</h3>
              <h1>code</h1>
              <p>the first step into creating your dream product</p>
            </div>

            <div className={styles.card}>
              <h3>20 resources</h3>
              <h1>code</h1>
              <p>the first step into creating your dream product</p>
            </div>

          </div>

        </div>

      </main>

    </div>
  )
}
