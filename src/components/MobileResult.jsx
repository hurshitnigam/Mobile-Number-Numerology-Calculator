import React from "react";
import { motion } from "framer-motion";
motion

export default function MobileResult({ mobile }) {
  if (!mobile) return null;

  return (
    <div style={{ marginTop: "48px" }}>
      <h2 className="section-title">Mobile Analysis</h2>

      {/* Mobile Summary */}

      <div className="result-grid">
        <motion.div
          className="result-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Mobile Summary</h3>

          <br />

          <p>Number:</p>

          <strong>{mobile.digits}</strong>

          <br />
          <br />

          <p>
            Total:
            <strong> {mobile.raw}</strong>
          </p>

          <p>
            Reduced:
            <strong> {mobile.reduced}</strong>
          </p>
        </motion.div>
      </div>

      {/* Positive | Negative | Neutral */}

      <div className="mobile-analysis-grid">

        {mobile.positiveBenefits?.length > 0 && (
          <div className="result-card">
            <h3>Positive Pair Benefits</h3>

            <br />

            {mobile.positiveBenefits.map((item, index) => (
              <div className="pair-item" key={`${item.pair}-${index}`}>
                <span className="badge positive">
                  {item.pair}
                </span>

                <div>
                  <p style={{ fontWeight: 600 }}>
                    {item.english}
                  </p>

                  <p
                    style={{
                      marginTop: "6px",
                      color: "#666",
                    }}
                  >
                    {item.hindi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {mobile.negativeProblems?.length > 0 && (
          <div className="result-card">
            <h3>Negative Pair Problems</h3>

            <br />

            {mobile.negativeProblems.map((item, index) => (
              <div className="pair-item" key={`${item.pair}-${index}`}>
                <span className="badge negative">
                  {item.pair}
                </span>

                <div>
                  <p style={{ fontWeight: 600 }}>
                    {item.english}
                  </p>

                  <p
                    style={{
                      marginTop: "6px",
                      color: "#666",
                    }}
                  >
                    {item.hindi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {mobile.neutralEffects?.length > 0 && (
          <div className="result-card">
            <h3>Neutral Pair Effects</h3>

            <br />

            {mobile.neutralEffects.map((item, index) => (
              <div className="pair-item" key={`${item.pair}-${index}`}>
                <span className="badge neutral">
                  {item.pair}
                </span>

                <div>
                  <p style={{ fontWeight: 600 }}>
                    {item.english}
                  </p>

                  <p
                    style={{
                      marginTop: "6px",
                      color: "#666",
                    }}
                  >
                    {item.hindi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Not Recommended */}

      {mobile.notRecommended?.length > 0 && (
        <div
          className="result-card"
          style={{
            marginTop: "28px",
          }}
        >
          <h3>Not Recommended Numbers</h3>

          <br />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {mobile.notRecommended.map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="badge negative"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

