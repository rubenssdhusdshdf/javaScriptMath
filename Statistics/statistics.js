function isEven(list) {
  return !(list.length % 2);
}

function calculateMedian(list) {
  const sortedList = list.sort((a, b) => a - b);
  const listIsEven = isEven(list);

  if (listIsEven) {
    const indexHalfEvenList = list.length / 2;
    const evenListMedian =
      (sortedList[indexHalfEvenList - 1] + sortedList[indexHalfEvenList]) / 2;
    return evenListMedian;
  } else {
    const indexHalfOddList = Math.floor(list.length / 2);
    const oddListMedian = sortedList[indexHalfOddList];
    return oddListMedian;
  }
}
