let date = "2022-01-20";

let members = {
    "Xssant#0454": 0,
    "jay moon#0090": 0,
    "yrrah#6247": 0,
    "Key#7036": 0,
    "Dida#3894": 0,
    "Nachoson#3153": 0,
    "Bolin#6549": 0,
    "Drakaress#8696": 0,
    "Sleepy#2536": 0,
    "SpartanRS#8842": 0,
    "Kaidan#2950": 0,
    "Novablazer#6764": 0,
    "Tundr4#6291": 0,
    "Alim - アリム#2560": 0,
    "Zyoulou#3814": 0,
    "ai23756#2908": 0,
    "Maiuh#1010": 0,
    "cri#5555": 0,
    "DragonRage#8024": 0,
    "Zeyu#0049": 0,
    "Pandazzle#4064": 0,
    "ComplicatedCow#6424": 0,
    "asoggysliceoftoast#3812": 0,
    "biggest fish#6763": 0,
    "YoChrisyBoi#6126": 0,
    "chill_vibes#7200": 0,
    "RainbowPigCake#8320": 0,
    "Odessadawg#7675": 0,
    "jessica#3913": 0,
    "Jokardom#3902": 0,
    "VStriker™#1630": 0,
    "Ben-03#6563": 0,
    "Noctember#6660": 0,
    "slow#1563": 0,
    "JasonFGC#0314": 0,
    "birdeatfish#1319": 0,
    "inertia#0137": 0,
    "JChan#5481": 0,
    "Chair#7187": 0,
    "Copper#5088": 0,
    "ZEK#7486": 0,
    "Overider21#9041": 0,
    "Kobatron#4228": 0,
    "meredithJimenez#9563": 0,
    "Narth#1623": 0,
    "Yell#8888": 0,
    "chessguy13#4162": 0,
    "Emnicbert#8486": 0,
    "VenuxCore5#8055": 0,
    "MistahFrosty#3915": 0,
    "Sas#9992": 0,
    "ohkshr#0404": 0,
    "Fluccimane#1708": 0,
    "Akram Raf#5599": 0,
    "Elliot#0083": 0,
    "alilo#6985": 0
}

let isEnglish = window.location.href.includes("/en");

document.getElementById("date").innerHTML = date;

let sorted = Object.keys(members).sort((a, b) => { return members[b] - members[a] }); // sorts the keys of the members object and stores them into an array

let pos = 1;
let tableCreated = false;

sorted.forEach(name => {
    if (pos <= 3) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let discordUser = document.createElement("p");
        let points = document.createElement("p");

        div.className = "d-flex mb-3 rounded";
        div.className += (pos == 1 ? " bg-gold" : pos == 2 ? " bg-silver" : " bg-bronze");

        img.src = "../../images/leaderboard/" + (pos == 1 ? "gold" : pos == 2 ? "silver" : "bronze") + ".png";
        img.alt = (pos == 1 ? "Gold badge" : pos == 2 ? "Silver badge" : "Bronze badge");
        img.className = "p-1 d-flex align-self-center";
        img.style.height = "4rem";
        img.style.width = "4rem";
        div.appendChild(img);

        discordUser.className = "fs-4 d-flex align-self-center me-auto mb-0 ms-1";
        discordUser.innerHTML = ('<span class="fw-bold d-flex align-self-center">' + pos + ".</span>&nbsp;" + '<span class="text-break">' + name + '</span>');
        div.appendChild(discordUser);

        points.className = "fs-4 d-flex align-self-center mb-0 me-2";
        if (members[name] == 1) {
            points.innerHTML = members[name] + (isEnglish ? "&nbsp;ticket" : "&nbsp;billet");
        } else {
            points.innerHTML = members[name] + (isEnglish ? "&nbsp;tickets" : "&nbsp;billets");
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
        td.innerHTML = name;
        td.className = "text-start text-break";
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = members[name];
        td.className = "text-end";
        tr.appendChild(td);

        document.getElementById("tableBody").appendChild(tr);
    }
});