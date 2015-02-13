var triangle = function(sideA, sideB, sideC) {
  if (sideA + sideB <= sideC) {
    return "NOT A TRIANGLE!"
  } else if (sideA + sideC <= sideB) {
    return "NOT A TRIANGLE!"
  } else if (sideB + sideC <= sideA) {
    return "NOT A TRIANGLE!"
  } else if ((sideA === sideB) && (sideB === sideC)) {
    return "Equilateral"
  } else if ((sideA !== sideB) && (sideB !== sideC)) {
    return "Scalene"
  }
};
