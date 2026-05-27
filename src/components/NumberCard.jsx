import React from "react";

export default function NumberCard({
    title,
    data,
}) {
    if (!data)
        return null;

    return (
        <div
            className="result-card"
        >

            <h3>
                {title}
            </h3>

            <br />

            <p>
                <strong>
                    Personality
                </strong>

                <br />

                {
                    data
                        .personality
                }
            </p>

            <br />

            <p>
                <strong>
                    Career
                </strong>

                <br />

                {
                    data
                        .career
                }
            </p>

            <br />

            <p>
                <strong>
                    Challenge
                </strong>

                <br />

                {
                    data
                        .challenge
                }
            </p>

        </div>
    );
}