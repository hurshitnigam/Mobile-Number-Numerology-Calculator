import React from "react";

export default function MobileResult({
    mobile,
}) {
    if (!mobile)
        return null;

    return (
        <div
            style={{
                marginTop: "48px",
            }}
        >
            <h2
                className="section-title"
            >
                Mobile Analysis
            </h2>

            <div
                className="result-grid"
            >

                <div
                    className="result-card"
                >
                    <h3>
                        Mobile Summary
                    </h3>

                    <br />

                    <p>
                        Number:
                    </p>

                    <strong>
                        {
                            mobile
                                .digits
                        }
                    </strong>

                    <br />
                    <br />

                    <p>
                        Total:
                        {" "}
                        <strong>
                            {
                                mobile
                                    .raw
                            }
                        </strong>
                    </p>

                    <p>
                        Reduced:
                        {" "}
                        <strong>
                            {
                                mobile
                                    .reduced
                            }
                        </strong>
                    </p>

                </div>

                <div
                    className="result-card"
                >
                    <h3>
                        All Pairs
                    </h3>

                    <br />

                    <div
                        style={{
                            display:
                                "flex",

                            gap:
                                "8px",

                            flexWrap:
                                "wrap",
                        }}
                    >
                        {
                            mobile
                                .pairs
                                .map(
                                    (
                                        pair
                                    ) => (
                                        <span
                                            key={
                                                pair
                                            }
                                            className="badge neutral"
                                        >
                                            {
                                                pair
                                            }
                                        </span>
                                    )
                                )
                        }
                    </div>

                </div>

            </div>

            <div
                className="result-grid"
                style={{
                    marginTop:
                        "24px",
                }}
            >

                <div
                    className="result-card"
                >
                    <h3>
                        Positive Pairs
                    </h3>

                    <br />

                    <div
                        style={{
                            display:
                                "flex",

                            flexWrap:
                                "wrap",

                            gap:
                                "10px",
                        }}
                    >

                        {
                            mobile
                                .positive
                                .length
                                ? (
                                    mobile
                                        .positive
                                        .map(
                                            (
                                                pair
                                            ) => (
                                                <span
                                                    key={
                                                        pair
                                                    }
                                                    className="badge positive"
                                                >
                                                    {
                                                        pair
                                                    }
                                                </span>
                                            )
                                        )
                                )
                                : (
                                    "None"
                                )
                        }

                    </div>

                </div>

                <div
                    className="result-card"
                >
                    <h3>
                        Neutral Pairs
                    </h3>

                    <br />

                    <div
                        style={{
                            display:
                                "flex",

                            gap:
                                "10px",

                            flexWrap:
                                "wrap",
                        }}
                    >

                        {
                            mobile
                                .neutral
                                .length
                                ? (
                                    mobile
                                        .neutral
                                        .map(
                                            (
                                                pair
                                            ) => (
                                                <span
                                                    key={
                                                        pair
                                                    }
                                                    className="badge neutral"
                                                >
                                                    {
                                                        pair
                                                    }
                                                </span>
                                            )
                                        )
                                )
                                : (
                                    "None"
                                )
                        }

                    </div>

                </div>

            </div>

            <div
                style={{
                    marginTop:
                        "24px",
                }}
            >

                <div
                    className="result-card"
                >

                    <h3>
                        Negative Pairs
                    </h3>

                    <br />

                    {
                        mobile
                            .negative
                            .length
                            ? (
                                mobile
                                    .negative
                                    .map(
                                        (
                                            item
                                        ) => (
                                            <div
                                                key={
                                                    item
                                                        .pair
                                                }
                                                style={{
                                                    marginBottom:
                                                        "18px",

                                                    padding:
                                                        "16px",

                                                    background:
                                                        "#fff5f5",

                                                    borderRadius:
                                                        "14px",
                                                }}
                                            >

                                                <span
                                                    className="badge negative"
                                                >
                                                    {
                                                        item
                                                            .pair
                                                    }
                                                </span>

                                                <br />
                                                <br />

                                                <p>
                                                    {
                                                        item
                                                            .problem
                                                    }
                                                </p>

                                            </div>
                                        )
                                    )
                            )
                            : (
                                <p>
                                    No
                                    negative
                                    pairs
                                    found
                                </p>
                            )
                    }

                </div>

            </div>

        </div>
    );
}