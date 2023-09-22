// The website will display a maximum of six (6) events at a time. You can add more than six if you'd like to queue up the events for organizational purposes.
// Events in closest proximity must be placed at the top of the object.
const events = [
    
     {
         title: ["Overwatch Minigame Madness","Overwatch Mini-jeux en folie"],
         image: ["../../images/events/upcoming/ow.png","Overwatch logo","Logo de Overwatch"],
         text: ["Are you down for some Ana Paintball, 12 Hogs 1 Hole, or some classic Gun Game and more? Come join us for a whole 2 hours of some of your favourite minigames. This time, we’ve got prizes to hand out for first, second, and third place in the form of Overwatch Coins for you to buy some of your favourite skins or skips for the battlepass with. Everyone is welcome to join regardless of any skill range or competitive experience, so please don't be shy to participate!</br><b>If you want to participate, please <a href='https://forms.gle/r3d2JqC9nwfnC1iT8' rel='external' target='_blank'>sign up here</a> by Saturday, Sept. 23rd at 5pm EST at the latest as we will be capping the lobby to 24 people!!!</b>","Êtes-vous prêt pour un peu d'Ana Paintball, du 12 Hogs 1 Hole, le classique Gun Game et plus encore? Rejoignez-nous pour 2 heures de vos mini-jeux préférés. Cette fois-ci, on a des prix à distribuer pour les première, deuxième et troisième places sous la forme d'Overwatch Coins afin que vous puissiez vous procurer vos skins préférés ou des skips pour la battlepass. Tout le monde est bienvenue, peu importe le niveau d'expertise ou d'expérience de compétition. N'hésitez pas à participer !</br> <b>Si tu veux t'y joindre, <a href='https://forms.gle/r3d2JqC9nwfnC1iT8' rel='external' target='_blank'>inscris-toi ici</a> au plus tard le 23 septembre à 17h HE vu qu'on acceptera jusqu'à un maximum 24 participants!!!</b>"],
         date: ["Saturday, September 23, 2023","Samedi, 23 septembre, 2023"],
         time: ["8:00PM-10:00PM","20h00-22h00"],
         location: ["uOttawa Esports Discord","Esports uOttawa Discord"],
         contact: ["Overwatch Gamehead - Achieu","Chef de Jeu Overwatch - Achieu"],
     },
     {
        title: ["osu! Tryouts","Essais collégiaux de osu!"],
        image: ["../../images/events/upcoming/osu.png","Osu! logo","logo de Osu!"],
        text: ["We have upcoming tryouts for our osu! collegiate team! During tryouts, we will play through an old o!CL map pool in a multi lobby. Participants will be evaluated and selected for a team based on their performance.","Nous avions des essais pour notre équipe collégiale de osu! Durant les essais, on jouera à travers une vieille sélection de cartes d’o!CL dans un lobby à plusieurs joueurs. Les participants seront évalués et sélectionnés pour une équipe basée sur leur performance."],
        date: ["Saturday, September 23, 2023","Samedi, 23 septembre, 2023"],
        time: ["8:00PM-10:00PM","20h00-22h00"],
        location: ["uOttawa Esports Discord","Esports uOttawa Discord"],
        contact: ["osu! Gamehead - GlowRock","Chef de Jeu osu! - GlowRock"],
     },
      {
         title: ["League of Legends In-House","League of Legends In-House"],
         image: ["../../images/events/upcoming/lol.png","League of Legends logo","Logo de League of Legends"],
         text: ["Our first League in-house of the year is happening! To new students: slots are first come, first serve, and we require at least ten people to form a lobby. As always, all skill levels and ranks are welcome so please stop by on Sunday to participate.</br><b>If you're interested in participating, please join our Discord and follow the gamehead's instructions!</b>","Notre première partie interne de l'année se déroule! Aux nouveaux étudiants : les places sont premier arrivé, premier servi, et il faut au moins 10 participants pour former un salon de jeu. Comme toujours, tous les niveaux d'expertise sont les bienvenus, alors n'hésitez pas à nous rejoindre dimanche pour participer.</br><b>Si tu es intéressé à participer, joins-toi à notre Discord et suis les instructions du chef de jeu!</b>"],
         date: ["Sunday, September 24th, 2023","Dimanche, 24 septembre, 2023"],
         time: ["7:00PM","19h00"],
         location: ["uOttawa Esports Discord","Esports uOttawa Discord"],
         contact: ["League of Legends Gamehead - Narth","Chef de Jeu League of Legends - Narth"],
     },
     {
        title: ["VALORANT In-House","Partie Interne de VALORANT"],
        image: ["../../images/events/upcoming/val.png","VALORANT Logo","Logo de VALORANT"],
        text: ["Hey VALORANT... <b>IN HOUSE IN HOUSE IN HOUSE !!!</b></br>In-Houses are run in a first come, first serve fashion. So mark the date down in your calendar and be ready to play at the set time!</br>For those who have never played in an in-house before : they're essentially just organized custom games for our casual community, so people of all skill level are welcome and encouraged to participate. <b>There is a max limit of 1 lobby that will be run, so a 10 participant cap.</b>","Hé VALORANT... <b>PARTIE INTERNE PARTIE INTERNE PARTIE INTERNE !!!</b></br>Les places au parties internes sont premier arrivé, premier servi. Alors notez la date dans votre calendrier et soyez prêts à jouer à l'heure convenue!</br>Pour ceux et celles qui n'ont jamais participé à une partie interne auparavant, il s'agit essentiellement de parties customs organisées pour notre communauté amatrice, alors les gens de tous les niveaux d'expertise sont les bienvenus et encouragés à participer.<b>Il y aura une limite de 1 salon de jeu, et donc 10 participants.</b>"],
        date: ["Sunday, September 24, 2023","Dimanche, septembre 24, 2023"],
        time: ["8:00PM","20h00"],
        location: ["uOttawa Esports Discord","Esports uOttawa Discord"],
        contact: ["VALORANT Gamehead - 1Lil'Bit","Chef de Jeu VALORANT - 1Lil'Bit"],
     },
    // {
    //     title: [],
    //     image: [],
    //     text: [],
    //     date: [],
    //     time: [],
    //     location: [],
    //     contact: [],
    // },
    // {
    //     title: ["GGWP", "GGWP"],
    //     image: ["../../images/events/upcoming/ssbu.png", "SSBU logo", "Logo de SSBU"],
    //     text: ["Every week, Smash Ultimate fans come together to play in an in-person tournament at uOttawa. Both casual and competitive players alike join in and enjoy themselves, whether they wish to make friends, enjoy playing a game they like, or strive to be the best. To join, you can sign up through the form available on our Discord!", "Chaque semaine, les fans de Smash Ultimate se joignent en personne pour jouer un tournoi à uOttawa. Joueurs compétitifs et d’occasion viennent pour un moment de plaisir, que ce soit pour faire des amis, jouer à un jeu qu’ils aiment, ou être le meilleur. Pour t’y joindre, tu peux t’inscrire sur le formulaire disponible dans notre Discord!"],
    //     date: ["Saturday, September 25", "Samedi 25 septembre"],
    //     time: ["7:00 PM", "19h00"],
    //     location: ["STEM107 - MakerSpace", "STEM107 - MakerSpace"],
    //     contact: ["SSBU GameHead - tai0391", "SSBU GameHead - tai0391"]
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