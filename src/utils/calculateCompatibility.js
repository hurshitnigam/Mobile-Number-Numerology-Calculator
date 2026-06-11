const compatibilityMap = {
  1: {
    friendly: [1, 2, 3, 5, 6, 9],
    enemy: [8],
  },

  2: {
    friendly: [1, 2, 3, 5],
    enemy: [8, 4, 9],
  },

  3: {
    friendly: [1, 2, 3, 5, 7],
    enemy: [6],
  },

  4: {
    friendly: [1, 5, 6, 7],
    enemy: [2, 4, 8, 9],
  },

  5: {
    friendly: [1, 2, 3, 5, 6],
    enemy: [],
  },

  6: {
    friendly: [1, 5, 6, 7],
    enemy: [3],
  },

  7: {
    friendly: [1, 3, 5, 6],
    enemy: [],
  },

  8: {
    friendly: [3, 4, 5, 6, 7],
    enemy: [1, 2, 4, 8],
  },

  9: {
    friendly: [1, 3, 5],
    enemy: [4, 2],
  },
};

export function getCompatibility(firstNumber, secondNumber) {
  const data = compatibilityMap[firstNumber];

  if (!data) {
    return {
      status: "Neutral",
      color: "neutral",
    };
  }

  if (data.friendly.includes(secondNumber)) {
    return {
      status: "Friendly",
      color: "positive",
    };
  }

  if (data.enemy.includes(secondNumber)) {
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
