export default function CompatibilityCard({
    compatibility,
}) {
    if (!compatibility)
        return null;

    return (
        <div
            className="result-card"
            style={{
                marginTop: "30px",
            }}
        >
            <h2>
                Compatibility
            </h2>

            <br />

            <div>

                <p>
                    Mulank ↔ Namank :
                    <span
                        className={`badge ${compatibility.mulankNamank.color}`}
                    >
                        {
                            compatibility.mulankNamank.status
                        }
                    </span>
                </p>

                <br />

                <p>
                    Bhagyank ↔ Namank :
                    <span
                        className={`badge ${compatibility.bhagyankNamank.color}`}
                    >
                        {
                            compatibility.bhagyankNamank.status
                        }
                    </span>
                </p>

                <br />

                <p>
                    Mulank ↔ Mobile :
                    <span
                        className={`badge ${compatibility.mulankMobile.color}`}
                    >
                        {
                            compatibility.mulankMobile.status
                        }
                    </span>
                </p>

                <br />

                <p>
                    Bhagyank ↔ Mobile :
                    <span
                        className={`badge ${compatibility.bhagyankMobile.color}`}
                    >
                        {
                            compatibility.bhagyankMobile.status
                        }
                    </span>
                </p>

            </div>
        </div>
    );
}