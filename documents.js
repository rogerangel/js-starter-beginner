const firstName = document.getElementById('firstName');
const proccessBtn = document.getElementById('processButton');
const whenClicked = proccessBtn.addEventListener("click", () => {
    console.log(firstName.value)
});

