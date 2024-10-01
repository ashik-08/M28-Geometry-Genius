function calculateTriangleArea() {
  // get triangle base value
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  baseField.value = "";

  // get triangle height value
  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  heightField.value = "";

  // validate input
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }

  const triangleArea = 0.5 * base * height;

  // show triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = triangleArea;

  addToCalculationEntry("Triangle", triangleArea);
}

function calculateRectangleArea() {
  // get rectangle width value
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  widthField.value = "";

  // get rectangle length value
  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  lengthField.value = "";

  // validate input
  if (isNaN(width) || isNaN(length)) {
    alert("Please insert a number");
    return;
  }

  const rectangleArea = width * length;

  // show rectangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = rectangleArea;

  addToCalculationEntry("Rectangle", rectangleArea);
}

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");

  // validate input
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }

  const parallelogramArea = base * height;
  setElementInnerText("parallelogram-area", parallelogramArea);

  addToCalculationEntry("Parallelogram", parallelogramArea);
}

function calculateRhombusArea() {
  const d1 = getInputValue("rhombus-diagonal1");
  const d2 = getInputValue("rhombus-diagonal2");

  // validate input
  if (isNaN(d1) || isNaN(d2)) {
    alert("Please insert a number");
    return;
  }

  const rhombusArea = 0.5 * d1 * d2;
  setElementInnerText("rhombus-area", rhombusArea);

  addToCalculationEntry("Rhombus", rhombusArea);
}

function calculatePentagonArea() {
  const perimeter = getInputValue("pentagon-perimeter");
  const apothem = getInputValue("pentagon-apothem");

  // validate input
  if (isNaN(perimeter) || isNaN(apothem)) {
    alert("Please insert a number");
    return;
  }

  const pentagonArea = 0.5 * perimeter * apothem;
  setElementInnerText("pentagon-area", pentagonArea);

  addToCalculationEntry("Pentagon", pentagonArea);
}

function calculateEllipseArea() {
  const major = getInputValue("ellipse-semi-major");
  const minor = getInputValue("ellipse-semi-minor");

  // validate input
  if (isNaN(major) || isNaN(minor)) {
    alert("Please insert a number");
    return;
  }

  const ellipseArea = 3.14 * major * minor;
  setElementInnerText("ellipse-area", ellipseArea);

  addToCalculationEntry("Ellipse", ellipseArea);
}

// reusable get input value field in number
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  inputField.value = "";

  return value;
}

// reusable set of Area
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");

  const count = calculationEntry.childElementCount;

  const p = document.createElement("p");
  p.classList.add("my-4");
  p.innerHTML = `${
    count + 1
  }. ${areaType} &nbsp;&nbsp; ${area}cm<sup>2</sup>&nbsp;&nbsp;
    <button class="bg-[#1090D8] text-white font-semibold p-2 rounded-md">Convert to m<sup>2</sup>`;

  calculationEntry.appendChild(p);
}
