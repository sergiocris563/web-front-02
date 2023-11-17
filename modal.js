const button = document.querySelector("button");
const poupup = document.querySelector(".poupup-wrapper");

const clickOpen = function() {
    poupup.classList.add("d-block");

button.addEventListener("click", clickOpen); 
};

poupup.addEventListener("click", function() {
    const clickOfElement = event.target.classlist[0];
    const classNameArray = ["poupup-close", "poupup-link", "poupup-wrapper"]

    const isClassList = classNameArray.includes(clickOfElement);
    
    if (isClassList) {
        poupup.classList.remove("d-block");
    }
})

button.addEventListener("click", clickOpen)
poupup.addEventListener("Click", poupupGeneral);