let execs = { // keys are unique IDs
    "0": {
        name: "ai23756#2908",
        pts: 0
    },
    "1": {
        name: "Dida#3894",
        pts: 0
    },
    "2": {
        name: "yrrah#6247",
        pts: 0
    },
    "3": {
        name: "Novablazer#6764",
        pts: 0
    },
    "4": {
        name: "Tundr4#6291",
        pts: 0
    },
    "5": {
        name: "Bolin#6549",
        pts: 0
    },
    "6": {
        name: "SpartanRS#8842",
        pts: 0
    },
    "7": {
        name: "Sleepy#2536",
        pts: 0
    },
    "8": {
        name: "cri#1231",
        pts: 0
    },
    "9": {
        name: "jay moon#0090",
        pts: 0
    },
    "10": {
        name: "Drakaress#8696",
        pts: 0
    },
    "11": {
        name: "Maiuh#1010",
        pts: 0
    },
    "12": {
        name: "Xssant#0454",
        pts: 0
    },
    "13": {
        name: "Key#7036",
        pts: 0
    },
    "14": {
        name: "Zyoulou#3814",
        pts: 0
    },
    "15": {
        name: "Alim - アリム#2560",
        pts: 0
    },
    "16": {
        name: "Nachoson#3153",
        pts: 0
    },
    "17": {
        name: "Kaidan#2950",
        pts: 0
    }
}

let isEnglish = window.location.href.includes("/en");

let date = "2021-09-06";

// document.getElementById("date").innerHTML = window.location.href.includes("/en") ? date[0] : date[1];
document.getElementById("date").innerHTML = date;

let sorted = Object.keys(execs).sort((a, b) => { return execs[b].pts - execs[a].pts }); // sorts the keys of the execs object and stores them into an array

let pos = 1;
let tableCreated = false;

sorted.forEach(personObj => {
    if (pos <= 3) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let points = document.createElement("p");

        div.className = "d-flex mb-4";
        div.className += (pos == 1 ? " bg-gold" : pos == 2 ? " bg-silver" : " bg-bronze");

        img.src = "../../images/leaderboard/" + (pos == 1 ? "gold" : pos == 2 ? "silver" : "bronze") + ".png";
        img.alt = (pos == 1 ? "Gold badge" : pos == 2 ? "Silver badge" : "Bronze badge");
        img.className = "p-1";
        img.style.height = "5rem";
        img.style.width = "5rem";
        div.appendChild(img);

        name.className = "fs-3 d-flex align-self-center me-auto mb-0 ms-1";
        name.innerHTML = ('<span class="fw-bold">' + pos + ".</span>&nbsp;" + execs[personObj].name);
        div.appendChild(name);

        points.className = "fs-3 d-flex align-self-center mb-0 me-2";
        if (execs[personObj].pts == 1) {
            points.innerHTML = execs[personObj].pts + (isEnglish ? " ticket" : " billet");
        } else {
            points.innerHTML = execs[personObj].pts + (isEnglish ? " tickets" : " billets");
        }
        div.appendChild(points);

        document.getElementById("top3").appendChild(div);
        pos++;
    } else {
        if (!tableCreated) {
            let table = document.createElement("table");
            table.className = "table table-dark table-striped table-bordered border-secondary";
            let thead = document.createElement("thead");
            let tbody = document.createElement("tbody");
            tbody.id = "tableBody";
            let tr = document.createElement("tr");
            let th = document.createElement("th");

            th.scope = "col";
            th.innerHTML = "Position";
            th.className = "text-center"
            th.style.width = "1%";
            th.style.whiteSpace = "nowrap";
            tr.appendChild(th);

            th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = window.location.href.includes("/en") ? "Name" : "Nom";
            th.className = "w-50 text-start";
            tr.appendChild(th);

            th = document.createElement("th");
            th.scope = "col";
            th.innerHTML = isEnglish ? "Ticket(s)" : "Billet(s)";
            th.className = "text-center";
            th.style.width = "1%";
            th.style.whiteSpace = "nowrap";
            tr.appendChild(th);

            thead.appendChild(tr);
            table.append(thead, tbody);
            document.getElementById("table").appendChild(table);
            tableCreated = true;
        }
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let td = document.createElement("td");

        th.innerHTML = pos++;
        th.scope = "row";
        th.className = "text-center";
        tr.appendChild(th);

        td = document.createElement("td");
        td.innerHTML = execs[personObj].name;;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = execs[personObj].pts;
        td.className = "text-end";
        tr.appendChild(td);

        document.getElementById("tableBody").appendChild(tr);
    }
});