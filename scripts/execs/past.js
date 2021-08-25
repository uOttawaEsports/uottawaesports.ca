// for every additional role an exec has, add a space to the end of their name
// take a look at 2020-2021 with Martina On, for example

let pastExecs = {
    "2018-2019": {
        image: "../../../images/logo.png",
        people: {
            "Jessica Rivers": "Founder/Co-President",
            "Trent Schwartz": "Co-President",
            "Jaxon Murphy": "VP Social",
            "Steven Au": "CS:GO Game Head",
            "Andrew Leblanc": "Hearthstone Game Head",
            "Chris Mancini": "Super Smash Bros. Ultimate Game Head",
            "Benoit Gagnier": "World of Warcraft Game Head"
        }
    },
    "2019-2020": {
        image: "../../../images/logo.png",
        people: {
            "Trent Schwartz" : "Co-President",
            "Zack Goldstein" : "Co-President",
            "Varis Gupta" : "VP Finance",
            "Ben Stephenson" : "VP Competitive",
            "Ryan Heffernan" : "VP Events",
            "Martina On" : "VP Internal/External",
            "Jaxon Murphy" : "VP Social",
            "Luchhuman Gotame" : "CS:GO Game Head",
            "Deschanel Li" : "DOTA 2 Game Head",
            "Andrew Leblanc" : "Hearthstone Game Head",
            "Ryan Adam" : "Rainbow Six Siege Game Head",
            "Chris Mancini" : "Super Smash Bros. Ultimate Game Head"
        }
    },
    "2020-2021": {
        image: "../../../images/execs/past/2020-2021.png",
        people: {
            "Zack Goldstein": "Co-President",
            "Jaxon Murphy": "Co-President",
            "Michel Gaudet": "VP Finance",
            "Andrew Leblanc": "VP Competitive",
            "Calvin Koehl": "VP Events",
            "Alex Lisitsas": "VP Internal",
            "Ben Gabriel": "VP External",
            "Martina On": "VP Social",
            "Jean-Felix Milette": "Call of Duty Game Head",
            "Bora Basar": "CS:GO Game Head",
            "Peter Karpov": "DOTA 2 Game Head",
            "Ryan Farrell": "Fighting Games Game Head",
            "Yucy Jia": "League of Legends Game Head",
            "Benoit Gagnier": "Overwatch Game Head",
            "Griffin Taylor": "Rainbow Six Siege Game Head",
            "Jean-Daniel Proulx": "Rocket League Game Head",
            "Simon Lamontagne": "Starcraft 2 Game Head",
            "Tyler Lindsay": "Super Smash Bros. Ultimate Game Head",
            "Martina On ": "VALORANT Game Head"
        }
    }
}

function displayExecs() {
    for (let year in pastExecs) {
        let execs = pastExecs[year];

        let div1 = document.createElement("div");
        div1.className = "card bg-dark text-white mb-2 m-sm-2 mx-lg-2 mb-lg-4";

        let img = document.createElement("img");
        img.src = execs.image;
        img.className = "card-img-top px-1";
        img.alt = `Execs from ${year}`;

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
        th1.innerHTML = "Name";

        let th2 = document.createElement("th");
        th2.className = "w-50";
        th2.scope = "col";
        th2.innerHTML = "Role";

        tr.appendChild(th1);
        tr.appendChild(th2);
        thead.appendChild(tr);

        let tbody = document.createElement("tbody");

        for (let person in execs.people) {
            let tr2 = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = person;
            let td2 = document.createElement("td");
            td2.innerHTML = execs["people"][person];
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