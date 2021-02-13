let articleImages = [
    "./images/writing1.jpg",
    "./images/writing2.jpg",
    "./images/writing3.jpg",
    "./images/writing4.jpg",
    "./images/writing5.jpg",
    "./images/writing6.jpg",
    "./images/writing7.jpg",
    "./images/writing8.jpg",
    "./images/writing9.jpg",
    "./images/writing10.jpg",
    "./images/writing11.jpg",
    "./images/writing12.jpg",
    "./images/writing13.jpg",
    "./images/writing14.jpg",
    "./images/writing15.jpg",
    "./images/writing16.jpg",
    "./images/writing17.jpg",
    "./images/writing18.jpg",
    "./images/writing19.jpg",
    "./images/writing20.jpg",
    "./images/writing21.jpg",
    "./images/writing22.jpg",
    "./images/writing23.jpg",
    "./images/writing24.jpg",
    "./images/writing25.jpg"
];

const introCover = document.querySelector(".intro");

window.onload = () => {
    introCover.classList.add("writing-intro");
};

// Click to hide the cover
introCover.addEventListener("click", () => {
    introCover.classList.add("fadeout");
    setTimeout(function(){
        introCover.style.display = "none";
    }, 1000);
});

const writingIcon = document.querySelectorAll(".writing");
const hoverBox = document.querySelectorAll(".hover-box");
const outerField = document.querySelector("main");
const largeArticle = document.querySelector(".large-article");
const largeArticleImage = document.querySelector(".focus-image");

for(let i=0; i < writingIcon.length; i++) {
    // Hover each icon to fade
    writingIcon[i].addEventListener("mouseover", () => {
        hoverBox[i].style.visibility = "visible";
    });
    // Mouseout to fade
    writingIcon[i].addEventListener("mouseout", () => {
        hoverBox[i].style.visibility = "hidden";
    });
    // Click to display large image
    writingIcon[i].addEventListener("click", ()=> {
        largeArticle.classList.remove("fadeout");
        const img = document.createElement("img");
        img.setAttribute("class", "focus-image");
        img.setAttribute("src", articleImages[i]);
        largeArticle.appendChild(img);
        largeArticle.style.display = "flex";
    });
    // Click and fade
    largeArticle.addEventListener("click", () => {
        largeArticle.classList.add("fadeout");
        setTimeout(function(){
            largeArticle.style.display = "none";
            largeArticle.removeChild(largeArticle.lastChild);
        }, 400);
    });
};




