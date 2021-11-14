// The website will display a maximum of six (6) events at a time. You can add more than six if you'd like to queue up the events for organizational purposes.
// Be careful not to add too much description text, as it may cause the cards to become an uneven height.
// Events in closest proximity must be placed at the top of the object.
const events = [
    // {
    //     title: ["VALORANT In-house", "In-house de VALORANT"],
    //     image: ["../../images/events/upcoming/val-jett.png", "VALORANT logo with Jett", "Logo de VALORANT avec Jett"],
    //     text: ["Join other VALORANT players in an in-house! This is a great way of meeting new people who enjoy the same game as you!", "Rejoignez d'autres joueurs de VALORANT dans un «&nbsp;in-house&nbsp;»&nbsp;! C'est un excellent moyen de rencontrer de nouvelles personnes qui aiment le même jeu que vous&nbsp;!"],
    //     date: ["Saturday, September 25", "Samedi 25 septembre"],
    //     time: ["4:00 PM", "16h00"],
    //     location: ["Discord", "Discord"],
    //     contact: ["Kiro#3697", "Kiro#3697"]
    // },
    // {
    //     title: ["VALORANT In-house", "In-house de VALORANT"],
    //     image: ["../../images/events/upcoming/val2.jpg", "VALORANT logo", "Logo de VALORANT"],
    //     text: ["A prized in-house is coming your way! More information can be found on Discord.<br/><span class='fw-bold'>Prizes:</span> 1st place: $75 & 5 Red Bull Packs split evenly | 2nd place: $25 split evenly <hr />You must fill in the two following forms to participate: <a href='https://docs.google.com/forms/d/e/1FAIpQLScdbvP5bJ1vjEvpNUGOwHwHyP1nR1iEkDr8UTmg7pyKtsk37A/viewform' rel='external' target='_blank'>Tournament Registration</a> and <a href='https://bit.ly/3BXwrWm' rel='external' target='_blank'>VALORANT Member Form</a>.", "Un «&nbsp;in-house&nbsp;» avec un prix se passe ce samedi&nbsp;! Plus de renseignements sont disponibles sur Discord.<br/><span class='fw-bold'>Les prix:</span> 1ère place&nbsp;: 75&nbsp;$ & 5 paquets de Red Bull divisé également | 2ème place&nbsp;: 25&nbsp;$ divisé également <hr />Pour participer, vous devez remplir les deux formulaires suivants&nbsp;: <a href='https://docs.google.com/forms/d/e/1FAIpQLScdbvP5bJ1vjEvpNUGOwHwHyP1nR1iEkDr8UTmg7pyKtsk37A/viewform' rel='external' target='_blank'>Inscription au tournoi</a> et <a href='https://bit.ly/3BXwrWm' rel='external' target='_blank'>Formulaire d'adhésion de VALORANT</a>."],
    //     date: ["Saturday, November 6", "Samedi, le 6 novembre"],
    //     time: ["5:00 PM", "17h00"],
    //     location: ["Discord", "Discord"],
    //     contact: ["onmarti#4347, Kiro#3697", "onmarti#4347, Kiro#3697"]
    // },
    {
        title: ["Exec Game Night", "Soirée de jeux avec les cadres"],
        image: ["../../images/events/upcoming/val3.jpg", "VALORANT logo", "Logo de VALORANT"],
        text: ["A game night where Execs, Game Heads, and friends play together in casual and competitive games! On this night, we'll be playing VALORANT.", "Une soirée de jeux où les cadres, les chefs de jeu et les amis jouent ensemble à des jeux occasionnels et compétitifs&nbsp;! Ce soir, nous jouerons à VALORANT."],
        date: ["Sunday, November 14", "Dimanche, le 14 novembre"],
        time: ["9:00 PM - 10:30 PM", "21h00 à 22h30"],
        location: ["<a href='https://www.twitch.tv/uottawaesports' rel='external' target='_blank'>Twitch</a>", "<a href='https://www.twitch.tv/uottawaesports' rel='external' target='_blank'>Twitch</a>"],
        contact: ["Yell#8888", "Yell#8888"]
    },
    {
        title: ["Super Smash Bros. Ultimate Tournament", "Tournoi de Super Smash Bros. Ultimate"],
        image: ["../../images/events/upcoming/ssbu.png", "Super Smash Bros. Ultimate logo", "Logo de Super Smash Bros. Ultimate"],
        text: ["The room will be open at 6 PM to set up and have fun before the event. The room is LMX (Lamoureux) 242. Any additional equipment that you can bring (Switch, monitor, GameCube adapter) would be appreciated, and you can note what you'll be able to bring in this <a href='https://docs.google.com/forms/d/e/1FAIpQLSdNAGu39PgccS9bQaWswTI5NqBD7p8TpM6Coev2uYkM6aTWkA/viewform?usp=sf_link' rel='external' target='_blank'>form</a>.", "La salle sera ouverte à partir de 18 heures pour s'installer et s'amuser avant l'événement. La salle est LMX (Lamoureux) 242. Tout équipement supplémentaire que vous pouvez apporter (Switch, moniteur, adaptateur GameCube) serait apprécié, et vous pouvez noter ce que vous pourrez apporter sur cette <a href='https://docs.google.com/forms/d/e/1FAIpQLSdNAGu39PgccS9bQaWswTI5NqBD7p8TpM6Coev2uYkM6aTWkA/viewform?usp=sf_link' rel='external' target='_blank'>page</a>."],
        date: ["Monday, November 15", "Lundi, le 15 novembre"],
        time: ["7:00 PM - 11:00 PM", "19h00 à 23h00"],
        location: ["<a href='https://classfind.com/ottawa/room/LMX242' rel='external' target='_blank'>Lamoureux (LMX 242)</a>", "<a href='https://classfind.com/ottawa/room/LMX242' rel='external' target='_blank'>Lamoureux (LMX 242)</a>"],
        contact: ["Tai#0391", "Tai#0391"]
    },
    {
        title: ["Call of Duty: Vanguard Tryouts", "Épreuve de sélection de Call of Duty: Vanguard"],
        image: ["../../images/events/upcoming/cod.png", "Call of Duty: Vanguard logo", "Logo de Call of Duty: Vanguard"],
        text: ["Hopefully everyone's been enjoying Vanguard so far! If you've found yourself absolutely mopping the floor with the other team lately, maybe it's time to step up the level of competition... Come on out to our tryouts for the Garnet and Grey team for COD: Vanguard! (Sorry m&k players, this years leagues are CONTROLLER ONLY... One day maybe 😦)", "J'espère que tout le monde a apprécié Vanguard jusqu'à présent&nbsp;! Si vous vous êtes retrouvé à écraser les autres équipes, il est peut-être temps d'élever le niveau de compétition... Venez participer à nos essais pour l'équipe Garnet et Grey de COD: Vanguard&nbsp;! (Désolé pour les joueurs de S&C, cette année les ligues sont UNIQUEMENT SUR CONTRÔLEUR... Un jour peut-être 😦)"],
        date: ["Saturday, November 20", "Saturday, le 20 novembre"],
        time: ["3:00 PM", "15h00"],
        location: ["<a href='https://cdn.discordapp.com/attachments/781210252388728852/908925963717472316/Call_of_Duty_Vanguard_Tryouts.png' rel='external' target='_blank'>Discord</a>", "<a href='https://cdn.discordapp.com/attachments/781210252388728852/908925963717472316/Call_of_Duty_Vanguard_Tryouts.png' rel='external' target='_blank'>Discord</a>"],
        contact: ["Tai#0391", "Tai#0391"]
    },
    {
        title: ["Minecraft Event", "Événement de Minecraft"],
        image: ["../../images/events/upcoming/mc.png", "Minecraft logo", "Logo de Minecraft"],
        text: ["Event details coming soon. More information can be found in the <a href='https://discord.com/channels/481842236213035008/497602410169237504/908495574137962556' rel='external' target='_blank'>#announcements</a> channel.", "Les détails de l'événement seront bientôt disponibles. Référrez-vous au canal <a href='https://discord.com/channels/481842236213035008/497602410169237504/908495574137962556' rel='external' target='_blank'>#announcements</a> pour plus de renseignements."],
        date: ["Saturday, November 27", "Samedi, le 27 novembre"],
        time: ["7:00 PM", "19h00"],
        location: ["Discord", "Discord"],
        contact: ["Calvin#2150", "Calvin#2150"]
    },
    {
        title: ["November Clip Contest", "Concours des extraits de novembre"],
        image: ["../../images/events/upcoming/general.png", "uOttawa Esports logo", "Logo de uOttawa Esports"],
        text: ["This month we have a special contest, with more winners and more prizes than ever before! This month’s theme is “Highlight of the year.” We are looking for your top gaming moment of the year, regardless of what it is. If you have a play or moment that truly stood out and you had to save it then this is the moment to share it. <hr /><strong>Important links:</strong> <a href='https://docs.google.com/document/d/1vOChZFu8sL9uKP_VS3tbZP5y3VVjEuvQMOTgUX1FRB0/edit?usp=sharing' rel='external' target='_blank'>Description/Rules/Submission Requirements document</a> | <a href='https://forms.gle/TXx7SrCYwdTGJbDS8' rel='external' target='_blank'>Clip submission form</a>", "Ce mois-ci, nous organisons un concours spécial, avec plus de gagnants et plus de prix&nbsp;! Le thème de ce mois est «&nbsp;Le meilleur moment de l'année&nbsp;». Nous sommes à la recherche de votre meilleur moment de jeu de l'année, quel qu'il soit. Si vous avez un jeu ou un moment qui vous a vraiment marqué et que vous avez dû sauvegarder, maintenant c'est le moment de le partager. <hr /><strong>Liens importants (offert en anglais seulement)&nbsp;:</strong> <a href='https://docs.google.com/document/d/1vOChZFu8sL9uKP_VS3tbZP5y3VVjEuvQMOTgUX1FRB0/edit?usp=sharing' rel='external' target='_blank'>Description/règles/exigences de soumission</a> | <a href='https://forms.gle/TXx7SrCYwdTGJbDS8' rel='external' target='_blank'>Formulaire de soumission de extraits</a>"],
        date: ["Deadline: Sunday, November 28", "Date limite&nbsp;: Dimanche, le 28 novembre"],
        time: ["N/A", "ND"],
        location: ["<a href='https://discord.com/channels/481842236213035008/497602410169237504/905201086544109590' rel='external' target='_blank'>Discord</a>", "<a href='https://discord.com/channels/481842236213035008/497602410169237504/905201086544109590' rel='external' target='_blank'>Discord</a>"],
        contact: ["Calvin#2150", "Calvin#2150"]
    },
    {
        title: ["Super Smash Bros. Ultimate Tournament", "Tournoi de Super Smash Bros. Ultimate"],
        image: ["../../images/events/upcoming/ssbu.png", "Super Smash Bros. Ultimate logo", "Logo de Super Smash Bros. Ultimate"],
        text: ["Event details coming soon.", "Les détails de l'événement seront bientôt disponibles."],
        date: ["Monday, November 29", "Lundi, le 29 novembre"],
        time: ["TBA", "À annoncer"],
        location: ["TBA", "À annoncer"],
        contact: ["Tai#0391", "Tai#0391"]
    }
];

