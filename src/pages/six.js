import styles from "./index.module.scss";
import LikertScale from "../components/LikertScale";
import Link from "next/link";
import { Context } from "../components/store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import Footer from "../components/Footer";

function storeInputInContext(input1, input2) {
  const context = useContext(Context);
  context.nine = input1;
  context.ten = input2;
}

export default function NineAndTen() {
  const [option1, setOption1] = useState(-1);
  const [option2, setOption2] = useState(-1);
  let arrows;
  if (option1 != -1 && option2 != -1) {
    arrows = (
      <>
        <Link
          href="seven"
          onClick={storeInputInContext(option1, option2)}
        >
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link
          href="six"
          onClick={storeInputInContext(option1, option2)}
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
        href="six"
        onClick={storeInputInContext(option1, option2)}
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
        <LikertScale
          question="When I viewed my Google Ad Settings, I was surprised by the results."
          responses={[
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" },
            { value: 6, text: "None Shown" },
          ]}
          value={option1}
          onClick={(response) => setOption1(response)}
        />
        <div className={styles.spacer}></div>

        <LikertScale
          question="I believe Google collects data about me from non-Google websites."
          responses={[
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" },
          ]}
          value={option2}
          onClick={(response) => setOption2(response)}
        />
        {arrows}
      </div>
      <Footer level={6} />
    </div>
  );
}
