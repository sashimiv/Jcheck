window.addEventListener('DOMContentLoaded', function() { // начало программы
  const hourlyRateInput = document.getElementById('hourlyRate'); // добавление переменных
  const hoursWorkedInput = document.getElementById('hoursWorked');
  const calculateBtn = document.getElementById('calculateBtn');
  const outputDiv = document.getElementById("output");
  hourlyRateInput.addEventListener("input", enableCalculateBtn); 
  hoursWorkedInput.addEventListener("input", enableCalculateBtn);
  calculateBtn.addEventListener("click", calculateEarnings);
  function enableCalculateBtn() { // Код для активирования кнопки
    if (hourlyRateInput.value && hoursWorkedInput.value) {
      calculateBtn.disabled = false;
    } else {
      calculateBtn.disabled = true;
    }
  }
  function calculateEarnings() { // код для вывода заработной платы
    const hourlyRate = parseFloat(hourlyRateInput.value);
    const hoursWorked = parseTimeToSeconds(hoursWorkedInput.value);
    if (!isNaN(hourlyRate) && !isNaN(hoursWorked)) {
      const earnings = (hourlyRate * hoursWorked) / 3600;
      
      outputDiv.textContent =  earnings + "₽";
    }
  }
  function parseTimeToSeconds(time) { // код для перевода форматов времени
    const timeArr = time.split(':');
    const hours = parseInt(timeArr[0]);
    const minutes = parseInt(timeArr[1]);
    const seconds = parseInt(timeArr[2]);
    return (hours * 3600) + (minutes * 60) + seconds;
  }
});