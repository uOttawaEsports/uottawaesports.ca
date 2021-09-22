// The website will display a maximum of six (6) events at a time. You can add more than six if you'd like to queue up the events for organizational purposes.
// Be careful not to add too much description text, as it may cause the cards to become an uneven height.
// Events in closest proximity must be placed at the top of the object.
const events = [
    {
        title: ["VALORANT In-house", "VALORANT In-house"],
        image: ["../../images/events/val.png", "VALORANT logo", "Logo de VALORANT"],
        text: ["Join other VALORANT players in an in-house! This is a great way of meeting new people who enjoy the same game as you!", "Rejoignez d'autres joueurs de VALORANT dans un «&nbsp;in-house&nbsp;»&nbsp;! C'est un excellent moyen de rencontrer de nouvelles personnes qui aiment le même jeu que vous&nbsp;!"],
        date: ["Saturday, September 25", "Samedi 25 septembre"],
        time: ["4:00 PM", "16h00"],
        location: ["Discord", "Discord"],
        contact: ["Kiro#3697", "Kiro#3697"]
    },
    {
        title: ["osu! Garnet Team Tryouts", "Épreuve de sélection pour l'équipe Garnet de osu!"],
        image: ["../../images/events/osu.png", "osu! logo", "Logo de osu!"],
        text: ["Must be a full-time student at the University of Ottawa. <br />All ranks are welcome!", "Besoin d'être un étudiant à temps complet à l'Université d'Ottawa. <br />Tous sont les bienvenus&nbsp!"],
        date: ["Saturday, September 25", "Samedi 25 septembre"],
        time: ["8:00 PM - 10:00 PM", "20h00 à 22h00"],
        location: ["Discord", "Discord"],
        contact: ["Fulserish#3239", "Fulserish#3239"]
    },
    {
        title: ["Exec Game Night", "Soirée de jeux avec les cadres"],
        image: ["../../images/events/amongus.png", "uOttawa Esports logo", "Logo de uOttawa Esports"],
        text: ["A bi-weekly game night where execs, game heads, and friends play together in casual and competitive games! On this night, we'll be playing Among Us.", "Une soirée de jeux bihebdomadaire où les cadres, les chefs de jeu et les amis jouent ensemble à des jeux occasionnels et compétitifs&nbsp;! Ce soir, nous jouerons à Among Us."],
        date: ["Thursday, September 30", "Jeudi 30 septembre"],
        time: ["9:30 PM - 11:00 PM", "21h30 à 23h00"],
        location: ["<a href='https://www.twitch.tv/uottawaesports' rel='external' target='_blank'>Twitch</a>", "<a href='https://www.twitch.tv/uottawaesports' rel='external' target='_blank'>Twitch</a>"],
        contact: ["Yell#8888", "Yell#8888"]
    },
];

function displayEvents() {
    let isEnglish = window.location.href.includes("/en");
    let onEventPage = window.location.href.includes("/events") || window.location.href.includes("/evenements");

    if(events.length == 0 ) {
        let div = document.createElement("div");
        div.className = "m-1 m-lg-3 alert alert-warning w-100 text-center fs-5";
        div.innerHTML = isEnglish ? "There are no upcoming events. Stay tuned!" : "Il n'y a aucun événement à venir. Restez à l'écoute&nbsp;!";
        document.getElementById("events").appendChild(div);
    } else {
        for (let i = 0; (i < events.length) && (i < 6); i++) {
            if (!onEventPage && i == 3) break;
            let event = events[i];
    
            let div1 = document.createElement("div");
            div1.className = "card bg-maroon m-2 t";
            div1.style.minHeight = "45.2rem";
    
            let img = document.createElement("img");
            img.src = event.image[0];
            img.alt = isEnglish ? event.image[1] : event.image[2];
            img.className = "card-img-top p-2 pt-lg-3 px-lg-4 w-100 rounded";
    
            let div2 = document.createElement("div");
            div2.className = "card-body";
    
            let h2 = document.createElement("h2");
            h2.className = "card-title fs-5 text-center";
            h2.innerHTML = isEnglish ? event.title[0] : event.title[1];
    
            let p = document.createElement("p");
            p.className = "card-text";
            p.innerHTML = isEnglish ? event.text[0] : event.text[1];
            p.style.textAlign = "justify";
            p.style.textJustify = "inter-word";
    
            let ul = document.createElement("ul");
            ul.className = "list-group list-group-flush text-start";
    
            let li1 = document.createElement("li");
            li1.className = "list-group-item";
            li1.innerHTML = isEnglish ? event.date[0] : event.date[1];
    
            let span1 = document.createElement("span");
            span1.className = "fw-bold";
            span1.innerHTML = isEnglish ? "Date: " : "Date&nbsp;: ";
            li1.prepend(span1);
    
            let li2 = document.createElement("li");
            li2.className = "list-group-item";
            li2.innerHTML = isEnglish ? event.time[0] : event.time[1];
    
            let span2 = document.createElement("span");
            span2.className = "fw-bold";
            span2.innerHTML = isEnglish ? "Time: " : "Heure&nbsp;: ";
            li2.prepend(span2);
    
            let li3 = document.createElement("li");
            li3.className = "list-group-item";
            li3.innerHTML = isEnglish ? event.location[0] : event.location[1];
    
            let span3 = document.createElement("span");
            span3.className = "fw-bold";
            span3.innerHTML = isEnglish ? "Location: " : "Lieu&nbsp;: ";
            li3.prepend(span3);
    
            let li4 = document.createElement("li");
            li4.className = "list-group-item";
            li4.innerHTML = isEnglish ? event.contact[0] : event.contact[1];
    
            let span4 = document.createElement("span");
            span4.className = "fw-bold";
            span4.innerHTML = isEnglish ? "Contact: " : "Contact&nbsp;: ";
            li4.prepend(span4);
    
            ul.append(li1, li2, li3, li4);
            div2.append(h2, p);
            div1.append(img, div2, ul);
            document.getElementById("events").appendChild(div1);
        }
    }

    if (onEventPage) {
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
    }
}