document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("userForm");
    var alergije = document.getElementById("alergije");
    var opisAlergije = document.getElementById("opisAlergije");
    var telefonInput = document.getElementById("telefon");

    // Alergije: Prikaz dodatnog polja
    alergije.addEventListener("change", function () {
        if (alergije.value === "Da") {
            opisAlergije.style.display = "block";
        } else {
            opisAlergije.style.display = "none";
        }
    });

    // Telefon: Automatsko formatiranje broja
    telefonInput.addEventListener("input", function () {
        var value = telefonInput.value.replace(/\D/g, ""); // Ukloni sve nebrojčane karaktere
        if (value.startsWith("387")) {
            value = "+" + value;
        } else if (!value.startsWith("+387")) {
            value = "+387" + value; // Automatski dodaj "+387" ako nedostaje
        }
        telefonInput.value = value.slice(0, 12); // Ograniči unos na 12 karaktera
    });

    // Validacija forme
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var ime = document.getElementById("ime").value.trim(),
            prezime = document.getElementById("prezime").value.trim(),
            maticniBroj = document.getElementById("maticniBroj").value.trim(),
            godiste = parseInt(document.getElementById("godiste").value.trim(), 10),
            telefon = telefonInput.value.trim(),
            visina = parseInt(document.getElementById("visina").value.trim(), 10),
            tezina = parseInt(document.getElementById("tezina").value.trim(), 10);

        if (
            ime && prezime &&
            maticniBroj.length === 13 &&
            godiste <= new Date().getFullYear() - 18 &&
            godiste >= 1900 &&
            telefon.match(/^\+3876\d{7}$/) &&
            visina >= 120 && visina <= 210 &&
            tezina >= 45 && tezina <= 120
        ) {
            document.getElementById("output").textContent = "Podaci su uspješno poslani!";
            document.getElementById("output").style.color = "green";
        } else {
            document.getElementById("output").textContent = "Molimo provjerite unesene podatke.";
            document.getElementById("output").style.color = "red";
        }
    });
});
