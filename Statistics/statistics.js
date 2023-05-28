function CalculateAverage(list) {
  //sum all the array elements / elements quantity

  let listSum = 0;
  for (let i = 0; i < list.lenght; i++) {
    listSum = sumList + list[i];
  }

  const average = listSum / list.lenght;
  console.log(average);
  return average;
}
