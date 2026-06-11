import { useState, useEffect } from "react";
import { supabase } from "./supabase";

import { motion } from "framer-motion";
motion;
import { FaMobileAlt, FaUserAlt } from "react-icons/fa";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

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
// import { generatePdf } from "./reports/generatePdf";

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

  useEffect(() => {
    console.log(import.meta.env.VITE_SUPABASE_URL);

    async function test() {
      const { data, error } = await supabase.from("test").select("*");

      console.log("Data:", data);
      console.log("Error:", error);
    }

    test();
  }, []);

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
          background: "linear-gradient(135deg, #1e1b4b, #312e81, #581c87)",
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
          The cosmic counsellor
        </p>

        <h1
          style={{
            fontSize: "clamp(18px, 5vw, 28px)",
            marginBottom: "16px",
            fontWeight: "700",
          }}
        >
          Advance Name and Mobile Number Numerology
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
        </>
      )}

      {result && (
        <div className="analysis-note">
          <h3>⚠️ महत्वपूर्ण सूचना</h3>

          <p>
            एप्लीकेशन की सीमाओं के कारण यह बहुत गहराई से विश्लेषण नहीं कर सकती।{" "}
            डीप एनालिसिस एवं सटीक परिणाम के लिए कृपया सम्पर्क करें।
          </p>

          <p>
            This application has limitations and cannot perform an in-depth
            analysis. Please contact us for detailed analysis and accurate
            guidance.
          </p>
        </div>
      )}

      <footer
        className="footer"
        style={{
          marginTop: "50px",
        }}
      >
        <div className="footer-content">
          <div className="footer-image">
            <img src="/cosmic-counsellor.jpeg" alt="Cosmic Counsellor" />

            <h3 className="footer-name">Vivek Nigam</h3>

            <strong className="footer-image-role">
              Numerologist • Astrologer • Vastu Expert
            </strong>
          </div>

          <div className="footer-details">
            <h2 className="footer-title">The cosmic counsellor</h2>

            <p className="about">
              Expert in Advance Mobile Number Numerology Analysis based on
              Mulank, Bhagyank, Namank and Mobile Number combinations. Get
              detailed insights about your strengths, challenges, compatibility
              and mobile number vibrations.
            </p>

            <div className="contact-buttons">
              <a
                href="https://wa.me/919450122288"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn whatsapp-btn"
              >
                💬 WhatsApp
              </a>

              <a href="tel:+919450122288" className="contact-btn call-btn">
                📞 Call Now
              </a>
            </div>

            <div className="social-section">
              <p className="social-title">
                To know more about us, follow us on
              </p>

              <div className="social-buttons">
                <a
                  href="https://www.instagram.com/thecosmiccounselaor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn instagram-btn"
                >
                  📷 Instagram
                </a>

                <a
                  href="https://www.facebook.com/share/1D2WBcPpjk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn facebook-btn"
                >
                  👍 Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="consultation-section">
            <h3 className="consultation-title">
              🔮 ज्योतिष परामर्श / Astrology Consultation
            </h3>

            <div className="services-container">
              <div className="services-row">
                <div className="service-circle">
                  <span>📜</span>
                  <h4>कुण्डली विश्लेषण</h4>
                  <p>Horoscope Analysis</p>
                </div>

                <div className="service-circle">
                  <span>🎓</span>
                  <h4>शिक्षा एवं कैरियर</h4>
                  <p>Education & Career</p>
                </div>

                <div className="service-circle">
                  <span>💍</span>
                  <h4>विवाह एवं स्वास्थ्य</h4>
                  <p>Marriage & Health</p>
                </div>

                <div className="service-circle">
                  <span>💰</span>
                  <h4>धन एवं प्रॉपर्टी</h4>
                  <p>Finance & Property</p>
                </div>
              </div>

              <div className="services-row second row">
                <div className="service-circle">
                  <span>✍️</span>
                  <h4>नाम सुधार</h4>
                  <p>Name Correction</p>
                </div>

                <div className="service-circle">
                  <span>📱</span>
                  <h4>मोबाइल नम्बर चयन</h4>
                  <p>Mobile Selection</p>
                </div>

                <div className="service-circle">
                  <span>🕉️</span>
                  <h4>मुहूर्त एवं उपाय</h4>
                  <p>Muhurat & Remedies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            Disclaimer: Numerology and Astrology guidance is intended for
            informational and self-reflection purposes only.
          </p>

          <p>© 2026 The Cosmic Counsellor. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
