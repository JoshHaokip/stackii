import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

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
            <p className={styles.stackii}>stackii</p>
            <h1 className={styles.title}>
              Ultimate library for building products
            </h1>

            <p className={styles.description}>
              We aggregate the web for the best resources so you dont have to.
            </p>

            <div className={styles.btn}>
              <a href="https://www.stackii.dev/" target="_blank">
                <button className={`${styles.btnCard} ${styles.btnPrimary}`}>
                  find tools
                </button>
              </a>

              <button className={`${styles.btnCard} ${styles.btnSecondary}`}>
                <Link href="/newsletter">get updates</Link>
              </button>
            </div>
          </div>

          <div className={styles.imgContainer}>
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_jn4vvm3d.json"
              background="transparent"
              speed="1"
              className={styles.img}
              loop
              renderer="svg"
              autoplay
            ></lottie-player>
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
              <p>
                Learn the basics of web development with some of the best
                resources on the web. From learning platforms to libraries,
                you'll have everything you need to start building.
              </p>
              <h4>Start coding</h4>
            </div>

            <div className={styles.card}>
              <h3>33 resources</h3>
              <h1>Design</h1>
              <p>
                Need help understanding UX/UI? Struggling to wireframe your
                product? All the resources and tools you'll need to create your
                next masterpiece.
              </p>
              <h4>Start designing</h4>
            </div>

            <div className={styles.card}>
              <h3>42 resources</h3>
              <h1>Tools and Utils</h1>
              <p>
                No superhero is without their trusted sidekick! Power up your
                products with the best tools on the web. From web analytics to
                automation, you'll never have to struggle again.
              </p>
              <h4>Start making</h4>
            </div>

            <div className={styles.card}>
              <h3>17 resources</h3>
              <h1>Startups</h1>
              <p>
                You've built your product and added some additional tools, now's
                the time to start spreading your product all over the web.
              </p>
              <h4>Start shouting</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
