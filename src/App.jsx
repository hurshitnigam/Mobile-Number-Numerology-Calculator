import React, { useState } from "react";

// Numerology Calculator - Single file React component built for Vite + Tailwind
// Mobile-first responsive layout. Professional, clean UI.
// Features implemented (as requested):
// 1) Form inputs: First, Middle, Last name, DOB, Mobile number
// 2) Chaldean name calculations (first/middle/last separately)
// 3) Mulank and Bhagyaank calculations
// 4) Mobile number digit-sum (single digit), pairs analysis (Positive/Neutral/Negative)
// 5) Problems column for Negative pairs (verbatim as provided)
// 6) Relationship (Friendly/Enemy/Neutral) between Mulank/Bhagyaank and Mobile digit
// 7) Caution note and contact details area

// Chaldean mapping used here:
// 1 = A, I, J, Q, Y
// 2 = B, K, R
// 3 = C, G, L, S
// 4 = D, M, T
// 5 = E, H, N, X
// 6 = U, V, W
// 7 = O, Z
// 8 = F, P

const CHALDEAN = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8,
};

const PositivePairs = ["15", "51", "17", "71", "19", "91", "25", "52", "29", "92", "37", "73", "38", "83", "47", "74", "57", "75", "35", "53", "36", "63", "39", "93", "59", "95", "67", "76", "69", "96", "78", "87", "89", "98", "11", "33", "55", "66", "99"];
const NegativePairs = ["41", "14", "16", "61", "18", "81", "24", "42", "27", "72", "28", "82", "34", "43", "45", "54", "46", "64", "48", "84", "68", "86", "58", "85", "22", "44", "77", "88"];
const NeutralPairs = ["23", "32", "24", "42", "35", "53", "58", "85", "49", "94", "56", "65", "79", "97"];

const Problems = {
  "41": "Bank issue loan liability legal notice health issue accident surgery bone related problems hard work",
  "14": "Bank issue loan liability legal notice health issue accident surgery bone related problems hard work",
  "16": "spouse health issues married life issues or delay in marriage job loss in stability in career less income money issues",
  "61": "spouse health issues married life issues or delay in marriage job loss in stability in career less income money issues",
  "18": "spouse health issues government related issues need to job frequently father son misunderstanding ego issues early loss of father father bad health",
  "81": "spouse health issues government related issues need to job frequently father son misunderstanding ego issues early loss of father father bad health",
  "24": "ki patience to get achieve anything depression Modi nature negative thoughts self destruction brain is working 24 hours",
  "42": "ki patience to get achieve anything depression Modi nature negative thoughts self destruction brain is working 24 hours",
  "26": "not good for student",
  "62": "not good for student",
  "28": "partnership not suitable depression mental problems in serial feeling jealous competitive feeling need to spend money on medicine ceiling leakage to marriages in family",
  "82": "partnership not suitable depression mental problems in serial feeling jealous competitive feeling need to spend money on medicine ceiling leakage to marriages in family",
  "34": "breathing issues child will not stay with parent heart related disease paralysis paralysis to sum in the family less confidence Stubborn",
  "43": "breathing issues child will not stay with parent heart related disease paralysis paralysis to sum in the family less confidence Stubborn",
  "45": "sister daughter healthy shoes life mein problem need to visit Court Hospital medicine frequently native has to lie with restrictions intelligent and voice",
  "54": "sister daughter healthy shoes life mein problem need to visit Court Hospital medicine frequently native has to lie with restrictions intelligent and voice",
  "46": "skin disease patches on skin Extra marital affairs relationship mein hai UTI infection in female inter cast marriage",
  "64": "skin disease patches on skin Extra marital affairs relationship mein hai UTI infection in female inter cast marriage",
  "48": "incurable problem chronic disease deficiency of sexual pleasure depression addiction stress blood related disease legal issues",
  "84": "incurable problem chronic disease deficiency of sexual pleasure depression addiction stress blood related disease legal issues",
  "58": "Manish Tak block financial losses calculative mind person does not work related to money Finance tax about lacs and crores Bada sochte Hain Aise log money stuck",
  "85": "Manish Tak block financial losses calculative mind person does not work related to money Finance tax about lacs and crores Bada sochte Hain Aise log money stuck",
  "68": "I just breast related problems issuing anyone organ of body surgical health problems suitable surgeon doctor this is known as operational number",
  "86": "I just breast related problems issuing anyone organ of body surgical health problems suitable surgeon doctor this is known as operational number",
  "22": "",
  "44": "",
  "77": "",
  "88": "",
};

function sumToSingle(num) {
  // Reduce to single digit (1-9). Keep 11/22 as per common practice? User didn't request master numbers so we'll reduce to 1-9.
  let s = Math.abs(num);
  while (s > 9) {
    s = String(s).split("").reduce((a, b) => a + Number(b), 0);
  }
  return s;
}

