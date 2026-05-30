import React from "react";
import { motion } from "framer-motion";
motion
export default function MobileResult({
    mobile,
}) {
    if (!mobile) return null;

    return (
        <div
            style={{
                marginTop: "48px",
            }}
        >
            <h2 className="section-title">
                Mobile Analysis
            </h2>

            <div className="result-grid">

                {/* Mobile Summary */}
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
                    <h3>
                        Mobile Summary
                    </h3>

                    <br />

                    <p>Number:</p>

                    <strong>
                        {mobile.digits}
                    </strong>

                    <br />
                    <br />

                    <p>
                        Total:
                        <strong>
                            {" "}
                            {mobile.raw}
                        </strong>
                    </p>

                    <p>
                        Reduced:
                        <strong>
                            {" "}
                            {mobile.reduced}
                        </strong>
                    </p>
                </motion.div>

                {/* All Pairs */}
                <div className="result-card">
                    <h3>
                        All Pairs
                    </h3>

                    <br />

                    <div
                        style={{
                            display: "flex",
                            gap: "8px",
                            flexWrap: "wrap",
                        }}
                    >
                        {mobile.pairs.map(
                            (pair) => (
                                <span
                                    key={pair}
                                    className="badge neutral"
                                >
                                    {pair}
                                </span>
                            )
                        )}
                    </div>
                </div>

            </div>

            <div
                className="result-grid"
                style={{
                    marginTop: "24px",
                }}
            >
                
                {/* Positive Pair Benefits */}
                <div className="result-card">
                    <h3>
                        Positive Pair Benefits
                    </h3>

                    <br />

                    {mobile
                        .positiveBenefits
                        ?.length ? (
                        mobile
                            .positiveBenefits
                            .map(
                                (
                                    item
                                ) => (
                                    <div
                                        key={
                                            item.pair
                                        }
                                        style={{
                                            marginBottom:
                                                "16px",

                                            padding:
                                                "14px",

                                            background:
                                                "#f0fdf4",

                                            borderRadius:
                                                "12px",
                                        }}
                                    >
                                        <span
                                            className="badge positive"
                                        >
                                            {
                                                item.pair
                                            }
                                        </span>

                                        <br />
                                        <br />

                                        <p>
                                            {
                                                item.benefit
                                            }
                                        </p>
                                    </div>
                                )
                            )
                    ) : (
                        <p>
                            No positive
                            pairs found
                        </p>
                    )}
                </div>

                {/* Neutral Pairs */}
                <div className="result-card">
                    <h3>
                        Neutral Pairs
                    </h3>

                    <br />

                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            flexWrap: "wrap",
                        }}
                    >
                        {mobile.neutral.length ? (
                            mobile.neutral.map(
                                (pair) => (
                                    <span
                                        key={pair}
                                        className="badge neutral"
                                    >
                                        {pair}
                                    </span>
                                )
                            )
                        ) : (
                            "None"
                        )}
                    </div>
                </div>

            </div>

            {/* Negative Pairs */}
            <div
                style={{
                    marginTop: "24px",
                }}
            >
                <div className="result-card">

                    <h3>
                        Negative Pairs
                    </h3>

                    <br />

                    {mobile.negative
                        .length ? (
                        mobile.negative.map(
                            (
                                item
                            ) => (
                                <div
                                    key={
                                        item.pair
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
                                            item.pair
                                        }
                                    </span>

                                    <br />
                                    <br />

                                    <p>
                                        {
                                            item.problem
                                        }
                                    </p>
                                </div>
                            )
                        )
                    ) : (
                        <p>
                            No negative
                            pairs found
                        </p>
                    )}

                </div>
            </div>
        </div>
    );
}