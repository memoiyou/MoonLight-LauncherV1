const os = require('os-utils');


function getTotalRAM() {
  const totalMemory = os.totalmem();
  const totalMemoryInMB = Math.round(totalMemory * 1024);
  return totalMemoryInMB;
}

// Afficher la RAM totale dans l'application
function updateTotalRAMDisplay() {
  const totalRAMElement = document.getElementById('ram-amount-value');
  const totalRAM = getTotalRAM();
  totalRAMElement.textContent = `${totalRAM} Go`;
}

updateTotalRAMDisplay();


const ramAmountInput = document.getElementById('ram-amount');

ramAmountInput.addEventListener('input', () => {
  const newRamValue = ramAmountInput.value;
  const totalRAM = getTotalRAM();
  const totalRAMElement = document.getElementById('ram-amount-value');
  totalRAMElement.textContent = `${newRamValue} Go`;

  if (newRamValue <= totalRAM) {
    console.log(`RAM allouée dans Minecraft : ${newRamValue} Go`);
  } else {
    console.error('Erreur : La quantité de RAM sélectionnée est supérieure à la RAM totale du système.');
  }
});
