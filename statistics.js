//class Math {
//static isEven() {}
//static isOdd() {}
//static calculateModa() {}
//static calculateAverage() {}
//static orderList() {}
//static orderListBidimensional() {}
//static calculateMedian() {}
//}

const Math = {};

Math.isEven = function IsEven(list) {
  return !(list.length % 2);
};

Math.isOdd = function isOdd(list) {
  return list.length % 2;
};

Math.calculateModa = function calculateModa(list) {
  const listCount = {};
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (listCount[element]) {
      listCount[element] += 1;
    } else {
      listCount[element] = 1;
    }
  }

  const listArray = Object.entries(listCount);
  const orderedList = orderListBidimensional(listArray, 1);
  const orderedListMaxNumber = orderedList[orderedList.length - 1];
  console.log({ listCount, listArray, orderedList, orderedListMaxNumber });

  console.log("The most repeated value is: " + orderedListMaxNumber[0]);
  const moda = orderedListMaxNumber[0];
  return moda;
};

Math.calculateAverage = function calculateAverage(list) {
  function sumAllElements(accumulatedValue, newValue) {
    return accumulatedValue + newValue;
  }

  const sumList = list.reduce(sumAllElements);
  const average = sumList / list.length;
  return average;
};

Math.orderList = function orderList(disorderedList) {
  function orderListSort(accumulatedValue, newValue) {
    return accumulatedValue - newValue;
  }

  const list = disorderedList.sort(orderListSort);
  return list;
};

Math.orderListBidimensional = function orderListBidimensional(disorderedList) {
  function orderListSort(accumulatedValue, newValue) {
    return accumulatedValue - newValue;
  }

  const list = disorderedList.sort(orderListSort);
  return list;
};

Math.calculateMedian = function calculateMedian(list) {
  const orderedList = Math.orderList(list);
  const listIsEven = Math.isEven(orderedList);

  if (listIsEven) {
    const indexFirstHalfListEven = orderedList.length / 2 - 1;
    const indexSecondHalfListEven = orderedList.length / 2;

    const listHalfs = [];
    listHalfs.push(orderedList[indexFirstHalfListEven]);
    listHalfs.push(orderedList[indexSecondHalfListEven]);

    const medianListEven = Math.calculateAverage(listHalfs);
    return medianListEven;
  } else {
    const indexHalfListOdd = Math.floor(orderedList.length / 2);
    const medianListOdd = orderedList[indexHalfListOdd];
    return medianListOdd;
  }
};
