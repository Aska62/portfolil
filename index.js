// Hamburger
const hamburger = document.querySelector(".hamburger-box");
const menuContainer = document.querySelector(".menu-container");
const hamburgerLine1 = document.querySelector(".line1");
const hamburgerLine2 = document.querySelector(".line2");
const hamburgerLine3 = document.querySelector(".line3");

hamburger.addEventListener("click", ()=> {
    if(menuContainer.style.display == "none") {
        menuContainer.style.display = "block";
        hamburgerLine1.style.display = "none";
        hamburgerLine2.style.display = "none";
        hamburgerLine3.style.display = "none";
        hamburger.classList.add("round");
    } else {
        menuContainer.style.display = "none";
        hamburgerLine1.style.display = "block";
        hamburgerLine2.style.display = "block";
        hamburgerLine3.style.display = "block";
        hamburger.classList.remove("round");
    }
});



