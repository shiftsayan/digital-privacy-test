import styles from "./index.module.scss";
import YesNo from "../components/YesNo";
import LikertScale from "../components/LikertScale";
import Link from "next/link";
import { Context } from "../components/store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import Footer from "../components/Footer";

function storeInputInContext(input1, input2) {
  const context = useContext(Context);
  context.seven = input1;
  context.eight = input2;
}

export default function SevenAndEight() {
  const [yesno, setYesNo] = useState(0);
  const [option, setOption] = useState(-1);
  let arrows;
  if (yesno != 0 && option != -1) {
    arrows = (
      <>
        <Link
          href="six"
          onClick={() => {
            storeInputInContext(yesno, option);
          }}
        >
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link
          href="four"
          onClick={storeInputInContext(yesno, option)}
        >
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </>
    );
  } else {
    arrows = (
      <Link
        href="four"
        onClick={storeInputInContext(yesno, option)}
      >
        <a>
          <LeftArrow></LeftArrow>
        </a>
      </Link>
    );
  }

  return (
    <div className={styles.centerAlign}>
      <div>
        <YesNo
          question="Was ad personalization turned on for your account? You can go back to your Ad Settings to check."
          value={yesno}
          onClick={(response) => setYesNo(response)}
        />
        <div className={styles.spacer}></div>
        <LikertScale
          question="I believe Google ad personalization should be, by default, turned on."
          responses={[
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" },
          ]}
          value={option}
          onClick={(response) => setOption(response)}
        />
        {arrows}
      </div>
      <Footer level={5} />
    </div>
  );
}
