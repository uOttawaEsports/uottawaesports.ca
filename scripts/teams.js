// Teams that will be displayed will only be "garnet", "grey", and "gold".
// If there exists a second gold team, name the first gold team "gold" and the second "gold 2".
const modals = {
    "cod-team": {
        "garnet": {
            title: ["Call of Duty Garnet Team", "Équipe Garnet de Call of Duty"],
            background: "#800020",
            members: {
                "corey camirand": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "cam19mac": ["Main Roster", "Formation principale"],
                "Goonski": ["Main Roster", "Formation principale"],
                "hishash": ["Main Roster", "Formation principale"],
                "Nacho": ["Main Roster", "Formation principale"],
                "Lego": ["Substitute", "Remplaçant"]
            }
        },
        "grey": {
            title: ["Call of Duty Grey Team", "Équipe Grey de Call of Duty"],
            background: "#303031",
            members: {}
        }
    },
    "csgo-team": {
        "garnet": {
            title: ["CS:GO Garnet Team", "Équipe Garnet de CS:GO"],
            background: "#800020",
            members: {
                "mtuckster": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "Tense": ["Main Roster", "Formation principale"],
                "Rebow": ["Main Roster", "Formation principale"],
                "baca": ["Main Roster", "Formation principale"],
                "Lego": ["Main Roster", "Formation principale"],
                "Wyndz": ["Substitute", "Remplaçant"]
            }
        },
        "grey": {
            title: ["CS:GO Grey Team", "Équipe Grey de CS:GO"],
            background: "#303031",
            members: {}
        }
    },
    "dota2-team": {
        "garnet": {
            title: ["DOTA 2 Garnet Team", "Équipe Garnet de DOTA 2"],
            background: "#800020",
            members: {}
        },
        "grey": {
            title: ["DOTA 2 Grey Team", "Équipe Grey de DOTA 2"],
            background: "#303031",
            members: {}
        }
    },
    "fortnite-team": {
        "garnet": {
            title: ["Fortnite Garnet Team", "Équipe Garnet de Fortnite"],
            background: "#800020",
            members: {}
        },
        "grey": {
            title: ["Fortnite Grey Team", "Équipe Grey de Fortnite"],
            background: "#303031",
            members: {}
        }
    },
    "hs-team": {
        "garnet": {
            title: ["Hearthstone Garnet Team", "Équipe Garnet de Hearthstone"],
            background: "#800020",
            members: {}
        },
        "grey": {
            title: ["Hearthstone Grey Team", "Équipe Grey de Hearthstone"],
            background: "#303031",
            members: {}
        }
    },
    "lol-team": {
        "garnet": {
            title: ["League of Legends Garnet Team", "Équipe Garnet de League of Legends"],
            background: "#800020",
            members: {
                "Doraro": ["Top", "Top"],
                "gumbee power": ["Jungle", "Jungle"],
                "Midnight Akuma": ["Mid", "Mid"],
                "PieckPerformance": ["ADC", "ADC"],
                "sprinklr": ["Support", "Support"],
                "Draig": ["Substitute - Mid/Support", "Remplaçant - Mid/Support"]
            }
        },
        "grey": {
            title: ["League of Legends Grey Team", "Équipe Grey de League of Legends"],
            background: "#303031",
            members: {
                "amlo12": ["ADC", "ADC"],
                "bobbyisfree": ["Top", "Top"],
                "bred": ["Mid", "Mid"],
                "darkutopia": ["Support", "Support"],
                "oKyle": ["Jungle", "Jungle"],
                "MistahFrosty": ["Substitute - Top/Jungle", "Remplaçant - Top/Jungle"],
                "Narth": ["Substitute - Support", "Remplaçant - Support"]
            }
        },
        "gold": {
            title: ["League of Legends Gold Team", "Équipe Gold de League of Legends"],
            background: "#665814",
            members: {}
        }
    },
    "osu-team": {
        "garnet": {
            title: ["osu! Garnet Team", "Équipe Garnet de osu!"],
            background: "#800020",
            members: {}
        },
        "grey": {
            title: ["osu! Grey Team", "Équipe Grey de osu!"],
            background: "#303031",
            members: {}
        }
    },
    "ow-team": {
        "garnet": {
            title: ["Overwatch Garnet Team", "Équipe Garnet de Overwatch"],
            background: "#800020",
            members: {}
        },
        "grey": {
            title: ["Overwatch Grey Team", "Équipe Grey de Overwatch"],
            background: "#303031",
            members: {}
        }
    },
    "r6-team": {
        "garnet": {
            title: ["Rainbow Six Siege Garnet Team", "Équipe Garnet de Rainbow Six Siege"],
            background: "#800020",
            members: {
                "Zander": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "Axent": ["Main Roster", "Formation principale"],
                "Chrs": ["Main Roster", "Formation principale"],
                "Echodrive": ["Main Roster", "Formation principale"],
                "k3addy": ["Main Roster", "Formation principale"],
                "Vaal": ["Substitute", "Remplaçant"],
                "Vinyl": ["Substitute", "Remplaçant"]
            }
        },
        "grey": {
            title: ["Rainbow Six Siege Grey Team", "Équipe Grey de Rainbow Six Siege"],
            background: "#303031",
            members: {
                "Kiro": ["Coach/Substitute", "Entraîneur/Remplaçant"],
                "Apollo": ["Captain/Main Roster", "Capitaine/Formation principale"],
                "AsianFlow": ["Main Roster", "Formation principale"],
                "Cronder": ["Main Roster", "Formation principale"],
                "Nacho": ["Main Roster", "Formation principale"],
                "ohkaysher": ["Main Roster", "Formation principale"],
                "Lits": ["Substitute", "Remplaçant"]
            }
        }
    },
    "rl-team": {
        "garnet": {
            title: ["Rocket League Garnet Team", "Équipe Garnet de Rocket League"],
            background: "#800020",
            members: {
                "fabienlef": ["Main Roster", "Formation principale"],
                "Hexki": ["Main Roster", "Formation principale"],
                "JChan": ["Main Roster", "Formation principale"],
                "koat": ["Substitute", "Remplaçant"]
            }
        },
        "grey": {
            title: ["Rocket League Grey Team", "Équipe Grey de Rocket League"],
            background: "#303031",
            members: {
                "JoBone": ["Main Roster", "Formation principale"],
                "koat": ["Main Roster", "Formation principale"],
                "tannwan0625": ["Main Roster", "Formation principale"],
                "Mystyclious": ["Substitute", "Remplaçant"]
            }
        },
        "gold": {
            title: ["Rocket League Gold Team", "Équipe Gold de Rocket League"],
            background: "#665814",
            members: {
                "AKRAM": ["Main Roster", "Formation principale"],
                "Shail": ["Main Roster", "Formation principale"],
                "Tahzo": ["Main Roster", "Formation principale"],
                "Zyoulou": ["Substitute", "Remplaçant"]
            }
        }
    },
    "ssbu-team": {
        "garnet": {
            title: ["Super Smash Bros. Ultimate Garnet Team", "Équipe Garnet de Super Smash Bros. Ultimate"],
            background: "#800020",
            members: {}
        },
        "grey": {
            title: ["Super Smash Bros. Ultimate Grey Team", "Équipe Grey de Super Smash Bros. Ultimate"],
            background: "#303031",
            members: {}
        }
    },
    "val-team": {
        "garnet": {
            title: ["VALORANT Garnet Team", "Équipe Garnet de VALORANT"],
            background: "#800020",
            members: {
                "Kiro": ["Manager", "Manager"],
                "kang xd": ["Coach", "Entraîneur"],
                "Apl": ["Main Roster", "Formation principale"],
                "bladee": ["Main Roster", "Formation principale"],
                "housieee": ["Main Roster", "Formation principale"],
                "Jacob": ["Main Roster", "Formation principale"],
                "Jer": ["Main Roster", "Formation principale"],
                "coal": ["Substitute", "Remplaçant"],
                "prompt": ["Substitute", "Remplaçant"],
                "SyCo": ["Substitute", "Remplaçant"]
            }
        },
        "grey": {
            title: ["VALORANT Grey Team", "Équipe Grey de VALORANT"],
            background: "#303031",
            members: {
                "Kiro": ["Manager", "Manager"],
                "Econ God": ["Coach", "Entraîneur"],
                "chriski": ["Main Roster", "Formation principale"],
                "Goff": ["Main Roster", "Formation principale"],
                "inertia": ["Main Roster", "Formation principale"],
                "Leek": ["Main Roster", "Formation principale"],
                "LittleBozz": ["Main Roster", "Formation principale"],
                "Rodwave": ["Substitute", "Remplaçant"],
                "Xssant": ["Substitute", "Remplaçant"]
            }
        },
        "gold": {
            title: ["VALORANT Gold Team", "Équipe Gold de VALORANT"],
            background: "#665814",
            members: {
                "Dish": ["Main Roster", "Formation principale"],
                "ERIC": ["Main Roster", "Formation principale"],
                "Overider21": ["Main Roster", "Formation principale"],
                "RainbowPigCake": ["Main Roster", "Formation principale"],
                "yj": ["Main Roster", "Formation principale"],
                "Artu": ["Substitute", "Remplaçant"],
                "JasonFGC": ["Substitute", "Remplaçant"],
                "Noctember": ["Substitute", "Remplaçant"]
            }
        }
    }
}

function displayButtons() {
    let isEnglish = window.location.href.includes("/en");
    console.log(isEnglish);
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
                    button.innerHTML = (teamName == "garnet") ? "Garnet Team" : ((teamName == "grey") ? "Grey Team" : ((teamName == "gold") ? ((game.hasOwnProperty("gold 2")) ? "Gold Team 1" : "Gold Team") : "Gold Team 2"));
                } else {
                    button.innerHTML = (teamName == "garnet") ? "Équipe Garnet" : ((teamName == "grey") ? "Équipe Grey" : ((teamName == "gold") ? ((game.hasOwnProperty("gold 2")) ? "Équipe Gold 1" : "Équipe Gold") : "Équipe Gold 2"));
                }
                document.getElementById(gameName).appendChild(button);
            }
        }
    }
}

function teams(names) {
    let isEnglish = window.location.href.includes("/en");

    let team = modals[names[0]][names[1]];

    document.getElementById("modalTitle").innerHTML = isEnglish ? team.title[0] : team.title[1];
    document.getElementById("modalBackground").style.backgroundColor = team.background;

    let body = document.getElementById("modalBody");
    body.innerHTML = "";

    for (let member in team["members"]) {
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
}

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