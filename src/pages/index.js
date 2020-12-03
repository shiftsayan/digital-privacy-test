import styles from "./index.module.scss";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.left}>
        <h1>The Ads Test</h1>
        <p>How well do you know the websites that know you so well?</p>
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
