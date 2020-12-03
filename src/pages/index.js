import styles from "./index.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.left}>
        <h1>Digital Privacy Test</h1>
        <h5 className={styles.secondary}>
          A survey about your relationship with the web.
        </h5>
        <Link href="one">
          <button>Take the Test</button>
        </Link>
      </div>
      <div className={styles.right}>
        <img src="/landing-image.png"></img>
      </div>
    </div>
  );
}
