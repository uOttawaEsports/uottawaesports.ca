// The website will display a maximum of six (6) events at a time. You can add more than six if you'd like to queue up the events for organizational purposes.
// Be careful not to add too much description text, as it may cause the cards to become an uneven height.
// Events in closest proximity must be placed at the top of the object.
const events = [
    {
        title: ["Clubs Fair (in-person)", "Foire des clubs (en personne)"],
        image: ["../../images/events/grand-alley.png", "Grand alley", "La grande allée"],
        text: ["We are tabling at the 101 Week Clubs Fair! Come find us and say hi! Who knows, maybe we'll have some Red Bull to give away ;) More information on <a href=\"https://www.cvuo.ca/clubs-fair-2021\" target=\"_blank\" rel=\"external\">CVUO's website</a>.", 
        "Nous avons un stand à la Foire des clubs de la Semaine 101&nbsp;! Venez nous trouver et nous dire bonjour&nbsp;! Qui sait, peut-être nous aurons un peu de Red Bull à distribuer ;) Plus d'informations sur <a href=\"https://www.cvuo.ca/foire-des-clubs-2021\" target=\"_blank\" rel=\"external\">le site Web du CVUO</a>."],
        date: ["Wednesday, September 8", "Mercredi 8 septembre"],
        time: ["3 PM - 6 PM", "15h à 18h"],
        location: ["Grand Alley, uOttawa", "La grande allée à uOttawa"],
        contact: ["Juicy_Vinyl#3235, Zander#6846", "Juicy_Vinyl#3235, Zander#6846"]
    },
    {
        title: ["Clubs Fair (online)", "Foire des clubs (en ligne)"],
        image: ["../../images/events/gather-town.png", "Gather Town", "Gather Town"],
        text: ["We will be present at the online fair on Gather Town for those who cannot make it to the Clubs Fair in person!", 
        "Nous serons présents à la foire en ligne sur Gather Town pour ceux qui ne peuvent pas se rendre en personne à la Foire des clubs&nbsp;!"],
        date: ["Wednesday, September 8", "Mercredi 8 septembre"],
        time: ["3 PM - 6 PM", "15h à 18h"],
        location: ["<a href=\"https://gather.town/invite?token=ax7gXG5B\" target=\"_blank\" rel=\"external\">Gather Town</a>", "<a href=\"https://gather.town/invite?token=ax7gXG5B\" target=\"_blank\" rel=\"external\">Gather Town</a>"],
        contact: ["JAXO#9999", "JAXO#9999"]
    },
    {
        title: ["VALORANT Gold (C) Team Tryouts", "VALORANT épreuve de sélection de l'équipe Gold&nbsp;(C)"],
        image: ["../../images/events/val.png", "VALORANT", "VALORANT"],
        text: ["No minimum rank requirement. All are welcome! <br />For more information, join our <a href=\"https://discord.gg/uAbd5uRTCA\" target=\"_blank\">Discord</a>.", "Aucun classement minimum. Tous sont les bienvenus&nbsp;! <br />Pour plus d'informations, rejoignez notre <a href=\"https://discord.gg/uAbd5uRTCA\" target=\"_blank\">Discord</a>."],
        date: ["Saturday, September 11", "Samedi 11 septembre"],
        time: ["3 PM - 7 PM", "15h à 19h"],
        location: ["Discord", "Discord"],
        contact: ["Juicy_Vinyl#3235, Kiro#3697", "Juicy_Vinyl#3235, Kiro#3697"]
    },
    // {
    //     title: ["Clubs Fair Tabling", "VALORANT «&nbsp;In-house&nbsp;»"],
    //     image: ["../../images/events/general.png", "DOTA 2"],
    //     text: ["Join other VALORANT players in an in-house! This is a great way of meeting new people who enjoy the same game as you!", "Rejoignez d'autres joueurs de VALORANT dans un «&nbsp;in-house&nbsp;»&nbsp;! C'est un excellent moyen de rencontrer de nouvelles personnes qui aiment le même jeu que vous&nbsp;!"],
    //     date: ["Thursday, September 6", "Thursday, September 6 [FR]"],
    //     time: ["6 AM", "6h00"],
    //     location: ["Discord", "Discord"],
    //     contact: "Yell#8888"
    // },
];

function displayEvents() {
    let isEnglish = window.location.href.includes("/en");
    let onEventPage = window.location.href.includes("/events") || window.location.href.includes("/evenements");

    for (let i = 0; (i < events.length) && (i < 6); i++) {
        if (!onEventPage && i == 3) break;
        let event = events[i];

        let div1 = document.createElement("div");
        div1.className = "card bg-maroon m-2";
        div1.style.minHeight = "44.8rem";

        let img = document.createElement("img");
        img.src = event.image[0];
        img.alt = isEnglish ? event.image[1] : event.image[2];
        img.className = "card-img-top pt-3 px-3 w-100 rounded";

        let div2 = document.createElement("div");
        div2.className = "card-body";

        let h2 = document.createElement("h2");
        h2.className = "card-title fs-5 text-center";
        h2.innerHTML = isEnglish ? event.title[0] : event.title[1];

        let p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = isEnglish ? event.text[0] : event.text[1];
        p.style.textAlign = "justify";
        p.style.textJustify = "inter-word"

        let ul = document.createElement("ul");
        ul.className = "list-group list-group-flush";

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