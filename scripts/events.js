// The website will display a maximum of six (6) events at a time. You can add more than six if you'd like to queue up the events for organizational purposes.
// Events in closest proximity must be placed at the top of the object.
const events = [
    {
         title: ["osu! In-House","Partie Interne d'osu!"],
         image: ["../../images/events/upcoming/osu.png","osu! logo","logo d'osu!"],
         text: ["Every two weeks, our osu! gamehead hosts an in-house Tuesday evenings for casual players and fans of the rythm game to join in and have fun.<br>Want in? Join our discord and sign up through our osu! gamehead's announcement form!","À toutes les deux semaines, notre chef de jeu d'osu! organise une partie interne les mardis en soirée pour que les joueurs occasionels et les fans de ce jeu de rythme se réunissent pour s'amuser.<br>Tu veux t'y mettre de la partie? Joins-toi à notre Discord et inscris-toi dans le formulaire se trouvant dans l'annonce du chef de jeu!"],
         date: ["Tuesday, November 7, 2023","mardi, 7 novembre, 2023"],
         time: ["9:00PM","21h00"],
         location: ["uOttawa Esports Discord","Discord d'uOttawa Esports"],
         contact: ["osu! gamehead - Glowrock","chef de jeu osu! - Glowrock"],
    },
    {
         title: ["GGWP#45","GGWP#45"],
         image: ["../../images/events/upcoming/ssbu.png", "SSBU logo", "Logo de SSBU"],
         text: ["Every week, Smash Ultimate fans come together to play in an in-person tournament at uOttawa. Both casual and competitive players alike join in and enjoy themselves, whether they wish to make friends, enjoy playing a game they like, or strive to be the best. To join, you can sign up through the form available on our Discord!", "Chaque semaine, les fans de Smash Ultimate se joignent en personne pour jouer un tournoi à uOttawa. Joueurs compétitifs et d’occasion viennent pour un moment de plaisir, que ce soit pour faire des amis, jouer à un jeu qu’ils aiment, ou être le meilleur. Pour t’y joindre, tu peux t’inscrire sur le formulaire disponible dans notre Discord!"],
         date: ["Thursday, November 9, 2023", "jeudi, 9 novembre, 2023"],
         time: ["7:00 PM", "19h00"],
         location: ["STEM107 - MakerSpace", "STEM107 - MakerSpace"],
         contact: ["SSBU GameHead - Tai", "SSBU GameHead - Tai"]
    },
    {
         title: ["Canada-wide Hunger Games","Les Hunger Games pancanadiens"],
         image: ["../../images/events/upcoming/mc.png","Minecraft Logo","logo de minecraft"],
         text: ["Introducing the Canadian Cross-Collegiate Minecraft League (3CML)! They are an ever-growing network of Canadian universities and colleges that hosts Canada-wide Minecraft events! They are hosting their first-ever Canada-wide Hunger Games and we're joining in!<br>If you want to sign up, please join uOttawa Esports' Discord for all the information on our announcement. The deadline to sign up is November 9th at 11:59 PM.","J'ai le plaisir d'annoncer la Canadian Cross-Collegiate Minecraft League, une communauté grandissante d'universités et de collèges canadiens qui organisent des événements de Minecraft partout au Canada ! Ils organisent leur tout premierHunger Games pancanadien, et nous faisions de la partie!<br>Si t'as intérêt à t'inscrire, joins-toi à notre Discord pour toutes les informations dans notre annonce. La date limite pour s'inscrire est le 9 novembre à 23h59."],
         date: ["Saturday, November 11, 2023","samedi, 11 novembre, 2023"],
         time: ["9:00PM","21h00"],
         location: ["Canadian Cross-Collegiate Minecraft League Discord Server","Serveur Discord de la Canadian Cross-Collegiate Minecraft League"],
         contact: ["Minecraft gamehead - Dish","Chef de Jeu Minecraft - Dish"],
    },
    {
         title: ["Rocket League 6mans","6mans de Rocket League"],
         image: ["../../images/events/upcoming/rl.png","Rocket League logo","logo de Rocket League"],
         text: ["6mans is back soon!!!<br>Our Rocket League gamehead hosts in-houses every once in a while! If you're interested, please join our Discord server and follow the gamehead's instructions.","6mans est de retour bientôt!!!<br>Notre chef de jeu de Rocket League organise des parties internes de temps à autre! Si tu t'y intéresses, S.V.P. joins-toi à notre Discord et suis les instructions du chef de jeu."],
         date: ["Friday, November 17, 2023","vendredi, 17 novembre, 2023"],
         time: ["Between 7-9PM","Entre 19h et 21h"],
         location: ["uOttawa Esports Discord","Discord uOttawa Esports"],
         contact: ["Rocket League gamehead - Zefex","Chef de Jeu Rocket League - Zefex"],
    },
    {
         title: ["League Worlds 2023 Watch Party","Soirée de visionnement du Mondial 2023 de League"],
         image: ["../../images/events/upcoming/fss-1007.jpg","In-person location","Endroit en présentiel"],
         text: ["It is that time of the year again!<br>This year although League Worlds are being held in South Korea this will not stop us from doing a viewing party! Thanks to the generosity and help from Professor Thomas Burrelli we have secured a room for early morning on the day for League World Finals!<br>The event itself will start at 3am EST, but the room will be open to students since 12am. There will be snacks, Red Bull (to keep us awake) and some league related prizes. Participants are more than welcome to bring sleeping bags, blankets and come in comfortable clothes. It will be a long and exciting night.<br>To sign up, please join our Discord and enter through the form posted in our announcement!","C'est encore ce temps de l'année !<br>Cette année, même si le Mondial se tient en Corée du sud, cela ne nous empêchera pas d'organiser une soirée de visionnement ! Grâce à la générosité et à l'aide du Professeur Thomas Burrelli, nous avons pu réservé une salle tôt le matin la journée de la finale du Mondial de League !<br>L'événement en soi débutera à 3 am, mais la salle sera ouverte aux étudiants dès minuit. Il y aura des collations, du Red Bull (pour nous tenir éveillé) et quelques prix en lien à League.Vous êtes les bienvenus à apporter avec vous des sacs de couchage, des couvertures, et d'arriver en vêtements confortables. Ce sera une longue nuit très excitante!"],
         date: ["Sunday, November 19, 2023","dimanche, 19 novembre, 2023"],
         time: ["12-7AM","minuit à 7h"],
         location: ["FTX 302","FTX 302"],
         contact: ["uOttawa Esports Discord","Discord Esports uOttawa"],
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