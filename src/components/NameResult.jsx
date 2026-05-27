import React from "react";
import NumberCard from "./NumberCard";
import { motion } from "framer-motion";

export default function NameResult({
    name,
    mulank,
    bhagyank,
    numberInfo,
}) {
    if (!name) return null;

    return (
        <div
            style={{
                marginTop: "32px",
            }}
        >
            <h2
                className="section-title"
            >
                Name Analysis
            </h2>

            <div
                className="result-grid"
            >

                <motion.div
                    className="result-card"

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: .5
                    }}
                >
                    <h3>
                        Full Name
                    </h3>

                    <br />

                    <p>
                        {
                            name.fullName
                        }
                    </p>

                    <br />

                    <p>
                        Total:
                        <strong>
                            {" "}
                            {
                                name.full
                                    .raw
                            }
                        </strong>
                    </p>

                    <p>
                        Reduced:
                        <strong>
                            {" "}
                            {
                                name.full
                                    .reduced
                            }
                        </strong>
                    </p>
                </motion.div>

                <div
                    className="result-card"
                >
                    <h3>
                        Name Breakdown
                    </h3>

                    <br />

                    <p>
                        First:
                        {" "}
                        {
                            name.first
                                .raw
                        }
                        →
                        {
                            name.first
                                .reduced
                        }
                    </p>

                    <p>
                        Middle:
                        {" "}
                        {
                            name.middle
                                .raw
                        }
                        →
                        {
                            name.middle
                                .reduced
                        }
                    </p>

                    <p>
                        Last:
                        {" "}
                        {
                            name.last
                                .raw
                        }
                        →
                        {
                            name.last
                                .reduced
                        }
                    </p>

                </div>

                <div
                    className="result-card"
                >
                    <h3>
                        Mulank
                    </h3>

                    <br />

                    <p>
                        Raw:
                        {
                            mulank.raw
                        }
                    </p>

                    <p>
                        Reduced:
                        {
                            mulank.reduced
                        }
                    </p>
                </div>

                <div
                    className="result-card"
                >
                    <h3>
                        Bhagyank
                    </h3>

                    <br />

                    <p>
                        Raw:
                        {
                            bhagyank.raw
                        }
                    </p>

                    <p>
                        Reduced:
                        {
                            bhagyank
                                .reduced
                        }
                    </p>
                </div>

            </div>

            <div
                style={{
                    marginTop:
                        "24px",

                    display:
                        "grid",

                    gap:
                        "20px",
                }}
            >

                <NumberCard
                    title="Mulank Details"
                    data={
                        numberInfo[
                        mulank
                            .reduced
                        ]
                    }
                />

                <NumberCard
                    title="Bhagyank Details"
                    data={
                        numberInfo[
                        bhagyank
                            .reduced
                        ]
                    }
                />

            </div>

        </div>
    );
}