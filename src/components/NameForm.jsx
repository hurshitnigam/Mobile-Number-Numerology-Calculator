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

    return (
        <form
            onSubmit={onCalculate}
            className="card"
        >
            <div
                style={{
                    display: "grid",
                    gap: "18px",
                }}
            >

                <input
                    className="input"
                    placeholder="First Name"
                    value={first}
                    onChange={(e) =>
                        setFirst(
                            e.target.value
                        )
                    }
                />

                <input
                    className="input"
                    placeholder="Middle Name"
                    value={middle}
                    onChange={(e) =>
                        setMiddle(
                            e.target.value
                        )
                    }
                />

                <input
                    className="input"
                    placeholder="Last Name"
                    value={last}
                    onChange={(e) =>
                        setLast(
                            e.target.value
                        )
                    }
                />

                <input
                    className="input"
                    type="date"
                    value={dob}
                    onChange={(e) =>
                        setDob(
                            e.target.value
                        )
                    }
                />

                <input
                    className="input"
                    placeholder="Mobile Number"
                    value={mobile}
                    onChange={(e) =>
                        setMobile(
                            e.target.value
                        )
                    }
                />

                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        justifyContent:
                            "space-between",

                        flexWrap: "wrap",

                        marginTop: "8px",
                    }}
                >

                    <button
                        className="btn"
                        type="submit"
                        style={{
                            width: "180px",

                            maxWidth:
                                "100%",

                            flex: "1",
                        }}
                    >
                        Calculate
                    </button>

                    <button
                        type="button"
                        onClick={
                            handleReset
                        }
                        style={{
                            padding:
                                "14px 20px",

                            minWidth:
                                "120px",

                            border:
                                "1px solid #ddd",

                            background:
                                "#fff",

                            borderRadius:
                                "14px",

                            cursor:
                                "pointer",

                            fontWeight:
                                "600",

                            flex:
                                "0 0 auto",
                        }}
                    >
                        Reset
                    </button>

                </div>

            </div>
        </form>
    );
}