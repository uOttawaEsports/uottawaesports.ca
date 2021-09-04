const modals = {
    "cod garnet": {
        title : ["Call of Duty Garnet Team", "Équipe Garnet de Call of Duty"],
        background: "#800020",
        members: {
            "corey camirand": ["Captain/Main Roster", "Capitaine/Liste principale"],
            "cam19mac": ["Main Roster", "Liste principale"],
            "Goonski": ["Main Roster", "Liste principale"],
            "hishash": ["Main Roster", "Liste principale"],
            "Nacho": ["Main Roster", "Liste principale"],
            "Lego": ["Substitute", "Remplaçant"]
        }
    },
    "cod grey": {
        title: ["Call of Duty Grey Team", "Équipe Grey de Call of Duty"],
        background: "#303031",
        members: {}
    },
    "csgo garnet": {
        title : ["CS:GO Garnet Team", "Équipe Garnet de CS:GO"],
        background: "#800020",
        members: {
            "mtuckster": ["Captain/Main Roster", "Capitaine/Liste principale"],
            "Tense": ["Main Roster", "Liste principale"],
            "Rebow": ["Main Roster", "Liste principale"],
            "baca": ["Main Roster", "Liste principale"],
            "Lego": ["Main Roster", "Liste principale"],
            "Wyndz": ["Substitute", "Remplaçant"]
        }
    },
    "csgo grey": {
        title: ["CS:GO Grey Team", "Équipe Grey de CS:GO"],
        background: "#303031",
        members: {}
    },
    "dota 2 garnet": {
        title: ["DOTA 2 Garnet Team", "Équipe Garnet de DOTA 2"],
        background: "#800020",
        members: {}
    },
    "dota 2 grey": {
        title: ["DOTA 2 Grey Team", "Équipe Grey de DOTA 2"],
        background: "#303031",
        members: {}
    },
    "fortnite garnet": {
        title : ["Fortnite Garnet Team", "Équipe Garnet de Fortnite"],
        background: "#800020",
        members: {}
    },
    "fortnite grey": {
        title: ["Fortnite Grey Team", "Équipe Grey de Fortnite"],
        background: "#303031",
        members: {}
    },
    "hs garnet": {
        title : ["Hearthstone Garnet Team", "Équipe Garnet de Hearthstone"],
        background: "#800020",
        members: {}
    },
    "hs grey": {
        title: ["Hearthstone Grey Team", "Équipe Grey de Hearthstone"],
        background: "#303031",
        members: {}
    },
    "lol garnet": {
        title: ["League of Legends Garnet Team", "Équipe Garnet de League of Legends"],
        background: "#800020",
        members: {}
    },
    "lol grey": {
        title: ["League of Legends Grey Team", "Équipe Grey de League of Legends"],
        background: "#303031",
        members: {}
    },
    "osu garnet": {
        title : ["osu! Garnet Team", "Équipe Garnet de osu!"],
        background: "#800020",
        members: {}
    },
    "osu grey": {
        title: ["osu! Grey Team", "Équipe Grey de osu!"],
        background: "#303031",
        members: {}
    },
    "ow garnet": {
        title : ["Overwatch Garnet Team", "Équipe Garnet de Overwatch"],
        background: "#800020",
        members: {}
    },
    "ow grey": {
        title: ["Overwatch Grey Team", "Équipe Grey de Overwatch"],
        background: "#303031",
        members: {}
    },
    "r6 garnet": {
        title: ["Rainbow Six Siege Garnet Team", "Équipe Garnet de Rainbow Six Siege"],
        background: "#800020",
        members: {
            "Zander": ["Captain/Main Roster", "Capitaine/Liste principale"],
            "Axent": ["Main Roster", "Liste principale"],
            "BechoDrive": ["Main Roster", "Liste principale"],
            "Chrs": ["Main Roster", "Liste principale"],
            "K3baddywAfatty": ["Main Roster", "Liste principale"],
            "3nsuoli": ["Substitute", "Remplaçant"],
            "Vinyl": ["Substitute", "Remplaçant"]
        }
    },
    "r6 grey": {
        title: ["Rainbow Six Siege Grey Team", "Équipe Grey de Rainbow Six Siege"],
        background: "#303031",
        members: {
            "Kiro": ["Coach/Substitute", "Entraîneur/Remplaçant"],
            "Apollo": ["Captain/Main Roster", "Capitaine/Liste principale"],
            "AsianFlow": ["Main Roster", "Liste principale"],
            "Cronder": ["Main Roster", "Liste principale"],
            "Nacho": ["Main Roster", "Liste principale"],
            "ohkaysher": ["Main Roster", "Liste principale"],
            "Lits": ["Substitute", "Remplaçant"]
        }
    },
    "rl garnet": {
        title: ["Rocket League Garnet Team", "Équipe Garnet de Rocket League"],
        background: "#800020",
        members: {}
    },
    "rl grey": {
        title: ["Rocket League Grey Team", "Équipe Grey de Rocket League"],
        background: "#303031",
        members: {}
    },
    "ssbu garnet": {
        title: ["Super Smash Bros. Ultimate Garnet Team", "Équipe Garnet de Super Smash Bros. Ultimate"],
        background: "#800020",
        members: {}
    },
    "ssbu grey": {
        title: ["Super Smash Bros. Ultimate Grey Team", "Équipe Grey de Super Smash Bros. Ultimate"],
        background: "#303031",
        members: {}
    },
    "val garnet": {
        title: ["VALORANT Garnet Team", "Équipe Garnet de VALORANT"],
        background: "#800020",
        members: {
            "Kiro": ["Manager", "Manager"],
            "kang xd": ["Coach", "Entraîneur"],
            "bladee": ["Main Roster", "Liste principale"],
            "coal": ["Main Roster", "Liste principale"],
            "housieee": ["Main Roster", "Liste principale"],
            "Jacob": ["Main Roster", "Liste principale"],
            "Jer": ["Main Roster", "Liste principale"],
            "Apl": ["Substitute", "Remplaçant"],
            "SyCoLight": ["Substitute", "Remplaçant"]
        }
    },
    "val grey": {
        title: ["VALORANT Grey Team", "Équipe Grey de VALORANT"],
        background: "#303031",
        members: {
            "Econ God": ["Coach", "Entraîneur"],
            "chriski": ["Main Roster", "Liste principale"],
            "Goff": ["Main Roster", "Liste principale"],
            "inertia": ["Main Roster", "Liste principale"],
            "Kiro": ["Main Roster", "Liste principale"],
            "Leek": ["Main Roster", "Liste principale"],
            "LittleBozz": ["Substitute", "Remplaçant"]
        }
    }
}

function teams(name) {
    let isEnglish = window.location.href.includes("/en");

    document.getElementById("modalTitle").innerHTML = isEnglish ? modals[name].title[0] : modals[name].title[1];
    document.getElementById("modalBackground").style.backgroundColor = modals[name].background;

    let body = document.getElementById("modalBody");
    body.innerHTML = "";

    for (let member in modals[name]["members"]) {
        let pos = isEnglish ? modals[name]["members"][member][0] : modals[name]["members"][member][1];
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