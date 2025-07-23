const form = document.querySelector("form");
const namesEl = document.getElementById("names");
const priceEL = document.getElementById("price");
const salesAgeEl = document.getElementById("salesAge");
const trainCarriageEl = document.getElementById("trainCarriage");
const cancelBtnEl = document.getElementById("cancelBtn");
const priceKm = 0.21;
const under18 = 0.80;
const over65 = 0.60;
const nameFieldEl = document.getElementById("name-field");
const kmFieldEl = document.getElementById("km-field");
const ageSelectorEl = document.getElementById("ageSelector");
function price(number, ageSelector) {
    if (ageSelector === "under18") {
        return number * priceKm * under18
    } else if (ageSelector === "over65") {
        return number * priceKm * over65
    }
    return number * priceKm
}
form.addEventListener("submit", event => {
    event.preventDefault();
    const kmValue = Number(kmFieldEl.value);
    priceEL.innerText = price(kmValue, ageSelectorEl.value).toFixed(2) + "€";
    salesAgeEl.innerHTML = ageSelectorEl.value;
    trainCarriageEl.innerHTML = Math.floor(Math.random() * 10) + 1;
    namesEl.innerHTML = nameFieldEl.value;
    if (!ageSelectorEl.value) {
        priceEL.innerText = "⚠️ Seleziona una fascia di età.";
        return;
    }
})
cancelBtnEl.addEventListener("click", () => {
    form.reset();
    priceEL.innerText = "";
    salesAgeEl.innerHTML = "";
    trainCarriageEl.innerHTML = "";
    namesEl.innerHTML = "";
});



