// Add newest images to the end of the array.
const images = ["../../images/gallery/meet-and-greet.jpg",
    "../../images/gallery/smash-gathering.jpg",
    "../../images/gallery/gaming-session.jpg",
    "../../images/gallery/community-for-all.jpg",
    "../../images/gallery/clubs-week.jpg"
];

let content = document.getElementById("content");
for (let i = images.length - 1; i >= 0; i--) {
    let div = document.createElement("div");
    div.className = "m-2 rounded shadow";
    div.style.width = "21.875rem";
    div.style.height = "15.625rem";
    div.style.backgroundImage = "url(" + images[i] + ")";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundSize = "cover";
    div.style.backgroundPositionX = "50%";
    div.style.backgroundPositionY = "50%";
    div.style.border = "0.125rem solid #000000";
    content.appendChild(div);
}