document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculateBtn");
    const output = document.getElementById("output");
    let income = document.getElementById('income');
    let taxRate = document.getElementById('TaxRate');

    function calculateTax() {
        let taxAmount = calculateTaxAmount(parseFloat(income.value), parseFloat(taxRate.value));
        output.innerText = 'Сумма налога: ' + taxAmount;
    }

    function calculateTaxAmount(income, taxRate) {
        let taxAmount = income * (taxRate / 100);
        return taxAmount;
    }

    income.addEventListener("input", enableCalculateBtn);
    taxRate.addEventListener("input", enableCalculateBtn);

    function enableCalculateBtn() {
        if (income.value && taxRate.value) {
            calculateBtn.disabled = false;
        } else {
            calculateBtn.disabled = true;
        }
    }

    calculateBtn.addEventListener("click", calculateTax);
});
