// The website will display a maximum of six (6) events at a time. You can add more than six if you'd like to queue up the events for organizational purposes.
// Events in closest proximity must be placed at the top of the object.
const events = [
    {
         title: ["Monthly Overwatch In-house","Partie Interne Mensuelle d'Overwatch"],
         image: ["../../images/events/upcoming/ow.png","Overwatch logo","logo d'Overwatch"],
         text: ["Hello Overwatch! It’s time for our monthly inhouse! Our Overwatch gamehead aimed for a time that wouldn't inconvenience midterms, but just like last time, we will be holding 2 lobbies of 5v5s. Please use the sign-up sheet our gamehead made and posted in her announcement so that she may properly balance the lobbies. Anyone of any rank is welcome to join, regardless of comp experience because this is all for casual fun :))","Salut Overwatch! C'est l'heure de notre partie interne mensuelle! Notre chef de jeu d'Overwatch a essayé de faire en sorte qu'elle ne se passe pas en même temps que les examens, et comme la dernière fois, nous aurons deux salons de jeu 5v5. S.V.P utiliser le formulaire d'inscription que notre chef de jeu d'Overwatch a créée et inclus dans l'annonce mis en ligne afin qu'elle puisse équilibrer les salons de jeu. Tout le monde est bienvenue, peu importe le rang et l'expérience de compétition car on joue pour s'amuser :))"],
         date: ["Sunday, November 19, 2023","dimanche, 19 novembre, 2023"],
         time: ["8-10PM","20-22h"],
         location: ["uOttawa Esports Discord","Discord Esports uOttawa"],
         contact: ["Overwatch Gamehead - Achieu","Chef de Jeu Overwatch - Achieu"],
    },
    // {
    //     title: ["event title ENG","event title FR"],
    //     image: ["../../image path here","logo ENG","logo FR"],
    //     text: ["desc ENG","desc FR"],
    //     date: ["day with week ENG","day with week FR"],
    //     time: ["AM/PM","24HR"],
    //     location: ["location ENG","location FR"],
    //     contact: ["gamehead/host ENG","gamehead/host FR"],
    // },
    // {
    //     title: ["GGWP", "GGWP"],
    //     image: ["../../images/events/upcoming/ssbu.png", "SSBU logo", "Logo de SSBU"],
    //     text: ["Every week, Smash Ultimate fans come together to play in an in-person tournament at uOttawa. Both casual and competitive players alike join in and enjoy themselves, whether they wish to make friends, enjoy playing a game they like, or strive to be the best. To join, you can sign up through the form available on our Discord!", "Chaque semaine, les fans de Smash Ultimate se joignent en personne pour jouer un tournoi à uOttawa. Joueurs compétitifs et d’occasion viennent pour un moment de plaisir, que ce soit pour faire des amis, jouer à un jeu qu’ils aiment, ou être le meilleur. Pour t’y joindre, tu peux t’inscrire sur le formulaire disponible dans notre Discord!"],
    //     date: ["Thursday, September 25", "Samedi 25 septembre"],
    //     time: ["7:00 PM", "19h00"],
    //     location: ["STEM107 - MakerSpace", "STEM107 - MakerSpace"],
    //     contact: ["SSBU GameHead - Tai", "SSBU GameHead - Tai"]
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
    // {
    //     title: ["Exec Game Night", "Soirée de jeux avec les cadres"],
    //     image: ["../../images/events/upcoming/val3.jpg", "VALORANT logo", "Logo de VALORANT"],
    //     text: ["A game night where Execs, Game Heads, and friends play together in casual and competitive games! On this night, we'll be playing VALORANT.", "Une soirée de jeux où les cadres, les chefs de jeu et les amis jouent ensemble à des jeux occasionnels et compétitifs&nbsp;! Ce soir, nous jouerons à VALORANT."],
    //     date: ["Sunday, November 14", "Dimanche, le 14 novembre"],
    //     time: ["9:00 PM - 10:30 PM", "21h00 à 22h30"],
    //     location: ["<a href='https://www.twitch.tv/uottawaesports' rel='external' target='_blank'>Twitch</a>", "<a href='https://www.twitch.tv/uottawaesports' rel='external' target='_blank'>Twitch</a>"],
    //     contact: ["Yell#8888", "Yell#8888"]
    // },
    // {
    //     title: ["Super Smash Bros. Ultimate Tournament", "Tournoi de Super Smash Bros. Ultimate"],
    //     image: ["../../images/events/upcoming/ssbu.png", "Super Smash Bros. Ultimate logo", "Logo de Super Smash Bros. Ultimate"],
    //     text: ["The room will be open at 6 PM to set up and have fun before the event. The room is LMX (Lamoureux) 242. Any additional equipment that you can bring (Switch, monitor, GameCube adapter) would be appreciated, and you can note what you'll be able to bring in this <a href='https://docs.google.com/forms/d/e/1FAIpQLSdwIUZVCW5rtBZUAy_HXyJB8rV8rKk4piU_stO6fK3g5z7Qzg/viewform?usp=sf_link' rel='external' target='_blank'>form</a>. The event may begin earlier than 7 PM.", "La salle sera ouverte à partir de 18 heures pour s'installer et s'amuser avant l'événement. La salle est LMX (Lamoureux) 242. Tout équipement supplémentaire que vous pouvez apporter (Switch, moniteur, adaptateur GameCube) serait apprécié, et vous pouvez noter ce que vous pourrez apporter sur cette <a href='https://docs.google.com/forms/d/e/1FAIpQLSdwIUZVCW5rtBZUAy_HXyJB8rV8rKk4piU_stO6fK3g5z7Qzg/viewform?usp=sf_link' rel='external' target='_blank'>page</a>. L'événement peut commencer avant 19h."],
    //     date: ["Monday, November 29", "Lundi, le 29 novembre"],
    //     time: ["7:00 PM - 11:00 PM", "19h00 à 23h00"],
    //     location: ["<a href='https://classfind.com/ottawa/room/LMX242' rel='external' target='_blank'>Lamoureux (LMX 242)</a>", "<a href='https://classfind.com/ottawa/room/LMX242' rel='external' target='_blank'>Lamoureux (LMX 242)</a>"],
    //     contact: ["Tai#0391", "Tai#0391"]
    // },
    // {
    //     title: ["November Clip Contest", "Concours des extraits de novembre"],
    //     image: ["../../images/events/upcoming/general.png", "uOttawa Esports logo", "Logo de uOttawa Esports"],
    //     text: ["This month we have a special contest, with more winners and more prizes than ever before! This month’s theme is “Highlight of the year.” We are looking for your top gaming moment of the year, regardless of what it is. If you have a play or moment that truly stood out and you had to save it then this is the moment to share it. <hr /><strong>Important links:</strong> <a href='https://docs.google.com/document/d/1vOChZFu8sL9uKP_VS3tbZP5y3VVjEuvQMOTgUX1FRB0/edit?usp=sharing' rel='external' target='_blank'>Description/Rules/Submission Requirements document</a> | <a href='https://forms.gle/TXx7SrCYwdTGJbDS8' rel='external' target='_blank'>Clip submission form</a>", "Ce mois-ci, nous organisons un concours spécial, avec plus de gagnants et plus de prix&nbsp;! Le thème de ce mois est «&nbsp;Le meilleur moment de l'année&nbsp;». Nous sommes à la recherche de votre meilleur moment de jeu de l'année, quel qu'il soit. Si vous avez un jeu ou un moment qui vous a vraiment marqué et que vous avez dû sauvegarder, maintenant c'est le moment de le partager. <hr /><strong>Liens importants (offert en anglais seulement)&nbsp;:</strong> <a href='https://docs.google.com/document/d/1vOChZFu8sL9uKP_VS3tbZP5y3VVjEuvQMOTgUX1FRB0/edit?usp=sharing' rel='external' target='_blank'>Description/règles/exigences de soumission</a> | <a href='https://forms.gle/TXx7SrCYwdTGJbDS8' rel='external' target='_blank'>Formulaire de soumission de extraits</a>"],
    //     date: ["Sunday, November 28 (deadline)", "Dimanche, le 28 novembre (date limite)"],
    //     time: ["N/A", "ND"],
    //     location: ["<a href='https://discord.com/channels/481842236213035008/497602410169237504/905201086544109590' rel='external' target='_blank'>Discord</a>", "<a href='https://discord.com/channels/481842236213035008/497602410169237504/905201086544109590' rel='external' target='_blank'>Discord</a>"],
    //     contact: ["Calvin#2150", "Calvin#2150"]
    // },
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
        p.innerHTML = isEnglish ? "More events are scheduled and can be viewed on the <a href='/en/events/'>Events</a> page." : "D'autres événements sont prévus et peuvent être consultés sur la page des <a href='/fr/evenements/'>événements</a>.";
        document.getElementById("moreEvents").appendChild(p);
    }
}