function calculateNameValue(name = "") {
  // Calculate chaldean sum for a given name (string) and reduce to single digit
  const letters = name.toUpperCase().replace(/[^A-Z]/g, "");
  let total = 0;
  for (const ch of letters) {
    total += CHALDEAN[ch] || 0;
  }
  const reduced = sumToSingle(total);
  return { raw: total, reduced };
}

function calcMulankFromDOB(dobStr) {
  // Assuming DOB is YYYY-MM-DD or dd/mm/yyyy. We'll parse carefully.
  if (!dobStr) return null;
  // Try to support common inputs: yyyy-mm-dd (HTML date input) or dd/mm/yyyy
  let parts;
  if (dobStr.includes("-")) {
    // yyyy-mm-dd from <input type=date />
    const [y, m, d] = dobStr.split("-");
    const day = Number(d);
    return day ? sumToSingle(day) : null;
  } else if (dobStr.includes("/")) {
    parts = dobStr.split("/");
    // dd/mm/yyyy
    const day = Number(parts[0]);
    return day ? sumToSingle(day) : null;
  }
  return null;
}

function calcBhagyankFromName(nameFull) {
  // Bhagyaank (Destiny) is typically derived from full name letters sum.
  const letters = nameFull.toUpperCase().replace(/[^A-Z]/g, "");
  let total = 0;
  for (const ch of letters) total += CHALDEAN[ch] || 0;
  return sumToSingle(total);
}

function extractPairsFromMobile(mobile = "") {
  // Expect 10 digits (or more). We'll extract all adjacent pairs of digits.
  const digits = mobile.replace(/[^0-9]/g, "");
  const pairs = [];
  for (let i = 0; i < digits.length - 1; i++) {
    pairs.push(digits[i] + digits[i + 1]);
  }
  return { digits, pairs };
}

