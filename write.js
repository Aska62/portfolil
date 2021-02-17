const articleImages = [
    "/images/writing/writing1.jpg",
    "/images/writing/writing2.jpg",
    "./images/writing/writing3.jpg",
    "./images/writing/writing4.jpg",
    "./images/writing/writing5.jpg",
    "./images/writing/writing6.jpg",
    "./images/writing/writing7.jpg",
    "./images/writing/writing8.jpg",
    "./images/writing/writing9.jpg",
    "./images/writing/writing10.jpg",
    "./images/writing/writing11.jpg",
    "./images/writing/writing12.jpg",
    "./images/writing/writing13.jpg",
    "./images/writing/writing14.jpg",
    "./images/writing/writing15.jpg",
    "./images/writing/writing16.jpg",
    "./images/writing/writing17.jpg",
    "./images/writing/writing18.jpg",
    "./images/writing/writing19.jpg",
    "./images/writing/writing20.jpg",
    "./images/writing/writing21.jpg",
    "./images/writing/writing22.jpg",
    "./images/writing/writing23.jpg",
    "./images/writing/writing24.jpg",
    "./images/writing/writing25.jpg"
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
const largeArticleBackground = document.querySelector(".large-article-box");
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
        largeArticleBackground.classList.remove("fadeout");
        const img = document.createElement("img");
        img.setAttribute("class", "focus-image");
        img.setAttribute("src", articleImages[i]);
        largeArticle.appendChild(img);
        largeArticleBackground.style.display = "flex";
    });
    // Click and fade
    largeArticleBackground.addEventListener("click", () => {
        largeArticleBackground.classList.add("fadeout");
        setTimeout(function(){
            largeArticleBackground.style.display = "none";
            largeArticle.removeChild(largeArticle.lastChild);
        }, 400);
    });
};




