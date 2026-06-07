import { useState } from "react";

import { motion } from "framer-motion";
motion;
import { FaMobileAlt, FaUserAlt } from "react-icons/fa";

import NameForm from "./components/NameForm";
import NameResult from "./components/NameResult";
import MobileResult from "./components/MobileResult";

import { calculateName } from "./utils/calculateName";
import { calculateMulank } from "./utils/calculateMulank";
import { calculateBhagyank } from "./utils/calculateBhagyank";
import { calculateMobile } from "./utils/calculateMobile";

import { NUMBER_INFO } from "./data/numberInfo";
import { getCompatibility } from "./utils/calculateCompatibility";
import CompatibilityCard from "./components/CompatibilityCard";
import { generatePdf } from "./reports/generatePdf";

<motion.section
  initial={{
    opacity: 0,
    y: -50,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.8,
  }}
  style={{
    padding: "60px 28px",

    borderRadius: "28px",

    background: "linear-gradient(135deg,#4F46E5,#9333EA,#EC4899)",

    color: "white",

    marginBottom: "30px",

    overflow: "hidden",

    position: "relative",
  }}
>
  <div
    style={{
      display: "flex",

      justifyContent: "center",

      gap: "20px",

      fontSize: "34px",

      marginBottom: "20px",
    }}
  >
    <FaUserAlt />

    <FaMobileAlt />
  </div>

  <h1
    style={{
      fontSize: "clamp(30px,6vw,54px)",

      fontWeight: "800",

      textAlign: "center",
    }}
  >
    Numerology Calculator
  </h1>

  <p
    style={{
      marginTop: "16px",

      opacity: ".9",

      textAlign: "center",

      fontSize: "18px",
    }}
  >
    Unlock your Name & Mobile Energy
  </p>
</motion.section>;

function App() {
  const [first, setFirst] = useState("");

  const [middle, setMiddle] = useState("");

  const [last, setLast] = useState("");

  const [dob, setDob] = useState("");

  const [mobile, setMobile] = useState("");

  const [result, setResult] = useState(null);

  function handleCalculate(e) {
    e.preventDefault();

    if (mobile.trim().length !== 10) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    const name = calculateName(first, middle, last);

    const mulank = calculateMulank(dob);

    const bhagyank = calculateBhagyank(dob);

    const mobileResult = calculateMobile(mobile);

    const namank = name.full.reduced;

    const compatibility = {
      mulankNamank: getCompatibility(mulank.reduced, namank),

      bhagyankNamank: getCompatibility(bhagyank.reduced, namank),

      mulankMobile: getCompatibility(mulank.reduced, mobileResult.reduced),

      bhagyankMobile: getCompatibility(bhagyank.reduced, mobileResult.reduced),

      namankMobile: getCompatibility(namank, mobileResult.reduced),
    };

    setResult({
      name,
      mulank,
      bhagyank,
      mobile: mobileResult,
      compatibility,
    });
  }

  return (
    <div className="container">
      <section
        style={{
          padding: "60px 30px",
          borderRadius: "26px",
          background: "linear-gradient(135deg,#5B4DFF,#7C3AED)",
          color: "white",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            fontWeight: "600",
            opacity: 0.9,
            marginBottom: "14px",
          }}
        >
          COSMIC COUNSELLOR
        </p>

        <h1
          style={{
            fontSize: "clamp(18px, 5vw, 28px)",
            marginBottom: "16px",
            fontWeight: "700",
          }}
        >
          Advanced Mobile Number Numerology
        </h1>

        <p
          style={{
            opacity: 0.9,
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Discover your Name Energy, Mulank, Bhagyank and complete Mobile Number
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
        onCalculate={handleCalculate}
        setResult={setResult}
      />

      {result && (
        <>
          <NameResult
            name={result.name}
            mulank={result.mulank}
            bhagyank={result.bhagyank}
            numberInfo={NUMBER_INFO}
          />

          <MobileResult mobile={result.mobile} />

          <CompatibilityCard compatibility={result.compatibility} />

          <div
            className="card"
            style={{
              marginTop: "32px",
              textAlign: "center",
            }}
          >
            <h2>Final Guidance</h2>

            <br />

            <p>
              Mobile numerology should be interpreted together with Mulank,
              Bhagyank and Full Name.
            </p>

            <br />

            <strong>Ask expert before changing mobile number</strong>

            <br />
            <br />

            <button className="btn" onClick={() => generatePdf(result)}>
              📄 Download PDF Report
            </button>
          </div>
        </>
      )}

      <footer
        style={{
          marginTop: "50px",

          textAlign: "center",

          color: "#777",

          padding: "24px",
        }}
      >
        © 2026 Mobile Numerology Calculator
      </footer>
    </div>
  );
}

export default App;
