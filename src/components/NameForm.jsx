import React from "react";

export default function NameForm({
  first,
  setFirst,
  middle,
  setMiddle,
  last,
  setLast,
  dob,
  setDob,
  mobile,
  setMobile,
  onCalculate,
  setResult,
}) {
  function handleReset() {
    setFirst("");
    setMiddle("");
    setLast("");
    setDob("");
    setMobile("");
    setResult(null);
  }

  function handleDobChange(e) {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    }

    if (value.length > 5) {
      value = value.slice(0, 5) + "/" + value.slice(5);
    }

    setDob(value.slice(0, 10));
  }

  return (
    <form onSubmit={onCalculate} className="card">
      <div
        style={{
          display: "grid",
          gap: "18px",
        }}
      >
        <input
          className="input"
          placeholder="First Name"
          required
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />

        <input
          className="input"
          placeholder="Middle Name"
          value={middle}
          onChange={(e) => setMiddle(e.target.value)}
        />

        <input
          className="input"
          placeholder="Last Name"
          required
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="DD/MM/YYYY"
          maxLength={10}
          value={dob}
          onChange={handleDobChange}
        />

        <input
          type="tel"
          value={mobile}
          required
          maxLength={10}
          placeholder="Enter 10 Digit Mobile Number"
          onChange={(e) =>
            setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
          }
          className="input"
        />

        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "space-between",

            flexWrap: "wrap",

            marginTop: "8px",
          }}
        >
          <button
            className="btn"
            type="submit"
            style={{
              width: "180px",

              maxWidth: "100%",

              flex: "1",
            }}
          >
            Calculate
          </button>

          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: "14px 20px",

              minWidth: "120px",

              border: "1px solid #ddd",

              background: "#fff",

              borderRadius: "14px",

              cursor: "pointer",

              fontWeight: "600",

              flex: "0 0 auto",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}
