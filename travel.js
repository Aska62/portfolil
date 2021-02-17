const countries = [
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

// Countries pics
const travelPics = [
    "/images/travel/1.jpg",
    "/images/travel/2.jpg",
    "/images/travel/3.jpg",
    "/images/travel/4.jpg",
    "/images/travel/5.jpg",
    "/images/travel/6.jpg",
    "/images/travel/7.jpg",
    "/images/travel/8.jpg",
    "/images/travel/9.jpg",
    "/images/travel/10.jpg",
    "/images/travel/11.jpg",
    "/images/travel/12.jpg",
    "/images/travel/13.jpg",
    "/images/travel/14.jpg",
    "/images/travel/15.jpg",
    "/images/travel/16.jpg",
    "/images/travel/17.jpg",
    "/images/travel/18.jpg",
    "/images/travel/19.jpg",
    "/images/travel/20.jpg",
    "/images/travel/21.jpg",
    "/images/travel/22.jpg",
    "/images/travel/23.jpg",
    "/images/travel/24.jpg",
    "/images/travel/25.jpg",
    "/images/travel/26.jpg",
    "/images/travel/27.jpg",
    "/images/travel/28.jpg",
    "/images/travel/29.jpg",
    "/images/travel/30.jpg",
    "/images/travel/31.jpg",
    "/images/travel/32.jpg",
    "/images/travel/33.jpg",
    "/images/travel/34.jpg",
    "/images/travel/35.jpg",
]

const introCover = document.querySelector(".intro");

const countryPicContaienr = document.querySelector(".country-pic-container");

// load cover and backgound text
window.onload = ()=> {
    introCover.classList.add("writing-intro");
}
// Click to hide the cover
introCover.addEventListener("click", () => {
    introCover.classList.add("fadeout");
    setTimeout(function(){
        introCover.style.display = "none";
    }, 1000);
});

// load images in the background
for(let i=0; i<travelPics.length; i++) {
    const div = document.createElement("div");
    div.classList.add("travel-pic");
    let chosenTravelPic = travelPics[i];
    console.log(chosenTravelPic);
    // div.setAttribute("style", `background-image: url('${travelPics[i]}')`);
    div.style.backgroundImage = `url("${chosenTravelPic}")`;
    // div.style.backgroundImage = "url('images/travel/1.jpg')";
    div.setAttribute("style", "background-size: 200px");
    console.log(div.style.backgoroundImage);
    // div.setAttribute("style", "width: 98%");
    // div.setAttribute("style", "height: 98%");
    countryPicContaienr.appendChild(div);
    // mouseover to change color
    // p.addEventListener("mouseover", () => {
    //     console.log("mouse over!");
    //     p.style.color = "#ed478c";
    //     p.style.zIndex = "100";
    // });
    // // Mouseout to fade
    // p.addEventListener("mouseout", () => {
    //     p.style.color = "#fafaf5";
    //     p.style.zIndex = "1";
    // });
}


