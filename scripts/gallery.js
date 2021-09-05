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
    let img2 = document.createElement("img");
    img.src = images[image].src;
    img.alt = images[image].alt;
    img2.src = images[image].src;
    img2.alt = images[image].alt;
    div.className = "m-3 round";
    div.appendChild(img);
    /*div.addEventListener("click", function(){ 
        document.getElementById("modalBackground").style = `background-image: url(${images[image].src}); background-position-x: 50%; background-position-y: 50%;` 
    });*/

    div.style.width = "21.875rem";
    div.style.height = "15.625rem";
    img.style.height = "100%";
    img.style.width = "100%";
    img2.style.height = "100%";
    img2.style.width = "100%";

    div.addEventListener("click", function(){ 
        let modal = document.getElementById("modal");
        modal.innerHTML = "";
        modal.appendChild(img2);
        modal.style.display = "inline";
    });
    // img.style.backgroundRepeat = "no-repeat";
    // img.style.backgroundSize = "cover";
    // img.style.backgroundPositionX = "50%";
    // img.style.backgroundPositionY = "50%";
    content.appendChild(div);
}