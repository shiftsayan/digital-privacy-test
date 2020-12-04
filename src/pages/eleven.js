import styles from "./index.module.scss";
import TextInput from "../components/TextInput";
import LikertScale from "../components/LikertScale";
import Link from "next/link";
import { Context } from "../components/store";
import { useContext, useState } from "react";
import RightArrow from "../components/RightArrow";
import LeftArrow from "../components/LeftArrow";
import Footer from "../components/Footer";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.eleven = input;
  context.twelve = input;
}

export default function ElevenAndTwelve() {
  const [input, setInput] = useState("");
  const [option, setOption] = useState(-1);
  let arrows;
  if (input.match(/^[1-9]$|^[1-9][0-9]$|^(100)$/) && option != -1) {
    arrows = (
      <>
        <Link
          href="thanks"
          onClick={() => {
            storeInputInContext(input);
            storeInputInContext(yesno);
          }}
        >
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link
          href="nine"
          onClick={() => {
            storeInputInContext(input);
            storeInputInContext(yesno);
          }}
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
        href="nine"
        onClick={() => {
          storeInputInContext(input);
          storeInputInContext(yesno);
        }}
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
        <TextInput
          question="From 0 to 100, what percentage of Google’s revenue comes from ads?"
          value={input}
          onInput={e => setInput(e.target.value)}
          type="number"
        />
        <LikertScale
          question="I believe Google sells my data to other companies."
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
      <Footer level={12} />
    </div>
  );
}
