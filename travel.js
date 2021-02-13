let countries = [
    "Hong Kong",
    "Malaysia",
    "Italy",
    "Vatican",
    "Australia",
    "Czech Republic",
    "France",
    "Switzerland",
    "Taiwan",
    "Uzbekistan",
    "Canada",
    "USA",
    "Mexico",
    "China",
    "Morocco",
    "Turkey",
    "Singapore",
    "Myanmar",
    "Indonesia",
    "Thailand",
    "Cambodia",
    "Laos",
    "Vietnam",
    "South Korea",
    "United Arab Emirates",
    "Austria",
    "Slovenia",
    "Bosnia and Herzegovina",
    "Croatia",
    "Serbia",
    "Hungary",
    "Slovakia",
    "Nepal",
    "Ethiopia",
    "Philippines",
    "Japan"
]

const introCover = document.querySelector(".intro");

const countriesContaienr = document.querySelector(".countries-container");

// load cover and backgound text
window.onload = ()=> {
    introCover.classList.add("writing-intro");
    for(let i=0; i<countries.length; i++) {
        // load
        const p = document.createElement("p");
        p.classList.add("country");
        p.classList.add(`country${i+1}`);
        p.textContent = countries[i];
        countriesContaienr.appendChild(p);
        // mouseover to change color
        p.addEventListener("mouseover", () => {
            console.log("mouse over!");
            p.style.color = "#ed478c";
            p.style.zIndex = "100";
        });
        // Mouseout to fade
        p.addEventListener("mouseout", () => {
            p.style.color = "#fafaf5";
            p.style.zIndex = "1";
        });
    }
}

// Click to hide the cover
introCover.addEventListener("click", () => {
    introCover.classList.add("fadeout");
    setTimeout(function(){
        introCover.style.display = "none";
    }, 1000);
});