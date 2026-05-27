import { useState } from "react";

import NameForm from "./components/NameForm";
import NameResult from "./components/NameResult";
import MobileResult from "./components/MobileResult";

import { calculateName } from "./utils/calculateName";
import { calculateMulank } from "./utils/calculateMulank";
import { calculateBhagyank } from "./utils/calculateBhagyank";
import { calculateMobile } from "./utils/calculateMobile";

import { NUMBER_INFO } from "./data/numberInfo";

function App() {
  const [first, setFirst] =
    useState("");

  const [middle, setMiddle] =
    useState("");

  const [last, setLast] =
    useState("");

  const [dob, setDob] =
    useState("");

  const [mobile, setMobile] =
    useState("");

  const [result, setResult] =
    useState(null);

  function handleCalculate(
    e
  ) {
    e.preventDefault();

    const name =
      calculateName(
        first,
        middle,
        last
      );

    const mulank =
      calculateMulank(
        dob
      );

    const bhagyank =
      calculateBhagyank(
        dob
      );

    const mobileResult =
      calculateMobile(
        mobile
      );

    setResult({
      name,
      mulank,
      bhagyank,
      mobile:
        mobileResult,
    });
  }

  return (
    <div
      className="container"
    >

      <section
        style={{
          padding:
            "60px 30px",

          borderRadius:
            "26px",

          background:
            "linear-gradient(135deg,#5B4DFF,#7C3AED)",

          color:
            "white",

          textAlign:
            "center",

          marginBottom:
            "32px",
        }}
      >

        <h1
          style={{
            fontSize:
              "42px",

            marginBottom:
              "16px",
          }}
        >
          Mobile Number
          Numerology
        </h1>

        <p
          style={{
            opacity:
              0.9,

            maxWidth:
              "700px",

            margin:
              "0 auto",
          }}
        >
          Discover your
          Name Energy,
          Mulank,
          Bhagyank
          and Mobile
          Number
          Analysis.
        </p>

      </section>

      <NameForm
        first={first}
        setFirst={setFirst}

        middle={middle}
        setMiddle={setMiddle}

        last={last}
        setLast={setLast}

        dob={dob}
        setDob={setDob}

        mobile={mobile}
        setMobile={setMobile}

        onCalculate={
          handleCalculate
        }
      />

      {result && (
        <>

          <NameResult
            name={
              result.name
            }

            mulank={
              result.mulank
            }

            bhagyank={
              result.bhagyank
            }

            numberInfo={
              NUMBER_INFO
            }
          />

          <MobileResult
            mobile={
              result.mobile
            }
          />

          <div
            className="card"
            style={{
              marginTop:
                "32px",

              textAlign:
                "center",
            }}
          >

            <h2>
              Final
              Guidance
            </h2>

            <br />

            <p>
              Mobile
              numerology
              should be
              interpreted
              together
              with
              Mulank,
              Bhagyank
              and Full
              Name.
            </p>

            <br />

            <strong>
              Ask expert
              before
              changing
              mobile
              number
            </strong>

          </div>

        </>
      )}

      <footer
        style={{
          marginTop:
            "50px",

          textAlign:
            "center",

          color:
            "#777",

          padding:
            "24px",
        }}
      >
        © 2026 Mobile
        Numerology
        Calculator
      </footer>

    </div>
  );
}

export default App;