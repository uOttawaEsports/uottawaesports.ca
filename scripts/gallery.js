const images = {
    0 : {
        src: "../../images/clubs-week.jpg",
        alt: "clubs-week",
    },
    1 : {
        src: "../../images/community-for-all.jpg",
        alt: "community-for-all",
    },
    2 : {
        src: "../../images/meet-and-greet.jpg",
        alt: "meet-and-greet",
    },
    3 : {
        src: "../../images/gaming-session.jpg",
        alt: "gaming-session",
    },
    4 : {
        src: "../../images/smash-gathering.jpg",
        alt: "smash-gathering",
    },
    5 : {
        src: "../../images/taberet-hall.jpg",
        alt: "taberet-hall",
    },
    6 : {
        src: "../../images/uottawa-background.jpg",
        alt: "uottawa-background",
    },
};

let content = document.getElementById("content");
for (let image in images) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = images[image].src;
    img.alt = images[image].alt;
    div.className = "m-3 round";
    div.appendChild(img);
    div.addEventListener("click", function(){ 
        document.getElementById("modalBackground").style = `background-image: url(${images[image].src}); background-position-x: 50%; background-position-y: 50%;` 
    });

    div.setAttribute("data-bs-toggle", "modal");
    div.setAttribute("data-bs-target", "#modal");
    div.style.width = "350px";
    div.style.height = "250px";
    img.style.height = "100%";
    img.style.width = "100%";
    // img.style.backgroundRepeat = "no-repeat";
    // img.style.backgroundSize = "cover";
    // img.style.backgroundPositionX = "50%";
    // img.style.backgroundPositionY = "50%";
    div.onclick = 
    content.appendChild(div);
}