import styles from "./index.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Statsbar from "../components/Statsbar";
import StatsYesNo from "../components/StatsYesNo";

import { useContext, useState } from "react";
import { Context } from "../components/store";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function storeInputInContext(input) {
  const context = useContext(Context);
  context.thirteen = input;
}

export default function Stats() {
  const [input, setInput] = useState("");

  var question1 = {
    type: "likert",
    prompt: "I am careful with how I share my information online.",
    left_tag: "Strongly Disagree",
    right_tag: "Strongly Agree",
    context_id: 22, // TODO
    your_label: "You",
    mean: 73,
    mean_label: "Average",
  };
  var question2 = {
    type: "yesno",
    prompt:
      "I am aware that Google personalizes ads based on data collected about my Google account.",
    context_id: "yes", // TODO
    majority: "yes",
    percent: 12,
  };

  var data = {
    total: 754,
    questions: [question1, question2, question2],
  };

  return (
    <div className={`${styles.landingContainer} ${styles.statsPage}`}>
      <div className={styles.left}>
        <h2>
          Here are your answers and how they compare to the {data.total} other
          individuals who took the survey.
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
        <div className={styles.otherUsers}>
          <h6>Other User Responses</h6>
          <p>
            One advanced diverted domestic sex repeated bringing you old.
            Possible procured her trifling laughter thoughts property she met
            way. Companions shy had solicitude favourable own. Which could saw
            guest man now heard but. Lasted my coming uneasy marked so should.
            Gravity letters it amongst herself dearest an windows by. Wooded
            ladies she basket season age her uneasy saw.
          </p>
        </div>

        <br></br>
        <br></br>
        <div className={styles.otherUsers}></div>
        <h5>
          Did your perception of technology companies and their commitment to
          privacy of user data change? If so, how?
        </h5>
        <br></br>

        {/* <input className={styles.textInputStats} type={"text"} /> */}
        <InputGroup className="mb-3">
          <FormControl aria-describedby="basic-addon2" />
          <InputGroup.Append>
            <Button variant="outline-secondary">Submit</Button>
          </InputGroup.Append>
        </InputGroup>

        <br></br>
        <br></br>
        <div className={styles.otherUsers}>
          <h6>Other User Responses</h6>
          <p>
            One advanced diverted domestic sex repeated bringing you old.
            Possible procured her trifling laughter thoughts property she met
            way. Companions shy had solicitude favourable own. Which could saw
            guest man now heard but. Lasted my coming uneasy marked so should.
            Gravity letters it amongst herself dearest an windows by. Wooded
            ladies she basket season age her uneasy saw.
          </p>
        </div>
        <div className={styles.spacer}></div>
      </div>

      <div className={styles.right}>
        {data.questions.map((question, i) => {
          return question.type == "likert" ? (
            <Statsbar
              prompt={question.prompt}
              your={question.context_id} // TODO: get value from this
              your_label={question.your_label}
              mean={question.mean}
              mean_label={question.mean_label}
              left_tag={question.left_tag}
              right_tag={question.right_tag}
              key={i}
            />
          ) : (
            <StatsYesNo
              question={question.prompt}
              majority={question.majority}
              percent={question.percent}
              your={question.context_id} // TODO: get value from this
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
