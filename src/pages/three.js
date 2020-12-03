import styles from "./index.module.scss";
import LikertScale from "../components/LikertScale";
import Link from "next/link";
import { Context } from "../components/store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import Footer from "../components/Footer";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.three = input;
}

export default function Three() {
  const [option, setOption] = useState(-1);
  let arrows;
  if (option == -1) {
    arrows = (
      <Link href="two" onClick={storeInputInContext(option)}>
        <a>
          <LeftArrow></LeftArrow>
        </a>
      </Link>
    );
  } else {
    arrows = (
      <>
        <Link href="four" onClick={storeInputInContext(option)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="two" onClick={storeInputInContext(option)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </>
    );
  }

  return (
    <div className={styles.centerAlign}>
      <div>
        <LikertScale
          question="I trust Google to keep my personal data safe."
          responses={[
            { value: 1, text: "Strongly Disagree" },
            { value: 2, text: "Disagree" },
            { value: 3, text: "Neutral" },
            { value: 4, text: "Agree" },
            { value: 5, text: "Strongly Agree" }
          ]}
          value={option}
          onClick={response => setOption(response)}
        />
        {arrows}
      </div>
      <Footer level={3} />
    </div>
  );
}
