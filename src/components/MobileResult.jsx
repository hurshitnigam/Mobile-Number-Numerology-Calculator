import React from "react";
import { motion } from "framer-motion";
motion

export default function MobileResult({ mobile }) {
  if (!mobile) return null;

  return (
    <div
      style={{
        marginTop: "48px",
      }}
    >
      <h2 className="section-title">Mobile Analysis</h2>

      {/* Mobile Summary */}

      <div className="result-grid">
        <motion.div
          className="result-card"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
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

        {/* All Pairs */}

        <div className="result-card">
          <h3>All Pairs</h3>

          <br />

          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {mobile.pairs.map((pair, index) => (
              <span key={`${pair}-${index}`} className="badge neutral">
                {pair}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Positive Pairs */}

      <div
        className="result-grid"
        style={{
          marginTop: "24px",
        }}
      >
        <div className="result-card">
          <h3>Positive Pair Benefits</h3>

          <br />

          {mobile.positiveBenefits?.length ? (
            mobile.positiveBenefits.map((item, index) => (
              <div
                key={`${item.pair}-${index}`}
                style={{
                  marginBottom: "16px",

                  padding: "14px",

                  background: "#f0fdf4",

                  borderRadius: "12px",
                }}
              >
                <span className="badge positive">{item.pair}</span>

                <br />
                <br />

                <p
                  style={{
                    fontWeight: 500,
                  }}
                >
                  {item.english}
                </p>

                <p
                  style={{
                    marginTop: "8px",

                    color: "#555",
                  }}
                >
                  {item.hindi}
                </p>
              </div>
            ))
          ) : (
            <p>No positive pairs found</p>
          )}
        </div>

        {/* Neutral Effects */}

        <div className="result-card">
          <h3>Neutral Pair Effects</h3>

          <br />

          {mobile.neutralEffects?.length ? (
            mobile.neutralEffects.map((item, index) => (
              <div
                key={`${item.pair}-${index}`}
                style={{
                  marginBottom: "16px",

                  padding: "14px",

                  background: "#eff6ff",

                  borderRadius: "12px",
                }}
              >
                <span className="badge neutral">{item.pair}</span>

                <br />
                <br />

                <p
                  style={{
                    fontWeight: 500,
                  }}
                >
                  {item.english}
                </p>

                <p
                  style={{
                    marginTop: "8px",

                    color: "#555",
                  }}
                >
                  {item.hindi}
                </p>
              </div>
            ))
          ) : (
            <p>No neutral pairs found</p>
          )}
        </div>
      </div>

      {/* Negative Problems */}

      <div
        style={{
          marginTop: "24px",
        }}
      >
        <div className="result-card">
          <h3>Negative Pair Problems</h3>

          <br />

          {mobile.negativeProblems?.length ? (
            mobile.negativeProblems.map((item, index) => (
              <div
                key={`${item.pair}-${index}`}
                style={{
                  marginBottom: "18px",

                  padding: "16px",

                  background: "#fff5f5",

                  borderRadius: "14px",
                }}
              >
                <span className="badge negative">{item.pair}</span>

                <br />
                <br />

                <p
                  style={{
                    fontWeight: 500,
                  }}
                >
                  {item.english}
                </p>

                <p
                  style={{
                    marginTop: "8px",

                    color: "#555",
                  }}
                >
                  {item.hindi}
                </p>
              </div>
            ))
          ) : (
            <p>No negative pairs found</p>
          )}
        </div>

        {/* Not Recommended */}

        {mobile.notRecommended?.length > 0 && (
          <div
            className="result-card"
            style={{
              marginTop: "32px",
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
                <span key={`${item}-${index}`} className="badge negative">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
