// Add newest images to the end of the array.
const images = [{
        image: "../../images/gallery/clubs-week-2018.jpg",
        alt: ["Clubs week 2018", "La semaine des clubs 2018"]
    },
    {
        image: "../../images/gallery/smash-gathering.jpg",
        alt: ["Smash gameplay in the Tinkering Lab", "Gameplay de Smash dans le Laboratoire d’exploration"]
    },
    {
        image: "../../images/gallery/gaming-session.jpg",
        alt: ["A gaming session chez CRX", "Une séance de jeu chez CRX"]
    },
    {
        image: "../../images/gallery/clubs-week-2019-1.jpg",
        alt: ["Clubs week 2019", "La semaine des clubs 2018"]
    },
    {
        image: "../../images/gallery/clubs-week-2019-2.jpg",
        alt: ["Clubs week 2019", "La semaine des clubs 2018"]
    },
    {
        image: "../../images/gallery/clubs-fair-2021-1.jpg",
        alt: ["Clubs Fair 2021", "La Foire des clubs 2021"]
    },
    {
        image: "../../images/gallery/clubs-fair-2021-2.jpg",
        alt: ["Clubs Fair 2021", "La Foire des clubs 2021"]
    },
    {
        image: "../../images/gallery/clubs-fair-2021-3.jpg",
        alt: ["Clubs Fair 2021", "La Foire des clubs 2021"]
    },
    {
        image: "../../images/gallery/clubs-fair-2021-4.jpg",
        alt: ["Clubs Fair 2021", "La Foire des clubs 2021"]
    },
    {
        image: "../../images/gallery/clubs-fair-2021-5.jpg",
        alt: ["Clubs Fair 2021", "La Foire des clubs 2021"]
    }
];

let isEnglish = window.location.href.includes("/en")
let content = document.getElementById("content");
for (let i = images.length - 1; i >= 0; i--) {
    let div = document.createElement("div");
    div.className = "m-2 rounded shadow";
    div.style.width = "21.875rem";
    div.style.height = "15.625rem";
    div.style.border = "0.2rem solid #000000";

    let img = document.createElement("img");
    img.src = images[i].image;
    img.alt = isEnglish ? images[i].alt[0] : images[i].alt[1];
    img.style.objectFit = "cover";
    img.style.height = "100%";
    img.style.width = "100%";
    div.appendChild(img);
    
    content.appendChild(div);
}