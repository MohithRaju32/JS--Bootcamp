function emiCal() {
    let loanAmount = parseFloat(document.getElementById('principalLoanAmount').value);
    let inrRate = parseFloat(document.getElementById('interestRate').value);
    let tenure = parseFloat(document.getElementById('loanTerm').value);

    let monthlyInterest = inrRate / 12 / 100;
    let emi = (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) / (Math.pow(1 + monthlyInterest, tenure) - 1);

    document.getElementById("result").innerHTML += "EMI: " + emi.toFixed(2);

}




