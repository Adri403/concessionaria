document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', function() {
    const input = searchInput.value.toLowerCase();
    const cars = document.querySelectorAll('.car');
    let carFound = false;

    cars.forEach(car => {
      const model = car.querySelector('h3').textContent.toLowerCase();
      if (model.includes(input) || input === '') {
        car.style.display = 'block'; 
        carFound = true;
      } else {
        car.style.display = 'none';
      }
    });

    if (!carFound) {
      const noResult = document.getElementById('noResult');
      if (noResult) {
        noResult.style.display = 'block'; 
      }
    } else {
      const noResult = document.getElementById('noResult');
      if (noResult) {
        noResult.style.display = 'none'; 
      }
    }
  });
});
function buyOrFinance() {
  window.location.href = "/front/servicos.html";
}
function calculateFinancing() {
  const carModel = document.getElementById('carModel').value;
  const downPayment = parseFloat(document.getElementById('downPayment').value);

  // Obtenha o valor do carro selecionado
  let carPrice;

  switch (carModel) {
    case 'civic':
      carPrice = 90000;
      break;
    case 'uno':
      carPrice = 20000;
      break;
    case 'virtus':
      carPrice = 110000;
      break;
    case 'sandero':
      carPrice = 60000;
      break;
    case 'gti':
      carPrice = 60000;
      break;
    case 'classic':
      carPrice = 30000;
      break;
    case 'lancer':
      carPrice = 75000;
      break;
    default:
      carPrice = 0;
  }

  const financingResult = document.getElementById('financingResult');

  if (!isNaN(carPrice) && !isNaN(downPayment)) {
    if (downPayment >= carPrice) {
      financingResult.innerText = 'O valor da entrada não pode ser maior ou igual ao valor do carro.';
    } else {
      const financedValue = carPrice - downPayment;
      let interestRate;

      // Definir a taxa de juros com base no valor financiado
      if (financedValue <= 10000) {
        interestRate = 1.05; // 5% de juros para valores pequenos
      } else if (financedValue <= 50000) {
        interestRate = 1.08; // 8% de juros para valores médios
      } else {
        interestRate = 1.1; // 10% de juros para valores altos
      }

      const valordocarro = carPrice
      const valordocarrotext = `Valor do carro: R$ ${valordocarro.toFixed(2)}<br>`;
      const financedTotalValue = financedValue * interestRate;
      const financingText = `Valor do financiamento: R$ ${financedTotalValue.toFixed(2)}<br>`;
      const cashValue = carPrice - financedValue;
      const cashText = `Valor de entrada: R$ ${cashValue.toFixed(2)}`;
      financingResult.innerHTML = valordocarrotext + financingText + cashText;
    }
  } else {
    financingResult.innerText = 'Por favor, selecione um carro e insira um valor de entrada válido.';
  }
}
