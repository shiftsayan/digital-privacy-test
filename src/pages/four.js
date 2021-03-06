import styles from "./index.module.scss";
import Link from "next/link";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Six() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.centerAlign}>
      <div className={styles.textInputContainer}>
        <h2 className={styles.title}>
          If you didn’t know, Google does personalize ads.
        </h2>
        <p>
          Click the image to view your Google Ad Settings, and take a few
          minutes to
          <br></br>
          explore the “How your ads are personalized” section and come back
          here.
          <br></br>
          Make sure to keep the Ad Settings tab open for future questions.
        </p>
        <a
          href="https://adssettings.google.com"
          target="_blank"
          onClick={() => setClicked(true)}
        >
          <img src="/ad-settings.png"></img>
        </a>
        {clicked && (
          <Link href="five">
            <a>
              <RightArrow />
            </a>
          </Link>
        )}
        <Link href="three">
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </div>
      <Footer level={4} />
    </div>
  );
}
