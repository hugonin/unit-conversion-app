const convertBtnEl = document.getElementById("btn-convert");

let numToConvertEl = document.getElementById("num-convert");
let lengthResultEl = document.getElementById("length-result");
let volumeResultEl = document.getElementById("volume-result");
let massResultEl = document.getElementById("mass-result");

let valToConvert = 0;

let yearEl = document.getElementById("year");

function convertLength() {
  let result = `${valToConvert} meters = ${(valToConvert * 3.28084).toFixed(
    3
  )} feet | ${valToConvert} feet = ${(valToConvert / 3.28084).toFixed(
    3
  )} meters `;
  return (lengthResultEl.innerHTML = result);
}

function convertVolume() {
  let result = `${valToConvert} liters = ${(valToConvert * 0.264172).toFixed(
    3
  )} gallons | ${valToConvert} gallons = ${(valToConvert / 0.264172).toFixed(
    3
  )} liters `;

  return (volumeResultEl.innerHTML = result);
}

function convertMass(e) {
  let result = `${valToConvert} kilos = ${(valToConvert * 2.204623).toFixed(
    3
  )} pounds | ${valToConvert} pounds = ${(valToConvert / 2.204623).toFixed(
    3
  )} kilos `;

  return (massResultEl.innerHTML = result);
}

function displayYear() {
  yearEl.innerHTML = new Date().getFullYear();
}

numToConvertEl.oninput = function () {
  valToConvert = numToConvertEl.value;
  return valToConvert;
};

convertBtnEl.addEventListener("click", () => {
  convertLength();
  convertVolume();
  convertMass();
});

displayYear();
