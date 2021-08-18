const modals = {
    "csgo garnet": {
        title: "Valorant Garnet Team",
        background: "#800020",
        members: {

        }
    },
    "csgo grey": {
        title: "Valorant Grey Team",
        background: "#303031",
        members: {

        }
    },
    "dota2 garnet": {
        title: "Valorant Garnet Team",
        background: "#800020",
        members: {

        }
    },
    "dota2 grey": {
        title: "Valorant Grey Team",
        background: "#303031",
        members: {

        }
    },
    "lol garnet": {
        title: "Valorant Garnet Team",
        background: "#800020",
        members: {

        }
    },
    "lol grey": {
        title: "Valorant Grey Team",
        background: "#303031",
        members: {

        }
    },
    "r6 garnet": {
        title: "Valorant Garnet Team",
        background: "#800020",
        members: {

        }
    },
    "r6 grey": {
        title: "Valorant Grey Team",
        background: "#303031",
        members: {

        }
    },
    "rl garnet": {
        title: "Valorant Garnet Team",
        background: "#800020",
        members: {

        }
    },
    "rl grey": {
        title: "Valorant Grey Team",
        background: "#303031",
        members: {

        }
    },
    "val garnet": {
        title: "Valorant Garnet Team",
        background: "#800020",
        members: {
            "Kiro": "Manager",
            "kang xd": "Coach",
            "bladee": "Main Roster",
            "coal": "Main Roster",
            "housieee": "Main Roster",
            "Jacob": "Main Roster",
            "Jer": "Main Roster",
            "Apl": "Substitute",
            "SyCoLight": "Substitute",
        }
    },
    "val grey": {
        title: "Valorant Grey Team",
        background: "#303031",
        members: {
            "Econ God": "Coach",
            "chriski": "Main Roster Roster",
            "Goff": "Main Roster",
            "inertia": "Main Roster",
            "Kiro": "Main Roster",
            "Leek": "Main Roster",
            "LittleBozz": "Substitute",
        }
    }
}

function teams(name) {

    document.getElementById("modalTitle").innerHTML = modals[name].title;
    document.getElementById("modalBackground").style.backgroundColor = modals[name].background;

    let body = document.getElementById("modalBody");
    body.innerHTML = "";

    for (let member in modals[name]["members"]) {
        let pos = modals[name]["members"][member];
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