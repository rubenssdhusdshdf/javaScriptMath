function isEven(list) {
  return !(list.length % 2);
}

function isOdd(list) {
  return list.length % 2;
}

function calculateModa(list) {
  const listCount = {};
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (listCount[element]) {
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  }
  console.log(listCount);
}

function calculateAverage(list) {
  function sumAllElements(accumulatedValue, newValue) {
    return accumulatedValue + newValue;
  }

  const sumList = list.reduce(sumAllElements);
  const average = sumList / list.length;
  return average;
}

function orderList(disorderedList) {
  function orderListSort(accumulatedValue, newValue) {
    return accumulatedValue - newValue;
  }

  const list = disorderedList.sort(orderListSort);
  return list;
}

function calculateMedian(list) {
  const orderedList = orderList(list);
  const listIsEven = isEven(orderedList);

  if (listIsEven) {
    const indexFirstHalfListEven = orderedList.length / 2 - 1;
    const indexSecondHalfListEven = orderedList.length / 2;

    const listHalfs = [];
    listHalfs.push(orderedList[indexFirstHalfListEven]);
    listHalfs.push(orderedList[indexSecondHalfListEven]);

    const medianListEven = calculateAverage(listHalfs);
    return medianListEven;
  } else {
    const indexHalfListOdd = Math.floor(orderedList.length / 2);
    const medianListOdd = orderedList[indexHalfListOdd];
    return medianListOdd;
  }
}

// Example usage:
const myList = [5, 2, 8, 3, 9];
console.log(calculateMedian(myList));
