export function getCompatibility(firstNumber, secondNumber) {
  const pair1 = `${firstNumber}${secondNumber}`;

  const pair2 = `${secondNumber}${firstNumber}`;

  const friendly = [
    "15",
    "51",
    "17",
    "71",
    "19",
    "91",
    "25",
    "52",
    "29",
    "92",
    "37",
    "73",
    "38",
    "83",
    "47",
    "74",
    "57",
    "75",
    "35",
    "53",
    "36",
    "63",
    "39",
    "93",
    "59",
    "95",
    "67",
    "76",
    "69",
    "96",
    "78",
    "87",
    "89",
    "98",
  ];

  const enemy = [
    "14",
    "41",
    "16",
    "61",
    "18",
    "81",
    "23",
    "32",
    "26",
    "62",
    "27",
    "72",
    "28",
    "82",
    "34",
    "43",
    "45",
    "54",
    "46",
    "64",
    "48",
    "84",
    "68",
    "86",
  ];

  if (friendly.includes(pair1) || friendly.includes(pair2)) {
    return {
      status: "Friendly",
      color: "positive",
    };
  }

  if (enemy.includes(pair1) || enemy.includes(pair2)) {
    return {
      status: "Enemy",
      color: "negative",
    };
  }

  return {
    status: "Neutral",
    color: "neutral",
  };
}
