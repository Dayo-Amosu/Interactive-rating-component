const ratingComponent = document.querySelector(".rating-component");
const thankyouComponent = document.querySelector(".thankyou-component");
const submit = document.querySelector("#submit");
const rateAgain = document.querySelector("#rate-again");
const rates = document.querySelectorAll(".rating-btn");
const rating = document.querySelector("#rating")

submit.addEventListener("click", () => {
    thankyouComponent.classList.remove("hidden")
    ratingComponent.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thankyouComponent.classList.add("hidden")
    ratingComponent.style.display = "block"
})

for (let rate of rates) {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    })
}