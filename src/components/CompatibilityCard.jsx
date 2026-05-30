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
                <div className="compatibility-row">
                    <span>Mulank ↔ Namank</span>

                    <span
                        className={`badge ${compatibility.mulankNamank.color}`}
                    >
                        {compatibility.mulankNamank.status}
                    </span>
                </div>

                <div className="compatibility-row">
                    <span>Bhagyank ↔ Namank</span>

                    <span
                        className={`badge ${compatibility.bhagyankNamank.color}`}
                    >
                        {compatibility.bhagyankNamank.status}
                    </span>
                </div>

                <div className="compatibility-row">
                    <span>Mulank ↔ Mobile</span>

                    <span
                        className={`badge ${compatibility.mulankMobile.color}`}
                    >
                        {compatibility.mulankMobile.status}
                    </span>
                </div>

                <div className="compatibility-row">
                    <span>Bhagyank ↔ Mobile</span>

                    <span
                        className={`badge ${compatibility.bhagyankMobile.color}`}
                    >
                        {compatibility.bhagyankMobile.status}
                    </span>
                </div>

                <div className="compatibility-row">
                    <span>Namank ↔ Mobile</span>

                    <span
                        className={`badge ${compatibility.namankMobile.color}`}
                    >
                        {compatibility.namankMobile.status}
                    </span>
                </div>
            </div>
        </div>
    );
}