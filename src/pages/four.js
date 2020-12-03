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
  context.four = input;
}

export default function Four() {
  const [option, setOption] = useState(-1);
  let arrows;
  if (option == -1) {
    arrows = (
      <Link href="three" onClick={storeInputInContext(option)}>
        <a>
          <LeftArrow></LeftArrow>
        </a>
      </Link>
    );
  } else {
    arrows = (
      <>
        <Link href="five" onClick={storeInputInContext(option)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="three" onClick={storeInputInContext(option)}>
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
          question="I feel Google is collecting too much information about people online."
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
      <Footer level={4} />
    </div>
  );
}
