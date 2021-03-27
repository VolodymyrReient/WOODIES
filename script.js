const burger = document.querySelector(".burger");
const aside = document.querySelector("#aside");

burger.addEventListener("click", () => {
    aside.classList.toggle("flex");
    burger.classList.toggle("left");
});
