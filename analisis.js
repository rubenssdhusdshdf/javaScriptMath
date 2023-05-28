//Juanita analysis
const personInSearch = "Juanita";

function findPerson(personInSearch) {
  return salarios.find((person) => person.name == personInSearch);
}

//Media per person

function personMedian(personName) {
  const jobs = findPerson(personName).trabajos;

  const salarios = jobs.map(function (element) {
    // map allows me to read all the array elements and create a new array from the initial array
    return element.salario;
  });

  const medianSalaries = Math.calculateMedian(salarios);

  console.log(medianSalaries);
  return medianSalaries;
}
