import styles from "./index.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Statsbar from "../components/Statsbar";
import StatsYesNo from "../components/StatsYesNo";

export default function Stats() {
  return (
    <div className={`${styles.landingContainer} ${styles.statsPage}`}>
      <div className={styles.left}>
        <h2>
          Here are your answers and how they compare to other 754 individuals
          who took the survey.
        </h2>
        <div className={styles.spacer}></div>
        <h5>
          What is your current perception of technology companies and their
          commitment to privacy of user data?
        </h5>
        <br></br>
        <p>
          One advanced diverted domestic sex repeated bringing you old. Possible
          procured her trifling laughter thoughts property she met way.
          Companions shy had solicitude favourable own. Which could saw guest
          man now heard but. Lasted my coming uneasy marked so should. Gravity
          letters it amongst herself dearest an windows by. Wooded ladies she
          basket season age her uneasy saw.
        </p>
        <br></br>
        <br></br>
        <h5>
          What is your current perception of technology companies and their
          commitment to privacy of user data?
        </h5>
        <br></br>
        <p>
          One advanced diverted domestic sex repeated bringing you old. Possible
          procured her trifling laughter thoughts property she met way.
          Companions shy had solicitude favourable own. Which could saw guest
          man now heard but. Lasted my coming uneasy marked so should. Gravity
          letters it amongst herself dearest an windows by. Wooded ladies she
          basket season age her uneasy saw.
        </p>
      </div>

      <div className={styles.right}>
        <Statsbar></Statsbar>

        <StatsYesNo
          question="I am aware that Google personalizes ads based on
data collected about my Google account."
          average="85%"
          user="no"
        ></StatsYesNo>
      </div>
    </div>
  );
}
