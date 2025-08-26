import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Gallery from "../components/Gallery";

export default function Home() {

  return (
    <>
      <Head>
        <title></title>
        <meta
          name="description"
          content="Yoga Classes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <p>
              <span>Gentle and restorative yoga practice</span> from the comfort
              of your own home.
            </p>
          </div>
            <div className={styles.heroPrice}>
            <h3>Rs 600</h3>
            <p>per month</p>
          </div>
          </div>
        


        <div className={styles.info}>
          <div className={styles.infoFlow}>
            <h2>Gentle Yoga Flow</h2>
            <p>
              Come and join me online for a gentle flow class with a lovely
              relaxation at the end. You will receive a warm welcome and leave
              feeling refreshed, relaxed and connected. Everyone is very welcome
              and if you have never tried yoga before, come and give it a go
              from the comfort of your home!
            </p>
            <img
              src="./images/meditation-yoga.svg"
              alt="quote marks"
              className={`${styles.meditation} ${styles.infoImg}`}
            />
          </div>
          <div className={styles.infoRestorative}>
            <h2>Restorative Yoga</h2>
            <p>
              Come and join me online for a restorative class full of
              relaxation. Everyone is very welcome and if you have never tried
              yoga before, come and give it a go from the comfort of your home!
            </p>
            <img
              src="./images/lotus.svg"
              alt="lotus"
              className={`${styles.lotus} ${styles.infoImg}`}
            />
          </div>
         
        </div>

        <div className={styles.infoOverview}>
          <div className={styles.infoOverviewImg}>
            {/* <Image
              src="asd"
              alt="dads"
              width={2500}
              height={1667}
            /> */}
          </div>
          <div className={styles.infoOverviewCopy}>
            <h2>Yoga to quieten the mind – classes coming soon!</h2>
            <p>
              Come and join me online for a gentle flow class with a lovely
              relaxation at the end. You will receive a warm welcome and leave
              feeling refreshed, relaxed and connected. Everyone is very welcome
              and if you have never tried yoga before, come and give it a go
              from the comfort of your home!
            </p>
            <p>
              For me, yoga is not simply a physical movement of the body; it is
              a form of moving meditation, a tool for stress relief and a
              practice to help you feel more relaxed.
            </p>
          </div>
        </div>

        <div className={styles.mailingListSection}>
          <div className={styles.mailingList}>
            <h2>Testimonials</h2>
            <p>
              
            </p>
           
          </div>
        </div>
        <Gallery />
      </main>
    </>
  );
}
