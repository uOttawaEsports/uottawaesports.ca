let people = { // keys are unique IDs
    "0": {
        name: "",
        pts: 100
    },
    "1": {
        name: "",
        pts: 90
    },
    "2": {
        name: "",
        pts: 80
    },
    "3": {
        name: "",
        pts: 1000
    },
    "4": {
        name: "",
        pts: 95
    },
    "5": {
        name: "Harnza",
        pts: -1
    }
}

let sorted = Object.keys(people).sort((a, b) => { return people[b].pts - people[a].pts }); // sorts the keys of the people object and stores them into an array

let pos = 1;
let headerCreated = false;
sorted.forEach(personObj => {
    if (pos <= 3) {
        let div1 = document.createElement("div");
        div1.className = "d-flex border mb-4";
        let img = document.createElement("img");
        img.src = "../../images/leaderboard/" + (pos == 1 ? "gold" : pos == 2 ? "silver" : "bronze") + ".png"
        img.alt = (pos == 1 ? "gold" : pos == 2 ? "silver" : "bronze")
        img.style.height = "5rem";
        img.style.width = "5rem";
        pos++;
        div1.appendChild(img)
        let div2 = document.createElement("div");
        div2.innerHTML = people[personObj].name;
        div1.appendChild(div2);
        div2 = document.createElement("div");
        div2.innerHTML = people[personObj].pts + "pts";
        div1.appendChild(div2);
        document.getElementById("top3").appendChild(div1);
    } else {
        if (!headerCreated) {
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "Position";
            tr.appendChild(th);
            th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "Name";
            tr.appendChild(th);
            th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = "Points";
            tr.appendChild(th);
            document.getElementById("table-head").appendChild(tr);
            headerCreated = true;
        }
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = pos++;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = people[personObj].name;;
        tr.appendChild(td);
        td = document.createElement("td");
        td.innerHTML = people[personObj].pts;
        tr.appendChild(td);
        document.getElementById("table-body").appendChild(tr);
    }
});