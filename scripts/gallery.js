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
        image: "../../images/gallery/clubs-fair-2021-4.jpg",
        alt: ["Clubs Fair 2021", "La Foire des clubs 2021"]
    },
    {
        image: "../../images/gallery/clubs-fair-2021-5.jpg",
        alt: ["Clubs Fair 2021", "La Foire des clubs 2021"]
    },
    {
        image: "../../images/gallery/egn_2021-09-30.jpg",
        alt: ["Inaugural Exec Game Night - Among Us", "La toute première soirée de jeux avec les cadres - Among Us"]
    },
    {
        image: "../../images/gallery/clubs-fair-2021-6.jpg",
        alt: ["Clubs Fair 2021", "La Foire des clubs 2021"]
    },
    {
        image: "../../images/gallery/clubs-fair-2021-7.jpeg",
        alt: ["Clubs Fair 2021", "La Foire des clubs 2021"]
    },
    {
        image: "../../images/gallery/agm-2021-1.jpg",
        alt: ["Annual General Meeting 2021", "Assemblée générale annuelle 2021"]
    },
    {
        image: "../../images/gallery/agm-2021-3.jpg",
        alt: ["Annual General Meeting 2021", "Assemblée générale annuelle 2021"]
    },
    {
        image: "../../images/gallery/agm-2021-4.jpg",
        alt: ["Annual General Meeting 2021", "Assemblée générale annuelle 2021"]
    },
    {
        image: "../../images/gallery/agm-2021-7.jpg",
        alt: ["Annual General Meeting 2021", "Assemblée générale annuelle 2021"]
    },
    {
        image: "../../images/gallery/agm-2021-9.jpg",
        alt: ["Annual General Meeting 2021", "Assemblée générale annuelle 2021"]
    },
    {
        image: "../../images/gallery/egn_2021-10-26.jpg",
        alt: ["October 2021 Exec Game Night - Goose Goose Duck", "Octobre 2021 soirée de jeux avec les cadres - Goose Goose Duck"]
    },
    {
        image: "../../images/gallery/egn_2021-11-14.jpg",
        alt: ["November 2021 Exec Game Night - VALORANT", "Novembre 2021 soirée de jeux avec les cadres - VALORANT"]
    },
    {
        image: "../../images/gallery/ssbu_2021-11-15.jpg",
        alt: ["2021-11-15 Super Smash Bros. Ultimate Tournament", "2021-11-15 Tournoi de Super Smash Bros. Ultimate"]
    },
    {
        image: "../../images/gallery/ssbu_2021-11-15-2.jpg",
        alt: ["2021-11-15 Super Smash Bros. Ultimate Tournament", "2021-11-15 Tournoi de Super Smash Bros. Ultimate"]
    },
];

let isEnglish = window.location.href.includes("/en")
let content = document.getElementById("content");
for (let i = images.length - 1; i >= 0; i--) {
    let div = document.createElement("div");
    div.className = "m-2 rounded shadow";
    div.style.width = "21.875rem";
    div.style.height = "15.625rem";
    div.style.border = "0.25rem solid #000000";

    let img = document.createElement("img");
    img.src = images[i].image;
    img.alt = isEnglish ? images[i].alt[0] : images[i].alt[1];
    img.style.objectFit = "cover";
    img.style.height = "100%";
    img.style.width = "100%";
    div.appendChild(img);
    
    content.appendChild(div);
}