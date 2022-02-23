function myFunction() {
    let bill = parseInt(prompt("per favore inserisci i kilometri che devi percorrere"));
    console.log(bill);

    console.log(bill * 0.21);
    bill = (bill * 0.21);

    let age = parseInt(prompt("per favore inserisci la tua età"));
    console.log(age);

    if ((isNaN(bill) || (isNaN(age)))) {
        document.getElementById("prezzo").innerHTML =
            "Hai scelto un numero non valido";
    } else {
        if (age <= 18) {
            console.log(bill - (bill * (20 / 100)));
            bill = (bill - (bill * (20 / 100))).toFixed(2);
            console.log(bill)
        } else if (age >= 65) {
            console.log(bill - (bill * (40 / 100)));
            bill = (bill - (bill * (40 / 100))).toFixed(2);
            console.log(bill)
        } else {
            console.log(bill)
        }
        document.getElementById("prezzo").innerHTML = (bill) + "€";
    }
}