function displayEvents() {
    let isEnglish = window.location.href.includes("/en");
    let onEventPage = window.location.href.includes("/events") || window.location.href.includes("/evenements");

    if (events.length == 0) {
        let div = document.createElement("div");
        div.className = "m-1 m-lg-3 alert alert-warning w-100 text-center fs-5";
        div.innerHTML = isEnglish ? "There are no upcoming events. Stay tuned!" : "Il n'y a aucun événement à venir. Restez à l'écoute&nbsp;!";
        document.getElementById("events").appendChild(div);
    } else {
        for (let i = 0; (i < events.length) && (i < 6); i++) {
            if (!onEventPage && i == 3) break;
            let event = events[i];

            let div1 = document.createElement("div");
            div1.className = "crd bg-maroon w-100 mx-1 mx-lg-3 my-2 rounded";

            let div2 = document.createElement("div");
            div2.className = "row d-flex";

            let div3 = document.createElement("div");
            div3.className = "col-12 col-sm-3 col-lg-2 d-flex align-items-center justify-content-center";

            let img = document.createElement("img");
            img.src = event.image[0];
            img.alt = isEnglish ? event.image[1] : event.image[2];
            img.className = "crd-img p-1";

            div3.appendChild(img);

            let div4 = document.createElement("div");
            div4.className = "col-12 col-sm-9 col-lg-7 h-100";

            let h2 = document.createElement("h2");
            h2.className = "crd-ttl fs-3 mt-sm-2";
            h2.innerHTML = isEnglish ? event.title[0] : event.title[1];

            let p = document.createElement("p");
            p.className = "crd-txt text-start";
            p.innerHTML = isEnglish ? event.text[0] : event.text[1];
            p.style.textAlign = "justify";
            p.style.textJustify = "inter-word";

            div4.append(h2, p);

            let div5 = document.createElement("div");
            div5.className = "col-12 col-sm-12 col-lg-3 bg-white p-0 align-self-stretch d-flex align-items-center";

            let ul = document.createElement("ul");
            ul.className = "list-group list-group-flush w-100 text-start";

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
            div5.appendChild(ul);
            div2.append(div3, div4, div5);
            div1.appendChild(div2);
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
    } else if (events.length > 3) {
        let p = document.createElement("p");
        p.className = "px-1 px-lg-3 fst-italic fs-5";
        p.innerHTML = isEnglish ? "More events are scheduled and can be viewed on the <a href='/en/events/'>Events</a> page." : "D'autres événements sont prévus et peuvent être consultés sur la page des <a href='/fr/evenements/'>événements</a>événements.";
        document.getElementById("moreEvents").appendChild(p);
    }
}