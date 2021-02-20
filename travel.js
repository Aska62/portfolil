// Countries pics and location name
const travelPicsObj = {
    1: {
        image: "/images/travelpic/1.jpg",
        name: "Bueng Kan, Thailand",
    },
    2: {
        image: "/images/travelpic/2.jpg",
        name: "Udon Thani, Thailand",
    },
    3: {
        image: "/images/travelpic/3.jpg",
        name: "Split, Croatia",
    },
    4: {
        image: "/images/travelpic/17.jpg",
        name: "Dan Sai, Thailand",
    },
    5: {
        image: "/images/travelpic/5.jpg",
        name: "Mostar, Bosnia and Herzegovina",
    },
    6: {
        image: "/images/travelpic/6.jpg",
        name: "Koh Tao, Thailand",
    },
    7: {
        image: "/images/travelpic/7.jpg",
        name: "Bali, Indonesia",
    },
    8: {
        image: "/images/travelpic/8.jpg",
        name: "Bordubur, Indonesia",
    },
    9: {
        image: "/images/travelpic/9.jpg",
        name: "Abu Dhabi, United Arab Emirates",
    },
    10: {
        image: "/images/travelpic/10.jpg",
        name: "Mon Bridge, Thailand",
    },
    11: {
        image: "/images/travelpic/11.jpg",
        name: "Erta Ale, Ethiopia",
    },
    12: {
        image: "/images/travelpic/12.jpg",
        name: "Loei, Thailand",
    },
    13: {
        image: "/images/travelpic/13.jpg",
        name: "Chiang Khang, Thailand",
    },
    14: {
        image: "/images/travelpic/14.jpg",
        name: "Kanchanaburi, Thailand",
    },
    15: {
        image: "/images/travelpic/15.jpg",
        name: "Jiufen, Taiwan",
    },
    16: {
        image: "/images/travelpic/16.jpg",
        name: "Pulau Menjangan, Indonesia",
    },
    17: {
        image: "/images/travelpic/4.jpg",
        name: "Prasat Mang Tam, Thailand",
    },
    18: {
        image: "/images/travelpic/18.jpg",
        name: "Adis Ababa, Ethiopia",
    },
    19: {
        image: "/images/travelpic/19.jpg",
        name: "Bo Sang, Thailand",
    },
    20: {
        image: "/images/travelpic/20.jpg",
        name: "Lake Bled, Slovenia",
    },
    21: {
        image: "/images/travelpic/21.jpg",
        name: "Belgrade, Servia",
    },
    22: {
        image: "/images/travelpic/22.jpg",
        name: "Bueng Kan, Thailand",
    },
    23: {
        image: "/images/travelpic/23.jpg",
        name: "Kathmandu, Nepal",
    },
    24: {
        image: "/images/travelpic/24.jpg",
        name: "Bueng Kan, Thailand",
    },
    25: {
        image: "/images/travelpic/25.jpg",
        name: "Bratislava, Slovakia",
    },
    26: {
        image: "/images/travelpic/26.jpg",
        name: "Petchaburi, Thailand",
    },
    27: {
        image: "/images/travelpic/27.jpg",
        name: "Vienna, Austria",
    },
    28: {
        image: "/images/travelpic/28.jpg",
        name: "Mt. Bromo, Indonesia",
    },
    29: {
        image: "/images/travelpic/29.jpg",
        name: "Chesky Krumlov, Czeck Republic",
    },
    30: {
        image: "/images/travelpic/30.jpg",
        name: "Split, Croatia",
    },
    31: {
        image: "/images/travelpic/31.jpg",
        name: "Erta Ale, Ethiopia",
    },
    32: {
        image: "/images/travelpic/32.jpg",
        name: "Khao Yai, Thailand",
    },
    33: {
        image: "/images/travelpic/33.jpg",
        name: "Coron, Philippines",
    },
    34: {
        image: "/images/travelpic/34.jpg",
        name: "Luang Prabang, Laos",
    },
    35: {
        image: "/images/travelpic/35.jpg",
        name: "Inle Lake, Myammar",
    },
}
// get object values for accessibility
const travelPicsList = Object.values(travelPicsObj);

const introCover = document.querySelector(".intro");
const countryPicContaienr = document.querySelector(".country-pic-container");
const countryPicFocus = document.querySelector(".country-pic-focus");

// load cover and backgound images
window.onload = ()=> {
    introCover.classList.add("writing-intro");
    // load images in the background
    for(let i = 0; i < travelPicsList.length; i++){
        // load each pics
        const div = document.createElement("div");
        div.classList.add("travel-pic");
        const chosenTravelPic = travelPicsList[i].image;
        div.style.backgroundImage = `url("${chosenTravelPic}")`;
        div.style.backgroundSize = "250%";
        div.style.backgroundPosition = "center";
        countryPicContaienr.appendChild(div);

        // set blur by default
        const hoverBox = document.createElement("div");
        hoverBox.classList.add("hover-box");
        hoverBox.style.visibility = "visible";

        // load focus pic
        const largePic = document.createElement("img");
        largePic.classList.add("focus-pic");
        countryPicFocus.appendChild(largePic);

        // load the location name on focus
        const p = document.createElement("p");
        p.classList.add("focus-location-name");
        countryPicFocus.appendChild(p);

        div.addEventListener("mouseover", () => {
            hoverBox.style.visibility = "hidden";
            largePic.src = chosenTravelPic;
            p.textContent = travelPicsList[i].name;
            countryPicFocus.style.display = "block";
        });
        div.addEventListener("mouseout", () => {
            hoverBox.style.visibility = "visible";
            largePic.src = "";
            p.textContent = "";
            countryPicFocus.style.display = "none";
        });
        div.appendChild(hoverBox);

    };
};
// Click to hide the cover
introCover.addEventListener("click", () => {
    introCover.classList.add("fadeout");
    setTimeout(function(){
        introCover.style.display = "none";
    }, 1000);
});


// change position of focused image
const bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", getMouseDirection, false);

const box = document.querySelector(".box");

function getMouseDirection(e) {
    // define X position
    if(e.pageX > 500) {
        countryPicFocus.style.left = `${e.pageX - 520}px`;

    } else {
        countryPicFocus.style.left = `${e.pageX + 20}px`;
    };
    // define Y position
    if(e.pageY > 300) {
        countryPicFocus.style.bottom =`${e.pageY - 100}px`;
    } else {
        countryPicFocus.style.bottom = `${e.pageY + 20}px`;
    };
};