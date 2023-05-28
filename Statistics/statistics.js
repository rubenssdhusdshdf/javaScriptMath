function isEven(list) {
  return !(list.length % 2);
}
function isOdd(list) {
  return list.length % 2;
}

function calculateMedian(list) {
  const listIsEven = isEven(list);

  if (listIsEven) {
    const indexFirstHalfListEven = list.length / 2 - 1;
    const indexSecondHalfListEven = list.length / 2;

    const listHalfs = [];
    listHalfs.push(list[indexFirstHalfListEven]);
    listHalfs.push(list[indexSecondHalfListEven]);

    const medianListEven = calculateAverage(listHalfs);
    return medianListEven;
  } else {
    const indexHalfListOdd = Math.floor(list.length / 2);
    const medianListOdd = list[indexHalfListEven];
    console.log(indexHalfListEven);
    console.log(medianListEven);
    return medianListEven;
  }
}

function calculateAverage(list) {
  function sumAllElements(accumulatedValue, newValue) {
    return accumulatedValue + newValue;
  }

  const sumList = list.reduce(sumAllElements);
  const average = sumList / list.length;
  // console.log(promedio);
  return average;
}
