// Most recent exec teams at the bottom of the object.
let pastExecs = {
    "2018-2019": {
        image: "../../../images/execs/past/2018-2019.png",
        people: {
            "Jessica Rivers": ["Founder & Co-President", "Fondatrice & Co-Présidente"],
            "Trent Schwartz": ["Co-President", "Co-Président"],
            "Jaxon Murphy": ["VP Social", "VP Social"],
            "Steven Au": ["CS:GO Game Head", "Chef de jeu de CS:GO"],
            "Andrew Leblanc": ["Hearthstone Game Head", "Chef de jeu de Hearthstone"],
            "Chris Mancini": ["Super Smash Bros. Ultimate Game Head", "Chef de jeu de Super Smash Bros. Ultimate"],
            "Benoit Gagnier": ["World of Warcraft Game Head", "Chef de jeu de World of Warcraft"]
        }
    },
    "2019-2020": {
        image: "../../../images/execs/past/2019-2020.png",
        people: {
            "Trent Schwartz": ["Co-President", "Co-Président"],
            "Zack Goldstein": ["Co-President", "Co-Président"],
            "Varis Gupta": ["VP Finance", "VP Finances"],
            "Martina On": ["VP Internal/External", "VP Interne/Externe"],
            "Ben Stephenson": ["VP Competitive", "VP Compétitif"],
            "Ryan Heffernan": ["VP Events", "VP Événements"],
            "Jaxon Murphy": ["VP Social", "VP Social"],
            "Lachhuman Gotame": ["CS:GO Game Head", "Chef de jeu de CS:GO"],
            "Deschanel Li": ["DOTA 2 Game Head", "Chef de jeu de DOTA 2"],
            "Andrew Leblanc": ["Hearthstone Game Head", "Chef de jeu de Hearthstone"],
            "Ryan Adam": ["Rainbow Six Siege Game Head", "Chef de jeu de Rainbow Six Siege"],
            "Chris Mancini": ["Super Smash Bros. Ultimate Game Head", "Chef de jeu de Super Smash Bros. Ultimate"]
        }
    },
    "2020-2021": {
        image: "../../../images/execs/past/2020-2021.png",
        people: {
            "Zack Goldstein": ["Co-President", "Co-Président"],
            "Jaxon Murphy": ["Co-President", "Co-Président"],
            "Michel Gaudet": ["VP Finance", "VP Finances"],
            "Alex Lisitsas": ["VP Internal", "VP Interne"],
            "Ben Gabriel": ["VP External", "VP Externe"],
            "Andrew Leblanc": ["VP Competitive", "VP Compétitif"],
            "Calvin Koehl": ["VP Events", "VP Événements"],
            "Martina On": ["VP Social & VALORANT Game Head", "VP Social & Chef de jeu de VALORANT"],
            "Jean-Felix Milette": ["Call of Duty Game Head", "Chef de jeu de Call of Duty"],
            "Bora Basar": ["CS:GO Game Head", "Chef de jeu de CS:GO"],
            "Peter Karpov": ["DOTA 2 Game Head", "Chef de jeu de DOTA 2"],
            "Ryan Farrell": ["Fighting Games Game Head", "Chef de jeu des jeux de combat"],
            "Yucy Jia": ["League of Legends Game Head", "Chef de jeu de League of Legends"],
            "Benoit Gagnier": ["Overwatch Game Head", "Chef de jeu de Overwatch"],
            "Griffin Taylor": ["Rainbow Six Siege Game Head", "Chef de jeu de Rainbow Six Siege"],
            "Jean-Daniel Proulx": ["Rocket League Game Head", "Chef de jeu de Rocket League"],
            "Simon Lamontagne": ["Starcraft 2 Game Head", "Chef de jeu de Starcraft 2"],
            "Tyler Lindsay": ["Super Smash Bros. Ultimate Game Head", "Chef de jeu de Super Smash Bros. Ultimate"]
        }
    }
}

function displayExecs() {
    let isEnglish = window.location.href.includes("/en");

    for (let year in pastExecs) {
        let execs = pastExecs[year];

        let div1 = document.createElement("div");
        div1.className = "card bg-dark text-white mb-2 m-sm-2 mx-lg-3 mb-lg-4";

        let img = document.createElement("img");
        img.src = execs.image;
        img.className = "card-img-top px-1";
        img.alt = (isEnglish ? `Execs from ${year}` : `Les cadres de l'année ${year}`);

        let div2 = document.createElement("div");
        div2.className = "card-body px-0";

        let h2 = document.createElement("h2");
        h2.className = "card-title text-center mb-3 fs-4 fw-bold";
        h2.innerHTML = year;

        let table = document.createElement("table");
        table.className = "table table-dark table-striped table-bordered border-secondary mb-0";

        let thead = document.createElement("thead");

        let tr = document.createElement("tr");

        let th1 = document.createElement("th");
        th1.className = "w-50";
        th1.scope = "col";
        th1.innerHTML = (isEnglish ? "Name" : "Nom");

        let th2 = document.createElement("th");
        th2.className = "w-50";
        th2.scope = "col";
        th2.innerHTML = (isEnglish ? "Role" : "Rôle");

        tr.appendChild(th1);
        tr.appendChild(th2);
        thead.appendChild(tr);

        let tbody = document.createElement("tbody");

        for (let person in execs.people) {
            let tr2 = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = person;
            let td2 = document.createElement("td");
            td2.innerHTML = (isEnglish ? execs["people"][person][0] : execs["people"][person][1]);
            tr2.appendChild(td1);
            tr2.appendChild(td2);
            tbody.appendChild(tr2);
        }

        table.appendChild(thead);
        table.appendChild(tbody);
        div2.appendChild(h2);
        div2.appendChild(table);
        div1.appendChild(img);
        div1.appendChild(div2);

        document.getElementById("content").prepend(div1);
    }
}