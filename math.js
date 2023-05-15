//Square maths

console.group("Cuadrado");

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  };
}

//Triangle Maths

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 6;
const alturaTriangulo = 5.5;
const baseTriangulo = 3;

console.groupEnd("Cuadrado");

console.group("Triangulo");

function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };
}

console.groupEnd("Cuadrado");

//Circle

console.group("Circle");

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
const areaCirculo = radioCirculo * radioCirculo * PI;

function calcularCirculo(radio) {
  const diametro = radio * 2;
  const radioAlCuadrado = Math.pow(radio, 2);

  return {
    circunferencia: diametro * Math.PI,
    area: radioAlCuadrado * Math.PI.toFixed(18),
  };
}

console.groupEnd("Circle");
