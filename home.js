function checkAge(age) {
    if (age.value >= 18)
        document.getElementById('ag').innerHTML = "You are eligible to vote."
    else
        document.getElementById('ag').innerHTML = "You are not eligible to vote yet."

}

function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        document.getElementById('ag1').innerHTML += number.value + "x" + i + "" + "=" + number.value * i + "<br>";

    }
}

function convertDoller(dollor) {

    document.getElementById('ag2').innerHTML = "₹" + dollor.value * 74.5;
}