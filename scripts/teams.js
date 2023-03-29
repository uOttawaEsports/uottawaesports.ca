const gameheads = {
    "apex-gh": "SuperSkillz#2043",
    "cod-gh": "Lego#2121",
    "csgo-gh": "Static#0063",
    "dota2-gh": "Hulasaur#0265",
    "fortnite-gh": "Nuage#0954",
    "hs-gh": "",
    "lol-gh": "Narth#1623",
    "osu-gh": "Fulserish#3239",
    "ow-gh": "Qeb#3026",
    "r6-gh": "Zander#6846",
    "rl-gh": "fabienlef#5103",
    "ssbu-gh": "Tai#0391",
    "val-gh": "1Lil’Bit#5755",
    "apex-gh":"SuperSkillz#2043"
}

// Teams that will be displayed will only be "garnet", "grey", and "gold".
const modals = {
    "apex-team": {
        "garnet": {
            title: ["Apex Legends Garnet Team", "Équipe Garnet de Apex Legends"],
            background: "#800020",
            members: {
                "SuperSkillz": ["Manager", "Manager"],
                "Juice": ["Main Roster", "Formation principale"],
                "Divine": ["Main Roster", "Formation principale"],
                "sprtn": ["Main Roster", "Formation principale"],
            },
            lastUpdated: ["2023-03-20"],
            photo: ""
        },
    },
    "cod-team": {
        "garnet": {
            title: ["Call of Duty Garnet Team", "Équipe Garnet de Call of Duty"],
            background: "#800020",
            members: {
                "Lego": ["Manager", "Manager"],
                "Steppy": ["Main Roster", "Formation principale"],
                "FeyD": ["Main Roster", "Formation principale"],
                "Hish": ["Main Roster", "Formation principale"],
                "eK": ["Main Roster", "Formation principale"]
                
            },
            lastUpdated: ["2023-03-14"],
            photo: ""
        },
        "grey": {
            title: ["Call of Duty Grey Team", "Équipe Grey de Call of Duty"],
            background: "#303031",
            members: {},
            lastUpdated: [],
            photo: ""
        }
    },
    "csgo-team": {
        "garnet": {
            title: ["CS:GO Garnet Team", "Équipe Garnet de CS:GO"],
            background: "#800020",
            members: {
                
            },
            lastUpdated: ["2021-09-04"],
            photo: ""
        },
        "grey": {
            title: ["CS:GO Grey Team", "Équipe Grey de CS:GO"],
            background: "#303031",
            members: {},
            lastUpdated: ["2021-09-04"],
            photo: ""
        }
    },
    "dota2-team": {
        "garnet": {
            title: ["DOTA 2 Garnet Team", "Équipe Garnet de DOTA 2"],
            background: "#800020",
            members: {
                
            },
            lastUpdated: ["2021-10-14"],
            photo: ""
        },
        "grey": {
            title: ["DOTA 2 Grey Team", "Équipe Grey de DOTA 2"],
            background: "#303031",
            members: {},
            lastUpdated: [],
            photo: ""
        }
    },
    "fortnite-team": {
        "garnet": {
            title: ["Fortnite Garnet Team", "Équipe Garnet de Fortnite"],
            background: "#800020",
            members: {},
            lastUpdated: [],
            photo: ""
        },
        "grey": {
            title: ["Fortnite Grey Team", "Équipe Grey de Fortnite"],
            background: "#303031",
            members: {},
            lastUpdated: [],
            photo: ""
        }
    },
    "hs-team": {
        "garnet": {
            title: ["Hearthstone Garnet Team", "Équipe Garnet de Hearthstone"],
            background: "#800020",
            members: {
                
            },
            lastUpdated: ["2021-10-22"],
            photo: ""
        },
        "grey": {
            title: ["Hearthstone Grey Team", "Équipe Grey de Hearthstone"],
            background: "#303031",
            members: {},
            lastUpdated: [],
            photo: ""
        }
    },
    "lol-team": {
        "garnet": {
            title: ["League of Legends Garnet Team", "Équipe Garnet de League of Legends"],
            background: "#800020",
            members: {
                "BeAn": ["Manager", "Manager"],
                "RareAdamCasts": ["Manager", "Manager"],
                "Doraro": ["Top", "Haut"],
                "gumbee power": ["Jungle", "Jungle"],
                "Midnight Akuma": ["Mid", "Milieu"],
                "PieckPerformance": ["Bot", "Bas"],
                "sprinklr": ["Support", "Support"], 
                "Amlo" : ["Substitute", "Remplaçant(e)"],
                "Draig": ["Substitute - Mid/Support", "Remplaçant(e) - Milieu/Support"],
                "ShiroiYuki" : ["Substitute", "Remplaçant(e)"]
                
            },
            lastUpdated: ["2022-01-10"],
            photo: ""
        },
        "grey": {
            title: ["League of Legends Grey Team", "Équipe Grey de League of Legends"],
            background: "#303031",
            members: {
                "Monti": ["Manager", "Manager"],
                "Karmen": ["Main Roster", "Formation principale"],
                "MildKimchi": ["Main Roster", "Formation principale"],
                "bred": ["Main Roster", "Formation principale"],
                "Awe": ["Main Roster", "Formation principale"],
                "Ew": ["Main Roster", "Formation principale"],
                "GEGEFE" : ["Main Roster", "Formation principale"],
                "xmorphasis" : ["Main Roster", "Formation principale"],
                "Zilliax" : ["Main Roster", "Formation principale"],
                "darkutopia" : ["Main Roster", "Formation principale"],
                "Autruche": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2023-03-29"],
            photo: ""
        },
        "gold": {
            title: ["League of Legends Gold Team", "Équipe Gold de League of Legends"],
            background: "#665814",
            members: {
                "Monti": ["Manager/Substitute", "Manager/Remplaçant(e)"],
                "MistahFrosty": ["Main Roster", "Formation principale"],
                "rexJaym3": ["Main Roster", "Formation principale"],
                "Qastech": ["Main Roster", "Formation principale"],
                "Drakaress": ["Main Roster", "Formation principale"],
                "viea": ["Main Roster", "Formation principale"],
                "AgentZero": ["Main Roster", "Formation principale"],
                "TheEpicIronman": ["Main Roster", "Formation principale"],
                "Khan Drogo": ["Main Roster", "Formation principale"],
                "Biggest Fish": ["Main Roster", "Formation principale"],
                "Elliot" : ["Main Roster", "Formation principale"],
            },
            lastUpdated: ["2023-03-29"],
            photo: ""
        }
    },
    "osu-team": {
        "garnet": {
            title: ["osu! Garnet Team", "Équipe Garnet de osu!"],
            background: "#800020",
            members: {
                
            },
            lastUpdated: ["2021-09-26"],
            photo: ""
        },
        "grey": {
            title: ["osu! Grey Team", "Équipe Grey de osu!"],
            background: "#303031",
            members: {
               
            },
            lastUpdated: ["2021-09-26"],
            photo: ""
        }
    },
    "ow-team": {
        "garnet": {
            title: ["Overwatch Garnet Team", "Équipe Garnet de Overwatch"],
            background: "#800020",
            members: {
                "Qeb": ["Manager", "Manager"],
                "Innocent": ["Tank", "Tank"],
                "Dunks": ["Tank", "Tank"],
                "Norman": ["Damage", "Dégâts"],
                "Gurgz": ["Damage", "Dégâts"],
                "IceVolcano": ["Support", "Soutien"],
                "Twigloo": ["Captain/Support", "Capitaine/Soutien"],
                "Supreme": ["Support", "Soutien"],
            },
            lastUpdated: ["2023-03-17"],
            photo: "../../images/gallery/ow_garnet.jpeg"
        },
        "grey": {
            title: ["Overwatch Grey Team", "Équipe Grey de Overwatch"],
            background: "#303031",
            members: {
                "Tundr4": ["Tank", "Tank"],
                "Impres": ["Tank", "Tank"],
                "YoChrisyBoi": ["Damage", "Dégâts"],
                "VStriker": ["Captain/Damage", "Capitaine/Dégâts"],
                "FloppyChicken": ["Damage", "Dégâts"],
                "Achieu": ["Support", "Soutien"],
                "Lamortdeboo": ["Support", "Soutien"],
                "Flask": ["Support", "Soutien"],
            },
            lastUpdated: ["2023-03-17"],
            photo: "../../images/gallery/ow_grey.jpeg"
        }
    },
    "r6-team": {
        "garnet": {
            title: ["Rainbow Six Siege Garnet Team", "Équipe Garnet de Rainbow Six Siege"],
            background: "#800020",
            members: {
                "Zander": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "DKxMD": ["Main Roster", "Formation principale"],
                "GalaxEyeToga": ["Main Roster", "Formation principale"],
                "ohkshr": ["Main Roster", "Formation principale"],
                "David": ["Main Roster", "Formation principale"],
                "Axent": ["Main Roster", "Formation principale"],
                "st4rmoon": ["Main Roster", "Formation principale"],
                "PeterPumpkin": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2023-03-25"],
            photo: ""
        },
    },
    "rl-team": {
        "garnet": {
            title: ["Rocket League Garnet Team", "Équipe Garnet de Rocket League"],
            background: "#800020",
            members: {
                "Tannwan-": ["Main Roster", "Formation principale"],
                "joebot": ["Main Roster", "Formation principale"],
                "koat": ["Main Roster", "Formation principale"],
                "keagan": ["Main Roster/manager", "Formation principale/manager"],
                "Rawbeef": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2023-3-29"],
            photo: ""
        },
        "grey": {
            title: ["Rocket League Grey Team", "Équipe Grey de Rocket League"],
            background: "#303031",
            members: {
                "T0MAHAWKER": ["Main Roster", "Formation principale"],
                "ZEFEX": ["Main Roster", "Formation principale"],
                "Lobster": ["Main Roster", "Formation principale"],
                "Mystyclious": ["Main Roster", "Formation principale"],
                "Rawbeef": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2023-03-29"],
            photo: ""
        },
        "gold": {
            title: ["Rocket League Gold Team", "Équipe Gold de Rocket League"],
            background: "#665814",
            members: {
                "key_pkmn": ["Main Roster", "Formation principale"],
                "KFC": ["Main Roster", "Formation principale"],
                "Durk": ["Main Roster", "Formation principale"],
                "saoumine": ["Main Roster", "Formation principale"],
                "ItsDaedalos": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2023-03-29"],
            photo: ""
        }
    },
    "ssbu-team": {
        "garnet": {
            title: ["Super Smash Bros. Ultimate Garnet Team", "Équipe Garnet de Super Smash Bros. Ultimate"],
            background: "#800020",
            members: {
                
            },
            lastUpdated: ["2022-01-18"],
            photo: ""
        },
        "grey": {
            title: ["Super Smash Bros. Ultimate Grey Team", "Équipe Grey de Super Smash Bros. Ultimate"],
            background: "#303031",
            members: {},
            lastUpdated: [],
            photo: ""
        }
    },
    "val-team": {
        "garnet": {
            title: ["VALORANT Garnet Team", "Équipe Garnet de VALORANT"],
            background: "#800020",
            members: {
                "Xssant": ["Manager", "Manager"],
                "kwsp": ["Main Roster", "Formation principale"],
                "rahr": ["Main Roster", "Formation principale"],
                "apl": ["Main Roster", "Formation principale"],
                "bladee": ["Main Roster", "Formation principale"],
                "coal": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2023-03-25"],
            photo: ""
        },
        "grey": {
            title: ["VALORANT Grey Team", "Équipe Grey de VALORANT"],
            background: "#303031",
            members: {
                "tranquil": ["Manager", "Manager"],
                "kiwisareawesome": ["Main Roster", "Formation principale"],
                "chirubain": ["Main Roster", "Formation principale"],
                "munost": ["Main Roster", "Formation principale"],
                "noshed": ["Main Roster", "Formation principale"],
                "raizen": ["Main Roster", "Formation principale"],
                "ricebowl247": ["Main Roster", "Formation principale"],
                "sitxchi": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2023-03-25"],
            photo: "../../images/gallery/valorant-grey_2021-11-05.jpg"
        },
        "gold": {
            title: ["VALORANT Gold Team", "Équipe Gold de VALORANT"],
            background: "#665814",
            members: {
                "erraine": ["Manager", "Manager"],
                "TheBlueSpirit": ["Main Roster", "Formation principale"],
                "Mr Racoon": ["Main Roster", "Formation principale"],
                "Mr Ginatron": ["Main Roster", "Formation principale"],
                "Mr Planet xd": ["Main Roster", "Formation principale"],
                "awe QWQ": ["Main Roster", "Formation principale"],
                "elric": ["Main Roster", "Formation principale"],
                "tros": ["Main Roster", "Formation principale"],
                "Mr Tron": ["Main Roster", "Formation principale"],
                "Mcnuggies": ["Main Roster", "Formation principale"]
            },
            lastUpdated: ["2023-03-25"],
            photo: ""
        }
    }
}

/* Append Team Buttons and Game Heads */

function display() {
    let isEnglish = window.location.href.includes("/en");
    for (let gameName in modals) {
        let game = modals[gameName];
        for (let teamName in game) {
            let team = game[teamName];
            if (Object.keys(team.members).length != 0) {
                let button = document.createElement("button");
                button.addEventListener('click', () => teams([gameName, teamName]));
                button.className = "btn btn-dark btn-team m-1 m-lg-3 px-0 fs-5 "
                button.className += (teamName == "garnet") ? "bg-maroon" : ((teamName == "grey") ? "bg-grey" : "bg-gold");
                button.setAttribute("data-bs-toggle", "modal");
                button.setAttribute("data-bs-target", "#modal");
                if (isEnglish) {
                    button.innerHTML = (teamName == "garnet") ? "Garnet Team" : (teamName == "grey") ? "Grey Team" : "Gold Team";
                } else {
                    button.innerHTML = (teamName == "garnet") ? "Équipe Garnet" : (teamName == "grey") ? "Équipe Grey" : "Équipe Gold";
                }
                document.getElementById(gameName).appendChild(button);
            }
        }
    }

    for (let gh in gameheads) {
        if (gameheads[gh] === "") continue;
        document.getElementById(gh).innerHTML = `<h2 class="fs-4 text-end fw-bold">${isEnglish ? "Game Head: " : "Chef de jeu&nbsp;: "}<i class="fab fa-discord ms-1"></i> ${gameheads[gh]}</h2>`;
    }
}

/* Append Teams */

function teams(names) {
    let isEnglish = window.location.href.includes("/en");

    let team = modals[names[0]][names[1]];

    document.getElementById("modalTitle").innerHTML = isEnglish ? team.title[0] : team.title[1];
    document.getElementById("modalBackground").style.backgroundColor = team.background;
    
    let photoDiv = document.getElementById("photo");
    photoDiv.innerHTML = "";
    if (team.photo) { 
        let photo = document.createElement('img');
        photo.src = team.photo;
        photo.className = "w-100 rounded mb-3";
        photo.style = "object-fit: cover; height: 20rem;";
        photo.alt = isEnglish ? (team.title[0] + " Photo") : ("Photo de l'" + team.title[1]);
        photoDiv.append(photo);
    }

    let body = document.getElementById("tableBody");
    body.innerHTML = "";

    for (let member in team["members"]) {
        let photo = document.createElement('img');
        let pos = isEnglish ? team["members"][member][0] : team["members"][member][1];
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = member;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = pos;
        tr.appendChild(td);
        body.appendChild(tr);
    }
    document.getElementById("date").innerHTML = team["lastUpdated"];
}

/* Append Information Button */

const info = document.getElementById("information");
const btn = document.getElementById("information-button");

btn.onclick = function () {
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
};

window.addEventListener('click', function (e) {
    if (!info.contains(e.target) && !btn.contains(e.target)) {
        info.style.display = "none";
    }
});