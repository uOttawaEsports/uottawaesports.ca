let execs = { // keys are unique IDs
    "0": {
        name: "Steven Li",
        pts: 1
    }
}

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
        points.innerHTML = execs[personObj].pts + (execs[personObj].pts == 1 ? " point": " points");
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
            th.className = "text-start"
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
            th.innerHTML = "Point(s)";
            th.className = "text-start";
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