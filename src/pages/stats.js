import styles from "./index.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Statsbar from "../components/Statsbar";
import StatsYesNo from "../components/StatsYesNo";

import { useContext, useState } from "react";
import { Context } from "../components/store";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function getResponseFromContext(context, id) {
  if (id == "eleven") {
    return context[id];
  }
  return context[id] < 5 ? (context[id] / 5) * 100 : null;
}

export default function Stats() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [input, setInput] = useState("");

  const context = useContext(Context);
  if (context != {} && !context.sent) {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwgbEDUMMVmj2q1ZbJqs6s-w0YNESXtDoZ8lSDX321F6lUnCZzf/exec",
      {
        method: "POST",
        body: JSON.stringify(context)
      }
    )
      .then(response => response.text())
      .then(data => console.log(data));
    context.sent = true;
  }

  fetch(
    "https://script.google.com/macros/s/AKfycbwgbEDUMMVmj2q1ZbJqs6s-w0YNESXtDoZ8lSDX321F6lUnCZzf/exec",
    {
      method: "GET"
    }
  )
    .then(response => response.text())
    .then(text => JSON.parse(text))
    .then(data => {
      setData(data);
      setLoading(false);
    });

  return (
    <div className={`${styles.landingContainer} ${styles.statsPage}`}>
      <div className={styles.left}>
        <h2>
          Thanks for taking part in the survey. Here is how your answers compare
          to the {loading ? "" : data["total"]} other individuals who took the
          survey.
        </h2>
        <div className={styles.spacer}></div>
        {context["zero"] && (
          <>
            <h5>
              Your initial perception of technology companies and their
              commitment to privacy of user data.
            </h5>
            <br></br>
            <p>{context["zero"]}</p>
            <br></br>
            <br></br>
          </>
        )}

        {/* <br></br>
        <br></br>
        {/* <div className={styles.otherUsers}>
          <h6>Other User Responses</h6>
          <p>
            One advanced diverted domestic sex repeated bringing you old.
            Possible procured her trifling laughter thoughts property she met
            way. Companions shy had solicitude favourable own. Which could saw
            guest man now heard but. Lasted my coming uneasy marked so should.
            Gravity letters it amongst herself dearest an windows by. Wooded
            ladies she basket season age her uneasy saw.
          </p>
        </div> */}

        <div className={styles.otherUsers}></div>
        <h5>
          Did your perception of technology companies and their commitment to
          privacy of user data change? If so, how?
        </h5>
        <br></br>

        {/* <input className={styles.textInputStats} type={"text"} /> */}
        <InputGroup className="mb-3">
          <FormControl
            aria-describedby="basic-addon2"
            value={input}
            onInput={e => setInput(e.target.value)}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={() => {
                if (input != "") {
                  fetch(
                    "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbwgbEDUMMVmj2q1ZbJqs6s-w0YNESXtDoZ8lSDX321F6lUnCZzf/exec",
                    {
                      method: "POST",
                      body: JSON.stringify({ thirteen: input })
                    }
                  );
                }
                setInput("");
              }}
            >
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <br></br>
        <br></br>
        <div className={styles.otherUsers}>
          <h6>Other User Responses</h6>
          <p>
            Yes. I don't trust them as much. Seems like Google wants to make
            money off me.
          </p>
          <p>
            I think people need more control over what data they are willing to
            share since since people are constantly being tracked.
          </p>
          <p>
            No this is exactly the kind of stuff I meant, like they didn't give
            me the tools to use this, not in plain language obvious way, they
            just default had that turned on
          </p>
          <p>
            And it wasn't only Google that was “sensitive to the privacy
            concerns of its users.” All of today's tech giants have made similar
            commitments.
          </p>
        </div>
        <div className={styles.spacer}></div>
      </div>

      {!loading && (
        <div className={styles.right}>
          {data.questions.map((question, i) => {
            return question.type == "likert" ? (
              <Statsbar
                prompt={question.prompt}
                your={getResponseFromContext(context, question.context_id)}
                your_label={question.your_label}
                mean={question.mean}
                mean_label={question.mean_label}
                left_tag={question.left_tag}
                right_tag={question.right_tag}
                key={i}
              />
            ) : question.type == "yesno" ? (
              <StatsYesNo
                question={question.prompt}
                majority={question.majority}
                percent={question.percent}
                your={context[question.context_id] == 1 ? "yes" : "no"}
                key={i}
              />
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}
