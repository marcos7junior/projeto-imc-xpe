function start() {
  let inputWeight = document.querySelector('#input-weight');
  let inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', evaluateEntriesImc);
  inputHeight.addEventListener('input', evaluateEntriesImc);

  evaluateEntriesImc();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function evaluateEntriesImc() {
  let inputWeight = document.querySelector('#input-weight');
  let inputHeight = document.querySelector('#input-height');
  let imcResult = document.querySelector('#imc-result');

  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);

  let imc = calculateImc(weight, height);
  let formattedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = formattedImc;
  clinicResultForImc(imc.toFixed(1));
}

function clinicResultForImc(valueImc) {
  let clinicResult = document.querySelector('#clinic-result');

  if (valueImc >= 16 && valueImc <= 16.9) {
    clinicResult.textContent = 'Muito abaixo do peso';
  } else if (valueImc >= 17 && valueImc <= 18.4) {
    clinicResult.textContent = 'Abaixo do peso';
  } else if (valueImc >= 18.5 && valueImc <= 24.9) {
    clinicResult.textContent = 'Peso normal';
  } else if (valueImc >= 25 && valueImc <= 29.9) {
    clinicResult.textContent = 'Acima do peso';
  } else if (valueImc >= 30 && valueImc <= 34.9) {
    clinicResult.textContent = 'Obesidade grau I';
  } else if (valueImc >= 35 && valueImc <= 40) {
    clinicResult.textContent = 'Obesidade grau II';
  } else if (valueImc > 40) {
    clinicResult.textContent = 'Obesidade grau III';
  } else {
    clinicResult.textContent = 'Valor inválido';
  }
}

start();
