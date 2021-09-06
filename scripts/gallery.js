// Add newest images to the end of the array.
const images = ["../../images/clubs-week.jpg", 
                "../../images/community-for-all.jpg", 
                "../../images/meet-and-greet.jpg",
                "../../images/gaming-session.jpg",
                "../../images/smash-gathering.jpg"
];

let content = document.getElementById("content");
for(let i = images.length-1; i >= 0; i--){
    let div = document.createElement("div");
    div.className = "m-2 rounded";
    div.style.width = "21.875rem";
    div.style.height = "15.625rem";
    div.style.backgroundImage = "url(" + images[i] + ")";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundSize = "cover";
    div.style.backgroundPositionX = "50%";
    div.style.backgroundPositionY = "50%";
    content.appendChild(div);
}