export default function NumerologyCalculatorApp() {
  const [first, setFirst] = useState("");
  const [middle, setMiddle] = useState("");
  const [last, setLast] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [result, setResult] = useState(null);

  function onCalculate(e) {
    e && e.preventDefault();
    // Name calculations
    const firstCalc = calculateNameValue(first);
    const middleCalc = calculateNameValue(middle);
    const lastCalc = calculateNameValue(last);

    const fullName = `${first} ${middle} ${last}`.trim();
    const bhagyank = calcBhagyankFromName(fullName) || "-";
    const mulank = calcMulankFromDOB(dob) || "-";

    // Mobile analysis
    const { digits, pairs } = extractPairsFromMobile(mobile);
    const mobileDigitSum = digits ? sumToSingle(String(digits).split("").reduce((a, b) => a + Number(b), 0)) : null;

    const positiveFound = [];
    const neutralFound = [];
    const negativeFound = [];

    for (const p of pairs) {
      if (PositivePairs.includes(p)) positiveFound.push(p);
      else if (NegativePairs.includes(p)) negativeFound.push(p);
      else if (NeutralPairs.includes(p)) neutralFound.push(p);
    }

    // Problems for negative pairs (in separate column)
    const negativeProblems = negativeFound.map(p => ({ pair: p, problem: Problems[p] || "" }));

    // Determine Friendly/Enemy/Neutral between Mulank/Bhagyank and Mobile digit
    const relationships = {};
    if (mobileDigitSum) {
      const checkPairs = (a, b) => {
        const p1 = `${a}${b}`;
        const p2 = `${b}${a}`;
        if (PositivePairs.includes(p1) || PositivePairs.includes(p2)) return "Friendly";
        if (NegativePairs.includes(p1) || NegativePairs.includes(p2)) return "Enemy";
        if (NeutralPairs.includes(p1) || NeutralPairs.includes(p2)) return "Neutral";
        return "Neutral";
      };
      relationships.mulank_vs_mobile = mulank !== "-" ? checkPairs(mulank, mobileDigitSum) : "-";
      relationships.bhagyank_vs_mobile = bhagyank !== "-" ? checkPairs(bhagyank, mobileDigitSum) : "-";
    }

    setResult({
      firstCalc,
      middleCalc,
      lastCalc,
      mulank,
      bhagyank,
      mobileDigitSum,
      positiveFound,
      neutralFound,
      negativeFound,
      negativeProblems,
      relationships,
      digits,
      pairs,
      fullName,
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Numerology Number Calculator</h1>
          <p className="text-sm text-gray-600 mt-1">Clean, professional & responsive — mobile-first design.</p>
        </header>

        <form onSubmit={onCalculate} className="bg-white shadow-sm rounded-lg p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input value={first} onChange={e => setFirst(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="First Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Middle Name</label>
            <input value={middle} onChange={e => setMiddle(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Middle Name (optional)" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input value={last} onChange={e => setLast(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 p-2" placeholder="Last Name" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">DOB</label>
              <input type="date" value={dob} onChange={e => setDob(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input value={mobile} onChange={e => setMobile(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 p-2" placeholder="e.g. 9876543210" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Calculate</button>
            <button type="button" onClick={() => { setFirst(""); setMiddle(""); setLast(""); setDob(""); setMobile(""); setResult(null); }} className="text-sm text-gray-600">Reset</button>
          </div>
        </form>

        {result && (
          <section className="mt-6 grid grid-cols-1 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-medium">Name Calculation (Chaldean)</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 border rounded">
                  <div className="text-sm font-medium text-gray-700">First Name</div>
                  <div className="mt-1">Raw: {result.firstCalc.raw} | Reduced: {result.firstCalc.reduced}</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="text-sm font-medium text-gray-700">Middle Name</div>
                  <div className="mt-1">Raw: {result.middleCalc.raw} | Reduced: {result.middleCalc.reduced}</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="text-sm font-medium text-gray-700">Last Name</div>
                  <div className="mt-1">Raw: {result.lastCalc.raw} | Reduced: {result.lastCalc.reduced}</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 border rounded">
                  <div className="text-sm text-gray-600">Full Name</div>
                  <div className="font-medium">{result.fullName}</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="text-sm text-gray-600">Bhagyank (Name/Destiny)</div>
                  <div className="font-medium">{result.bhagyank}</div>
                </div>
                <div className="p-3 border rounded">
                  <div className="text-sm text-gray-600">Mulank (Birth Day)</div>
                  <div className="font-medium">{result.mulank}</div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-medium">Name Analysis using Mulank & Bhagyank</h3>
                <p className="text-sm text-gray-600 mt-2">(Automatically generated summary based on Mulank & Bhagyaank - keep this professional; you can replace with your own business text later.)</p>
                <ul className="list-disc ml-5 mt-2 text-sm">
                  <li>Mulank ({result.mulank}) gives an idea about core character and life themes.</li>
                  <li>Bhagyank ({result.bhagyank}) indicates destiny trends and name influences.</li>
                  <li>Combine both to give personalised guidance — for consultations, ask an expert.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
              <h2 className="text-lg font-medium">Mobile Number Analysis</h2>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 border rounded">
                  <div className="text-sm text-gray-600">Digits</div>
                  <div className="font-medium">{result.digits}</div>

                  <div className="mt-2 text-sm text-gray-600">Digit Sum (single digit)</div>
                  <div className="font-medium">{result.mobileDigitSum}</div>

                  <div className="mt-2 text-sm text-gray-600">Positive Pairs</div>
                  <div>{result.positiveFound.length ? result.positiveFound.join(", ") : "None"}</div>

                  <div className="mt-2 text-sm text-gray-600">Neutral Pairs</div>
                  <div>{result.neutralFound.length ? result.neutralFound.join(", ") : "None"}</div>

                  <div className="mt-2 text-sm text-gray-600">Negative Pairs</div>
                  <div>{result.negativeFound.length ? result.negativeFound.join(", ") : "None"}</div>
                </div>

                <div className="p-3 border rounded">
                  <div className="text-sm text-gray-600">All Pairs (adjacent)</div>
                  <div className="font-mono text-sm">{result.pairs.join(", ")}</div>

                  <div className="mt-3 text-sm text-gray-600">Negative Pairs & Problems</div>
                  <div className="mt-2">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left border-b"><th className="pb-1">Pair</th><th className="pb-1">Problem</th></tr>
                      </thead>
                      <tbody>
                        {result.negativeProblems.length ? result.negativeProblems.map(np => (
                          <tr key={np.pair} className="align-top border-b">
                            <td className="py-2 font-medium">{np.pair}</td>
                            <td className="py-2">{np.problem}</td>
                          </tr>
                        )) : (
                          <tr><td colSpan={2} className="py-2">None</td></tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 border rounded bg-yellow-50">
                <div className="font-medium">Relationships with Mobile Number</div>
                <div className="text-sm mt-2">Mulank vs Mobile: <strong>{result.relationships.mulank_vs_mobile}</strong></div>
                <div className="text-sm mt-1">Bhagyank vs Mobile: <strong>{result.relationships.bhagyank_vs_mobile}</strong></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-medium">Caution & Contact</h2>
              <div className="mt-2 text-sm">Caution: <strong>Ask expert for any change in mobile number</strong></div>
              <div className="mt-4 text-sm">For more information or personalised consultation, contact:</div>
              <div className="mt-2 font-medium">Your Business Name<br />Phone: +91 XXXXXXXXXX<br />Email: contact@yourbusiness.com</div>
            </div>

          </section>
        )}

        <footer className="mt-6 text-xs text-gray-500 text-center">
          <div>Built for business use. Keep problem descriptions verbatim as requested.</div>
        </footer>
      </div>
    </div>
  );
}
