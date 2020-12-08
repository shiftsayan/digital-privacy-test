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
  context.thirteen = input;
}

export default function ElevenAndTwelve() {
  const [input, setInput] = useState("");
  let arrows;
  if (input.length > 0) {
    arrows = (
      <>
        <Link href="thanks" onClick={storeInputInContext(input)}>
          <a>
            <RightArrow></RightArrow>
          </a>
        </Link>
        <Link href="eight" onClick={storeInputInContext(input)}>
          <a>
            <LeftArrow></LeftArrow>
          </a>
        </Link>
      </>
    );
  } else {
    arrows = (
      <Link href="eight" onClick={storeInputInContext(input)}>
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
          question="Did your perception of technology companies and their commitment to privacy of user data change? If so, how?"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        {arrows}
      </div>
      <Footer level={8} />
    </div>
  );
}
