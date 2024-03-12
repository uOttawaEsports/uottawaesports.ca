// The website will display a maximum of six (6) events at a time. You can add more than six if you'd like to queue up the events for organizational purposes.
// Events in closest proximity must be placed at the top of the object.
const events = [
     {
         title: ["Esports Showcase Week","Semaine de Démonstration des Esports"],
         image: ["../../images/events/upcoming/mnt-203.jpg","Generic location picture","Image ordinaire d'un endroit"],
         text: ["It is our pleasure to announce this unique event that is a collaboration with Professor Thomas Burelli (Civil Law), the Library, and uOttawa Esports club which will feature engaging activities including open play, coaching sessions, presentations, and a competitive weekend tournament. Open to the entire uOttawa community, the showcase will delve into the intersection of esports and academia, highlighting popular games such as League of Legends, Teamfight Tactics, Dota 2, and Valorant.<br>This event will be open to members of uOttawa only. Students are welcome to come and join the various activities throughout the week!<br>For further details on this exciting week, check out our <a href='https://docs.google.com/document/d/14X3LyDHpWFOvhC0DS6UopTxxyESHidxixPElMoIIJ9E/edit?usp=sharing' rel='external' target='_blank'>Code of Conduct</a> before arriving and see the <a href='https://www.uottawa.ca/library/events-all/join-esports-showcase-week-brian-dickson-law-library' rel='external' target='_blank'>full details of the event</a> here!","ous avons le plaisir d'annoncer la tenue de cet événement unique lequel est une collaboration avec le professeur Thomas Burelli, Mish Boutet, la Faculté de droit et le club Esports de l'Université d'Ottawa et qui comprendra des activités attrayantes, notamment des jeux libres, des séances d'entraînement, des présentations et un tournoi compétitif de fin de semaine. Ouverte à l'ensemble de la communauté de l'Université d'Ottawa, la vitrine se penchera sur l'intersection des sports électroniques et du milieu universitaire, en mettant l'accent sur des jeux populaires comme League of Legends, Teamfight Tactics, Dota 2 et Valorant.<br>Cet événement est réservé aux membres de l'Université d'Ottawa. Les étudiants sont invités à participer aux diverses activités organisées tout au long de la semaine !<br>Pour plus de détails sur cette semaine excitante, passez par notre <a href='https://docs.google.com/document/d/14X3LyDHpWFOvhC0DS6UopTxxyESHidxixPElMoIIJ9E/edit?usp=sharing' rel='external' target='_blank'>Code de Conduite</a> avant d'arriver et voyez <a href='https://www.uottawa.ca/bibliotheque/tous-evenements/participez-semaine-sport-electronique-bibliotheque-droit-brian-dickson' rel='external' target='_blank'>tous les détails</a> ici!"],
         date: ["March 11 to 17, 2024 ; Monday to Sunday","11 au 17 mars 2024 ; du lundi au dimanche"],
         time: ["11:30AM - 8:00PM every day","11h30 à 20h00 chaque jour"],
         location: ["Brian Dickson Law Library - FTX430","Bibliothèque de droit Brian Dickson - FTX430"],
         contact: ["uOttawa Esports Copresidents","Coprésidentes d'Esports uOttawa"],
     },
     {
         title: ["A talk with Ash (Ash Bang)","Une discussion avec Ash (Ash Bang)"],
         image: ["../../images/events/upcoming/interview.jpg","Ash Bang","Ash Bang"],
         text: ["Esports does not only involve competing as an athlete. There are a myriad of other professions and activities surrounding the field. Being a caster, a live commentator of Esports games, is one of them! Join us to find out more with professional Esports Caster and Host, <a href='https://twitter.com/AshCasts' rel='external' target='_blank'>Ash (Ash Bang)</a>, and ask your questions about her experience casting Valorant matches.<br><i>(Presentation in english.)</i>","Le sport électronique ne signifie pas uniquement participer à des compétitions en tant qu’athlète. Il existe une myriade d’autres métiers et activités autour du domaine. Être commentateur ou commentatrice de match fait partie de ces métiers! Soyez des nôtres pour découvrir cette activité avec <a href='https://twitter.com/AshCasts' rel='external' target='_blank'>Ash (Ash Bang)</a>, commentatrice professionnelle de sport électronique et présentatrice. Venez lui poser vos questions à propos de son expérience en particulier avec le jeu Valorant.<br><i>(Présentation en anglais).</i>"],
         date: ["Tuesday, March 12, 2024","mardi, 12 mars, 2024"],
         time: ["11:30AM - 1:00PM","11h30 - 13h00"],
         location: ["Brian Dickson Law Library - FTX430 || Online","Bibliothèque de droit Brian Dickson - FTX430 || En ligne"],
         contact: ["uOttawa Esports Copresidents","Co-Présidentes d'uOttawa Esports"],
     },
     {
         title: ["<i>“The effects of persuasive design on toxic behaviour in video games”</i>, presentation by Maude ","« Les effets du design persuasif sur les comportements toxiques dans les jeux vidéo » : Présentation de Maude Bonenfant"],
         image: ["../../images/events/upcoming/general.png","uOttawa Esports Logo","Logo de Esports uOttawa"],
         text: ["Maude Bonenfant is a Professor in the Department of Social and Public Communication at the Université du Québec à Montréal (UQAM) and a Doctor of Semiotics. Her research focuses on the social dimensions of communications technologies, social media, big data, artificial intelligence, online communities, and particularly game studies. She holds the Canada Research Chair on Gamer Communities and Big Data, is Co-Director of The Social Media and Gamification Research Lab, and is Co-Director of the games and communications research group, Homo Ludens.<br><i>(Presentation in French with English slides. Please note that this is a hybrid format presentation with a remote presenter.)</i><br>If you're interested in signing up, feel free to join us <a href='https://forms.gle/z5uTVJzUpH2Nvdxq7' rel='external' target='_blank'>in person</a> or <a href='https://uottawa-ca.zoom.us/meeting/register/tJYtf--gqjIqG9y5W4J8fTNyg2mnrPlSLzAx#/registration' rel='external' target='_blank'>online</a>!","Maude Bonenfant est professeure titulaire au Département de communication sociale et publique de l’Université du Québec à Montréal (UQAM) et docteure en études sémiotiques. Ses recherches sont orientées vers les dimensions sociales des technologies de communication, les réseaux socionumériques, les données massives, l’intelligence artificielle, les communautés en ligne et tout particulièrement l’étude du jeu. Elle est titulaire de la Chaire de recherche du Canada sur les données massives et les communautés de joueurs, codirectrice du Laboratoire de recherche en médias socionumériques et ludification et codirectrice du groupe de recherche, Homo Ludens, sur le jeu et la communication.<br><i>Présentation en français avec diapositives en anglais. Veuillez noter qu'il s'agit d'une présentation hybride avec la présentatrice à distance.)</i><br>Si vous êtes intéressé(e)s à vous joindre, soyez à l'aise de vous inscrire <a href='https://forms.gle/z5uTVJzUpH2Nvdxq7' rel='external' target='_blank'>en personne</a> ou <a href='https://uottawa-ca.zoom.us/meeting/register/tJYtf--gqjIqG9y5W4J8fTNyg2mnrPlSLzAx#/registration' rel='external' target='_blank'>en ligne</a>!"],
         date: ["Wednesday, March 13, 2024","mercredi, 13 mars, 2024"],
         time: ["12:00PM - 1:00PM","12h00 - 13h00"],
         location: ["Brian Dickson Law Library - FTX430 || Online","Bibliothèque de droit Brian Dickson - FTX430 || En ligne"],
         contact: ["uOttawa Esports Copresidents","Co-Présidentes d'uOttawa Esports"],
     },
     {
         title: ["A talk with <i>Blaze</i> (Josh Demers) and <i>Jchan</i> (Julien Chan), Professional Rocket League Players","Une rencontre avec <i>Blaze</i> (Josh Demers) et <i>Jchan</i> (Julien Chan), joueurs professionnels de Rocket League"],
         image: ["../../images/events/upcoming/general.png","uOttawa Esports Logo","Logo de Esports uOttawa"],
         text: ["Join us as we find out what it’s like to be a professional Esports player with Blaze (Josh Demers) and Jchan (Julien Chan), two professional Rocket League players. How many hours of training? What kind of salary? What dietary regime? These and other questions will be addressed during this Q&A session.<br><i>(Presentation in English)</i><br>Catch us <a href='https://forms.gle/B6NswW5wXfCjyFfx8' rel='external' target='_blank'>in person</a> or <a href='https://uottawa-ca.zoom.us/meeting/register/tJMpdO-hqToiEtSrz27y1BHwmFCM2ip7CzAg#/registration' rel='external' target='_blank'>online</a> for this presentation!","Joignez-nous pour découvrir ce que signifie être un joueur ou une joueuse professionnel(le) de sport électronique avec Blaze (Josh Demers) et Jchan (Julien Chan), deux joueurs professionnels de <i>Rocket League</i>. Combien d’heures d’entraînement ? Quel salaire ? Quel régime alimentaire ? Et bien d’autres questions seront abordées durant cette session de questions-réponses.<br><i>(Présentation en anglais)</i><br>Soyez des nôtres <a href='https://forms.gle/B6NswW5wXfCjyFfx8' rel='external' target='_blank'>en personne</a> ou <a href='https://uottawa-ca.zoom.us/meeting/register/tJMpdO-hqToiEtSrz27y1BHwmFCM2ip7CzAg#/registration' rel='external' target='_blank'>en ligne</a> pour cette présentation!"],
         date: ["Thursday, March 14, 2024","jeudi, 14 mars, 2024"],
         time: ["11:30AM - 1:00PM","11h30 - 13h00"],
         location: ["Brian Dickson Law Library - FTX430 || Online","Bibliothèque de droit Brian Dickson - FTX430 || En ligne"],
         contact: ["uOttawa Esports Copresidents","Co-Présidentes d'uOttawa Esports"],
     },
     {
         title: ["A talk with Snowed In Studios, Ottawa’s largest game development studio","Une rencontre avec <i>Snowed In Studios</i>, le plus grand studio de développement de jeux d’Ottawa"],
         image: ["../../images/events/upcoming/general.png","uOttawa Esports Logo","Logo de Esports uOttawa"],
         text: ["Snowed In Studios is Ottawa’s largest game development studio. The studio has been working on both independent and AAA titles since 2009, including Starfield, Forza Motorsport, Madden, Forza Horizon 5, Dead By Daylight, Deus Ex, The Elder Scrolls, and Fallout. Join us for a Q&A session with members of the studio to learn about working in the gaming industry and the video game creation process.<br><i>(Presentation in English)</i><br>Curious to hear all about it? Show up <a href='https://forms.gle/EL14y1HHhiESgZRK8' rel='external' target='_blank'>in person</a> or tune in <a href='https://uottawa-ca.zoom.us/meeting/register/tJ0kc-murjgsHNSdqheiHG3ur9rrMNR8FBuD#/registration' rel='external' target='_blank'>online</a> for this event!","<i>Snowed In Studios</i> est le plus grand studio de développement de jeux d’Ottawa. Depuis 2009, le studio a travaillé sur des titres indépendants ainsi que des triples-A, notamment <i>Starfield</i>, <i>Forza Motorsport</i>, <i>Madden</i>, <i>Forza Horizon 5</i>, <i>Dead By Daylight</i>, <i>Deus Ex</i>, <i>The Elder Scrolls</i> et <i>Fallout</i>. Rejoignez-nous pour une session de questions-réponses avec les membres du studio et découvrez le travail dans l’industrie du jeu et le processus de création de jeux vidéo.<br><i>(Présentation en anglais)</i><br>Curieux de tout savoir? Venez <a href='https://forms.gle/EL14y1HHhiESgZRK8' rel='external' target='_blank'>en personne</a> ou inscrivez-vous <a href='https://uottawa-ca.zoom.us/meeting/register/tJ0kc-murjgsHNSdqheiHG3ur9rrMNR8FBuD#/registration' rel='external' target='_blank'>en ligne</a> pour cet évènement!"],
         date: ["Friday, March 15, 2024","vendredi, 15 mars, 2024"],
         time: ["11:30AM - 1:00PM","11h30 - 13h00"],
         location: ["Brian Dickson Law Library - FTX430 || Online","Bibliothèque de droit Brian Dickson - FTX430 || En ligne"],
         contact: ["uOttawa Esports Copresidents","Co-Présidentes d'uOttawa Esports"],
     },
     {
         title: ["A talk on health and wellness in Esports with Doc Respawn (Dr. Jordan Tsai), Esports Physical Therapist","Une rencontre sur la santé et le mieux-être dans le domaine du sport électronique avec <i>Doc Respawn</i> (Dr. Jordan Tsai), Kinésithérapeute spécialisé dans le sport électronique"],
         image: ["../../images/events/upcoming/general.png","uOttawa Esports Logo","Logo de Esports uOttawa"],
         text: ["Doc Respawn (Dr. Jordan Tsai) is a Doctor of Physical Therapy who has worked with professional Esports teams, including Cloud 9, and professional players. According to Dr. Tsai, “legendary performance is built off stage”! Join us to discover how performance can be improved off stage and to discuss health and wellness for Esports competitors.<br><i>(Presentation in English. Please note that this is a hybrid format presentation with a remote presenter.)</i><br>To sign up for this presentation, you can attend <a href='https://forms.gle/4YKE6EDZd9W4Kqq58' rel='external' target='_blank'>in person</a> or <a href='https://uottawa-ca.zoom.us/meeting/register/tJwrdO2trT0rGNCB5Yd6A2ZpBNyJUBzprBie#/registration' rel='external' target='_blank'>online</a>.","<i>Doc Respawn</i> (Dr. Jordan Tsai) est un docteur en physiothérapie qui a travaillé avec des équipes professionnelles de sport électronique, notamment <i>Cloud 9</i>, et des joueurs professionnels. Selon Dr. Tsai, « les performances légendaires se construisent en dehors de la scène »! Rejoignez-nous pour découvrir comment les performances peuvent être améliorées en dehors de la compétition et pour parler de la santé et du mieux-être des joueurs de sports électroniques.<br><i>(Présentation en anglais. Veuillez noter qu'il s'agit d'une présentation hybride avec le présentateur à distance.)</i><br>Pour s'inscrire à cette présentation, tu peux venir <a href='https://forms.gle/4YKE6EDZd9W4Kqq58' rel='external' target='_blank'>en personne</a> ou <a href='https://uottawa-ca.zoom.us/meeting/register/tJwrdO2trT0rGNCB5Yd6A2ZpBNyJUBzprBie#/registration' rel='external' target='_blank'>en ligne</a>."],
         date: ["Saturday, March 16 2024","samedi, 16 mars, 2024"],
         time: ["2:00PM – 3:00PM","14h00 - 15h00"],
         location: ["Brian Dickson Law Library - FTX430 || Online","Bibliothèque de droit Brian Dickson - FTX430 || En ligne"],
         contact: ["uOttawa Esports Copresidents","Co-Présidentes d'uOttawa Esports"],
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
    //     text: ["Every week, Smash Ultimate fans come together to play in an in-person tournament at uOttawa. Both casual and competitive players alike join in and enjoy themselves, whether they wish to make friends, enjoy playing a game they like, or strive to be the best. To join, you can sign up through the link available on our Discord!", "Chaque semaine, les fans de Smash Ultimate se joignent en personne pour jouer un tournoi à uOttawa. Joueurs compétitifs et d’occasion viennent pour un moment de plaisir, que ce soit pour faire des amis, jouer à un jeu qu’ils aiment, ou être le meilleur. Pour t’y joindre, tu peux t’inscrire à travers le lien disponible dans notre Discord!"],
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