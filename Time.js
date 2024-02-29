
const startTime = document.getElementById('startTime');
const endTime = document.getElementById('endTime');
function Time() {
    const start = new Date('09/04/2008 ' + startTime.value);
    const end = new Date('09/04/2008 ' + endTime.value);
    
    const diff = end - start;
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
  
    document.getElementById('output').innerText = `${Math.abs(hours)} часов и ${Math.abs(minutes)} минут`;
  };
  startTime.addEventListener("input", enableCalculateBtn); 
  endTime.addEventListener("input", enableCalculateBtn);
function enableCalculateBtn() { // Код для активирования кнопки
    if (startTime.value && endTime.value) {
      calculateBtn.disabled = false;
    } else {
      calculateBtn.disabled = true;
    }
}