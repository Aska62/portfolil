// Intro cover
const introCover = document.querySelector(".intro");
// load cover and backgound text
window.onload = ()=> {
    introCover.classList.add("writing-intro");
};
// Click to hide the cover
introCover.addEventListener("click", () => {
    introCover.classList.add("fadeout");
    setTimeout(function(){
        introCover.style.display = "none";
    }, 1000);
});



const vids = [
    "/videos/code1.mov",
    "/videos/code2.mov",
    "/videos/code3.mov",
    "/videos/code4.mov",
    "/videos/code5.mov",
    "/videos/code6.mov",
    "/videos/code7.mov",
    "/videos/code8.mov"
]

const codeTitles = [
    "Image Slider",
    "Calculator",
    "Etch-a-Scetch",
    "Restaurant",
    "Library",
    "Todo List",
    "Tic-Tac-Toe",
    "Auction"
]

const links = [
    "https://github.com/Aska62/Image-slider",
    "https://github.com/Aska62/calculator",
    "https://github.com/Aska62/etch_a_sketch",
    "https://github.com/Aska62/Restaurant",
    "https://github.com/Aska62/my-library",
    "https://github.com/Aska62/todo-list",
    "https://github.com/Aska62/tic-tac-toe",
    "https://github.com/Aska62/auction",
]

const videoWrapper = document.querySelector(".video-wrapper");

// Create each coding content container
for (let i=0; i<vids.length; i++) {
    // Container
    const videoContainer = document.createElement("div");
    videoContainer.setAttribute("class", "video-container");
    // Title
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "code-title");
    h2.textContent = codeTitles[i];
    videoContainer.appendChild(h2);
    // Video
    const video = document.createElement("video");
    video.setAttribute("src", vids[i]);
    video.toggleAttribute("controls");
    video.toggleAttribute("autoplay");
    video.setAttribute("type", "video/mov");
    videoContainer.appendChild(video);
    // GitHub link
    const link = document.createElement("a");
    link.setAttribute("href", links[i]);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
    const h3 = document.createElement("h3");
    h3.setAttribute("class", "github-link");
    h3.textContent = "View code on GitHub";
    link.appendChild(h3);
    videoContainer.appendChild(link);

    videoWrapper.appendChild(videoContainer);
}

