import styles from "./index.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.left}>
        <div className={styles.spacer}></div>
        <h1>Digital Privacy Test</h1>
        <h5 className={styles.secondary}>
          A five minute survey about your relationship with the web.
        </h5>
        <Link href="zero">
          <button>Take the Test</button>
        </Link>
        <br />
        <br />
        <p className={styles.caption}>
          This is a Carnegie Mellon University student project conducting
          Human-Computer Interaction research. Please contact
          charleyz@andrew.cmu.edu if there are any concerns.
        </p>
      </div>
      <div className={styles.right}>
        <img src="/landing-image.png"></img>
      </div>
    </div>
  );
}
