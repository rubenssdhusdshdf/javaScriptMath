function CalculateAverage(list) {
  //sum all the array elements / elements quantity

  let listSum = 0;
  for (let i = 0; i < list.length; i++) {
    listSum = listSum + list[i];
  }

  const average = listSum / list.length;
  console.log(average);
  return average;
}
