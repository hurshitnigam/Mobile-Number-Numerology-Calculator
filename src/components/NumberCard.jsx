import React from "react";

export default function NumberCard({ title, data }) {
  if (!data) return null;

  return (
    <div className="result-card">
      <h3>{title}</h3>

      <br />

      <p>
        <strong>Personality</strong>

        <br />
        <br />

        {data.personality.english}

        <br />

        <span
          style={{
            color: "#666",
            lineHeight: "1.7",
          }}
        >
          {data.personality.hindi}
        </span>
      </p>

      <br />

      <p>
        <strong>Career</strong>

        <br />
        <br />

        {data.career.english}

        <br />

        <span
          style={{
            color: "#666",
            lineHeight: "1.7",
          }}
        >
          {data.career.hindi}
        </span>
      </p>

      <br />

      <p>
        <strong>Challenge</strong>

        <br />
        <br />

        {data.challenge.english}

        <br />

        <span
          style={{
            color: "#666",
            lineHeight: "1.7",
          }}
        >
          {data.challenge.hindi}
        </span>
      </p>
    </div>
  );
}
