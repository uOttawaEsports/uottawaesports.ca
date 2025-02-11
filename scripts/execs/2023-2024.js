let execs = {
    /* Co-Presidents */
    "Jessica Guo": {
        name: "Jessica Guo",
        image: "../../../images/execs/2023-2024/Jessica Guo.jpg",
        role: ["Co-President", "Co-Présidente"],
        prog: ["Software Engineering", "Génie Logiciel"],
        year: ["3rd Year", "3e année"],
        game: "Minesweeper, VALORANT, Phasmophobia, League of Legends, Dead by Daylight, ARK: Survival Evolved",
        desc: ["Hello, I'm Jessica. I enjoy learning about people's lives and sharing my own. I love cats, otters and tomatoes.", "Bonjour, je suis Jessica. J’adore en apprendre plus sur la vie des gens tout en partageant ce qui se passe dans la mienne. J'aime les chats, les loutres, et les tomates."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%; background-position-x: 50%;" // edit the url() for each exec if they'd like a custom background - /images/execs/(year)/background/
    },
    "Scarlett Montserrat Sanabria-Ramos": {
        name: "Scarlett Montserrat Sanabria-Ramos",
        image: "../../../images/execs/2023-2024/Scarlett Ramos.jpeg",
        role: ["Co-President", "Co-Présidente"],
        prog: ["Honours Bachelor Interdisciplinary Health Science French Immersion", "Baccalauréat Spécialisé Interdisciplinaire en sciences de la santé avec Immersion en Français"],
        year: ["4th Year", "4e année"],
        game: "League of Legends, Honkai Star Rail, Valorant",
        desc: ["I am originally from Mexico but came to Canada in 2012. I was also born in the US, so I have three passports and citizenships. I am basically NATO. I am passionate about health and the well-being of our community, at the moment work as a clerk for CHEO and The Ottawa General Hospital. I also like to play games and read in my downtime.", "Je suis originaire du mexique, mais je suis venue au Canada en 2012. Je suis aussi née aux États-Unis, donc j'ai trois passports et citoyennetés. Je suis essentiellement l'OTAN. Je suis passionée de la santé et le bien-être de notre communauté, travaillant au moment comme employée pour CHEO et l'Hôpital d'Ottawa. J'aime aussi jouer à des jeux et lire dans mon temps libre."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/Scarlett_Montserrat_Sanabria_Ramos.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    /* Execs */
    "Kathy Liu": {
        name: "Kathy Liu",
        image: "../../../images/execs/2023-2024/Kathy_Liu.png",
        role: ["VP Finance", "VP Finances"],
        prog: ["Health Sciences", "Sciences de la Santé"],
        year: ["4th Year", "4e année"],
        game: "Yakuza, minecraft",
        desc: ["I'd love to one day pursue music and join an orchestra in my free time once studies are over and start playing volleyball again too :)", "J'aimerais un jour poursuivre la musique et me joindre à un orchestre dans mon temps libre lorsque mes études seront finies et commencer à jouer de nouveau au volleyball aussi :)"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 75%;"
    },
    "Laura Manrique": {
        name: "Laura Manrique",
        image: "../../../images/execs/2023-2024/Laura Manrique.JPG",
        role: ["VP Internal", "VP Interne"],
        prog: ["Double Major in Biology/Computer Science", "Double Majeure en Biologie/Science Informatique"],
        year: ["1st Year", "1ère année"],
        game: "Valorant, Apex Legends",
        desc: ["Hi! I am a jack of all trades, with a penchant for drawing, writing, gaming, and tinkering! I've built a computer and have a knack for memorizing things.", "Allo! Je suis une personne à tout faire, avec un penchant pour le dessin, l'écriture, les jeux et le bricolage! J'ai bâti un ordinateur et j'ai un don pour la mémorization."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Nicholas Séguin": {
        name: "Nicholas Séguin",
        image: "../../../images/execs/2023-2024/Nicholas Séguin.jpeg",
        role: ["VP Bilingualism", "VP Bilinguisme"],
        prog: ["Ph.D. Interdisciplinary Research in Music", "Doctorat en Recherche interdisciplinaire en musique"],
        year: ["2nd Year", "2e année"],
        game: "Soulsborne games, Outer Wilds, Prince of Persia",
        desc: ["Hey, I'm Nick, and I love everything music and psychology. Currently studying video game music and games that revolve around sound. In my spare time, I like to play piano, play video games, and speedrun!", "Salut, je m'appelle Nick, et j'aime tout ce qui est musique et psychologie. J'étudie actuellement la musique des jeux vidéos et les jeux centrés sur le son. Dans mon temps libre, j'aime jouer au piano, jouer aux jeux vidéo, et faire des speedruns!"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2021-2022/backgrounds/nicholas-seguin.gif); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Misbah Zahid": {
        name: "Misbah Zahid",
        image: "../../../images/execs/2023-2024/Misbah_Zahid.jpg",
        role: ["VP External", "VP Externe"],
        prog: ["Biomedical Science", "Sciences Biomédicales"],
        year: ["4th Year", "4e année"],
        game: "League of Legends, Valorant, Stardew Valley, any farming sim",
        desc: ["Hello my name is Misbah! When I'm not studying or gaming I enjoy reading and making things. I'm also passionate about fashion and medicine :)", "Bonjour, mon nom est Misbah! Quand je ne suis pas en train d'étudier ou de jouer à des jeux vidéo, j'aime lire et bricoler. Je suis aussi passionée de la mode et de la médecine :)"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Jay Moon": {
        name: "Jay Moon",
        image: "../../../images/execs/2023-2024/Jay Moon.jpeg",
        role: ["VP Competitive", "VP Compétitif"],
        prog: ["Finance", "Finance"],
        year: ["4th Year", "4e année"],
        game: "CS:GO, Valorant, Overwatch, Minecraft, Destiny 1 (Not 2)",
        desc: ["Hi I’m Jay, I have been gaming all throughout my life so it’s no surprise I’ve landed myself in the esports club. Outside of gaming I enjoy eating food, cooking, and trying not to be a finance bro. I’m usually pretty busy but my DMs are always open if you want to talk about anything. :)", "Bonjour, je suis Jay, je joue à des jeux vidéo depuis toujours, il n'est donc surprenant que j'aie atteri dans le club esports. En dehors des jeux vidéo, j'aime manger, cuisiner, et essayer de ne pas être un bro de la finance. Je suis habituellement occupé mais mes MPs sont toujours ouverts si vous voulez parler de quoi que ce soit. :)"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Mia Burdeau": {
        name: "Mia Burdeau",
        image: "../../../images/execs/2023-2024/Mia_Burdeau.jpg",
        role: ["VP Events", "VP Événements"],
        prog: ["Dual Honours BSocSc in Anthropology and Sociology", "B.Sc.Soc. Spécialisé bidisciplinaire en anthropologie et sociologie"],
        year: ["3rd Year", "3e année"],
        game: "Mass Effect, League of Legends, Valheim, DayZ, The Last of Us, Spiderman, Risk of Rain 2",
        desc: ["Hi! My name is Mia. I am an anthropologist in the making who loves tons of nerdy stuff like video games and Magic: The Gathering. My hobbies are all primarily centered around video games but I also love to create digital art and play music.", "Bonjour! Mon nom est Mia. Je suis anthropologue en devenir qui aime les trucs intello comme les jeux vidéo et Magic : The Gathering. Mes passe-temps sont tous principalement centrés sur les jeux vidéo mais j'aime aussi faire de l'art numérique et jouer de la musique."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Billy Zhou": {
        name: "Billy Zhou",
        image: "../../../images/execs/2023-2024/pfp - Rysair.png",
        role: ["VP Social", "VP Social"],
        prog: ["Honours Bachelor in Political Science", "Baccalauréat Spécialisé en Science Politique"],
        year: ["4th Year", "4e année"],
        game: "Mega Man, Under Night In-Birth, Arknights, Melty Blood Actress Again Current Code, Sound Voltex",
        desc: ["Hi! I'm a freelance graphic designer who frequently plays various anime fighting games. I'm also a massive closeted weeb.", "Salut! Je suis un graphiste indépendant qui joue différents jeux anime de combat. Je suis aussi un énorme weeb caché."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/Rysair.png); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    /* Game Heads */
    "Wing Chi Erica Chan": {
        name: "Wing Chi Erica Chan",
        image: "../../../images/execs/2023-2024/Wing Chi Erica Chan.jpg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Apex Legends", "<span class='fw-bold'>Chef de jeu</span> <br /> Apex Legends"],
        prog: ["BA Honours Psychology", "Baccalauréat en psychologie spécialisé"],
        year: ["1st Year", "1e année"],
        game: "Stardew Valley, Apex Legends, Valorant, and Omori",
        desc: ["I like reading manga and collecting plushies.", "J'aime lire des mangas et collectionner des peluches."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 75%;"
    },
    "Ethan Bradley": {
        name: "Ethan Bradley",
        image: "../../../images/execs/placeholder.png",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Call of Duty", "<span class='fw-bold'>Chef de jeu</span> <br /> Call of Duty"],
        prog: ["Honours bachelor of Human kinetics - Recreation and Sport Management","Baccalauréat en sciences de l'activité physique - Gestion du sport et des loisirs"],
        year: ["2nd Year","2e année"],
        game: "Call of Duty, Apex Legends, Rocket League",
        desc: ["Hi, I'm Ethan. I've been gaming my whole life and am currently playing for the COD Garnet team here at uOttawa. I also enjoy rock climbing, and my peak chess rating is 1050.", "Bonjour, je suis Ethan. J'ai joué aux jeux vidéo toute ma vie et je suis présentement joueur pour l'équipe Garnet de COD ici à l'université d'Ottawa. Je prends plaisir à l'escalade, et mon record classement Elo aux échecs est de 1500."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Jacob Pilon": {
        name: "Jacob Pilon",
        image: "../../../images/execs/2023-2024/Jacob_Pilon.jpg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Destiny 2", "<span class='fw-bold'>Chef de jeu</span> <br /> Destiny 2"],
        prog: ["Software engineering", "Génie Logiciel"],
        year: ["4th Year", "4e année"],
        game: "Destiny 2, Overwatch 2, Civ5, Rimworld",
        desc: ["I like to keep myself busy with keeping active, especially during the summer. During the winter I spend most of my days grinding out games and collecting flags. Since I'm in Software engineering I hope to get into game dev as either a career or just a hobby :)", "Je préfère me garder occupé en restant actif, surtout durant l'été. Durant l'hiver, je passe la plupart de mes journées à jouer sans arrêt et à collectionner des drapeaux. Étant en génie logiciel, je voudrais faire du développement de jeux soit comme carrière ou comme passe-temps :)"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Gabrielle Tao": {
        name: "Gabrielle Tao",
        image: "../../../images/execs/2023-2024/Gabrielle Tao.png",
        role: ["<span class='fw-bold'>Game Head</span> <br /> DOTA 2", "<span class='fw-bold'>Chef de jeu</span> <br /> DOTA 2"],
        prog: ["Honours Psychology","Baccalauréat en psychologie spécialisé"],
        year: ["1st Year","1e année"],
        game: "Dota 2, Stardew Valley, Genshin",
        desc: ["Yo I’m Pohohoro~ Aside from feeding in DOTA2, I quite enjoy crochet, pottery, hiking and some good music. Here are a few of my favourite things!</br>top 3 animes:<ul><li>Hunter x Hunter</li><li>Samurai Champloo</li><li>Wolf Children</li></ul>top 2 songs:<ul><li>Stella By Starlight by Ella Fitzgerald</li><li>Black Orpheus by Paul Desmond</li></ul>Favourite DOTA2 hero: JAKIRO!", "Yo je suis Pohohoro~ Apart de commettre des actes de sabotage en DOTA 2, j'aime bien le crochet, la poterie, les randonnées et de la bonne musique. Voici quelques-unes de mes choses préférées!</br>top 3 animes:<ul><li>Hunter x Hunter</li><li>Samurai Champloo</li><li>Wolf Children</li></ul>top 2 chansons:<ul><li>Stella By Starlight by Ella Fitzgerald</li><li>Black Orpheus by Paul Desmond</li></ul>Héro favori de DOTA2: JAKIRO!"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/Gabrielle_Tao.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "McKenna J-H": {
        name: "McKenna J-H",
        image: "../../../images/execs/2023-2024/McKenna J-H.jpeg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Fortnite", "<span class='fw-bold'>Chef de jeu</span> <br /> Fortnite"],
        prog: ["Criminology", "Criminologie"],
        year: ["1st Year", "1e année"],
        game: "Fortnite, Call of Duty(franchise), Eyes of Heaven, Minecraft, super smash bros",
        desc: ["Other than gaming I love anime and cartoons. I’m also a Disney fan with a deep love for Star Wars and Pirates of the Caribbean. Outside of my nerd world I am a competitive dancer in all styles. Oh and, I can’t skate but I’m a die hard Leafs fan … sorry Ottawa :(", "Hors des jeux, j'aime les séries anime et les séries animées. Je suis aussi fan de Disney avec un profond amour pour Star Wars et Pirates des Caraïbes. Hors de mon monde intello, je suis danceuse compétitive dans tout style. Oh, et je ne peux patiner, mais je suis une avide fan des Leafs... désolé Ottawa :("],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/McKenna_J-H.gif); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Dylan Jones": {
        name: "Dylan Jones",
        image: "../../../images/execs/2023-2024/Dylan Jones.jpg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Minecraft", "<span class='fw-bold'>Chef de jeu</span> <br /> Minecraft"],
        prog: ["Physics", "Physics"],
        year: ["2nd/3rd Year", "2e/3e année"],
        game: "Minecraft",
        desc: ["Hi! My name is Dylan, I often go by DrJones or Jones. I love all kinds of games, whether casual, competitive, or tabletop!<br>Outside of the gaming sphere, I enjoy movies. If you have any recommendations, I'm all ears. I'm trying to get my list of films to 1,000!", "Bonjour! Mon nom est Dylan, je m'appelle aussi DrJones ou  Jones. J'aime tout genre de jeux, qu'ils soient occasionnel, compétitif, ou sur table!<br>Hors de la sphère des jeux, j'aime les films.  Si tu as des recommendations, je suis toute ouïe. J'essaie d'allonger ma liste de films à 1000!"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/Dylan_Jones.gif); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Shaun Francis": {
        name: "Shaun Francis",
        image: "../../../images/execs/2023-2024/Shaun Francis.jpg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Magic the Gathering", "<span class='fw-bold'>Chef de jeu</span> <br /> Magic the Gathering"],
        prog: ["Computer Science", "Informatique"],
        year: ["3rd Year", "3e année"],
        game: "Sea of Thieves, League of Legends, DnD, Magic the Gathering",
        desc: ["I'm Shaun, while I am new to the UOttawa Esports Club I am no stranger to video games, tabletop games, and most importantly, trading card games. I've been playing all sorts of games my whole life as a means of bringing people together and I'm thrilled to be able to sit around a table and play with all of you!", "Je suis Shaun, et même étant nouveau au Club d’Esports uOttawa, je ne suis pas étranger aux jeux vidéo, aux jeux de table, et surtout, aux jeux de cartes. J’ai joué à tout type de jeux toute ma vie comme manière d’amener les gens à s’approcher et je suis très heureux de pouvoir m’asseoir autour d’une table à jouer avec vous tous!"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Narththanaan Rajeswaran": {
        name: "Narththanaan Rajeswaran",
        image: "../../../images/execs/2023-2024/Narththanaan Rajeswaran.jpeg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> League of Legends", "<span class='fw-bold'>Chef de jeu</span> <br /> League of Legends"],
        prog: ["Political Science", "Science Politique"],
        year: ["4th Year", "4e année"],
        game: "League of Legends, Pokemon",
        desc: ["I want to give people a safe and fun environment to be themselves and play League.", "Je veux donner aux gens un environnement sécuritaire et amusant pour qu'ils puissent être eux-mêmes et jouer à League."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Thomas Ford": {
        name: "Thomas Ford",
        image: "../../../images/execs/2023-2024/Thomas Ford.PNG",
        role: ["<span class='fw-bold'>Game Head</span> <br /> osu!", "<span class='fw-bold'>Chef de jeu</span> <br /> osu!"],
        prog: ["Honours Computer Science", "Spécialisé en Informatique"],
        year: ["3rd Year", "3e année"],
        game: "osu!, Geometry Dash, Minecraft",
        desc: ["Hi my name is Thomas! I love rhythm games and I like beating hard challenges in single player games like FNaF's UNC 50/20 mode. I am also active in the osu! tournament scene and I enjoy competing to win!", "Salut, mon nom est Thomas! J'aime les jeux de rythme et relever des défis difficiles dans les jeux solo comme le mode UCN 50/20 de FNaF. Je suis aussi actif dans la scène de tournois de osu! et je prends plaisir à jouer pour la victoire!"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/thomas_ford.png); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Janica Adame": {
        name: "Janica Adame",
        image: "../../../images/execs/2023-2024/Janica Adame.jpeg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Overwatch", "<span class='fw-bold'>Chef de jeu</span> <br /> Overwatch"],
        prog: ["Honours Psychology", "B.A. Spécialisé en psychologie"],
        year: ["3rd Year", "3e année"],
        game: "Overwatch, Coffee Talk, Resident Evil, Guild Wars 2",
        desc: ["Hi, I'm Janica, but you can call me Jay! I used to play for Overwatch Grey during the 2022-2023 semester. Outside of playing video games, I love reading books, watching Criminal Minds, and drinking tea. My favourite genre to read is fantasy, and I have a shih-poo dog named Toast (who is far too spoiled). I look forward to meeting all of you in the upcoming comp tryouts and future Overwatch 2 events!", "Salut, je suis Janica, mais vous pouvez m’appeller Jay! J’ai joué pour notre équipe Overwatch Grey durant le semestre 2022-2023. En dehors des jeux vidéo, j’aime lire les livres, regarder Criminal Minds, et boire du thé. Mon genre littéraire préféré est le genre fantastique, et j’ai un shih-poo nommé Toast (qui est beaucoup trop gâté). J’ai hâte de vous rencontrer aux prochains essais compétitifs et dans les futurs évènements Overwatch 2!"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/janica_adame.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Keynaan Ismail": {
        name: "Keynaan Ismail",
        image: "../../../images/execs/2023-2024/Keynaan.jpg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Pokemon", "<span class='fw-bold'>Chef de jeu</span> <br /> Pokemon"],
        prog: ["Computer Science", "Informatique"],
        year: ["4th Year", "4e année"],
        game: "Pokemon, Super Smash bros, Halo, Rocket League, Wii Sports and Lego Star Wars: The Complete Saga",
        desc: ["Hi my name is Keynaan or Key for short. I've been gaming ever since I was a little lad with Pokemon being one of my very first games that i still love today. I also like watching anime and movies with One Piece being one of my favorites. I've been in a bunch of competitive scenes like Pokemon, Smash Ultimate, Rocket league, Halo and more. But I really enjoy the casual side of games too.", "Bonjour, mon nom est Keynaan ou Key pour faire court. Je joue aux jeux vidéo depuis que je suis jeune bambin, avec Pokémon étant l'un des premiers jeux que j'ai touché que j'adore encore aujourd'hui. J'aime aussi voir des animes et des films, One Piece étant parmi mes favoris. J'ai été dans plusieurs scènes compétitives comme Pokemon, Smash Ultimate, Rocket League, Halo et plus. Mais j'aime bien le côté plus occasionel des jeux vidéo également."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/Keynaan.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Qitao Chen": {
        name: "Qitao Chen",
        image: "../../../images/execs/2023-2024/Toga.png",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Rainbow Six Siege", "<span class='fw-bold'>Chef de jeu</span> <br /> Rainbow Six Siege"],
        prog: ["Environmental Studies", "§tudes environnementales"],
        year: ["3rd Year", "3e année"],
        game: "COD BO4&BOCW, Monster Hunter World",
        desc: ["Inui Toko daisuki", "Inui Toko daisuki"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Zacharie LeBrun-LeMay": {
        name: "Zacharie LeBrun-LeMay",
        image: "../../../images/execs/2023-2024/Zacharie LeBrun-LeMay.jpeg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Rocket League", "<span class='fw-bold'>Chef de jeu</span> <br /> Rocket League"],
        prog: ["Criminology in French", "Criminologie, français"],
        year: ["4th Year", "4e année"],
        game: "Rocket League and Valorant",
        desc: ["I love video games! I’ve tried out almost every free to play game in our Discord but always come back to Rocket League and Valorant. Outside of video games, I like building and collecting legos (especially Star Wars). I’m also the beatboxer for one of uOttawa’s a capella groups called achezzo :)", "J'aime les jeux vidéo! J'ai essayé presque tous les jeux gratuits dans notre discord, mais je reviens toujours à Rocket League et Valorant. Autre que les jeux vidéo, j'aime bien construire et collectionner des Legos (notamment Star Wars). Je suis également le beatboxer d'un des groupes a capella de l'université d'Ottawa appelé achezzo :)"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/Zacharie_LeBrun-LeMay.jpeg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Miles Besignano": {
        name: "Miles Besignano",
        image: "../../../images/execs/2023-2024/Miles Besignano.jpeg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Super Smash Bros. Melee", "<span class='fw-bold'>Chef de jeu</span> <br /> Super Smash Bros. Melee"],
        prog: ["English", "Anglais"],
        year: ["1st Year", "1e année"],
        game: "Super Smash Bros Melee, Rainbow Six Siege, Final Fantasy 6,  Street Fighter 5, Titanfall 2",
        desc: ["Hey, I’m Miles. I like melee, it’s pretty cool. If you want to play or have any ideas for Melee in the club, then hmu.", "Hé, je suis Miles. J’aime Melee, c'est plutôt cool. Si tu veux y jouer ou si t'as des idées pour Melee au sein du club, laisses-moi savoir."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Tyler Lindsay": {
        name: "Tyler Lindsay",
        image: "../../../images/execs/2023-2024/tyler-lindsay.jpg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Super Smash Bros. Ultimate", "<span class='fw-bold'>Chef de jeu</span> <br /> Super Smash Bros. Ultimate"],
        prog: ["History and Political Science", "Histoire et Science Politique"],
        year: ["3rd Year", "3e année"],
        game: "Smash Bros., Zelda, Pokemon, Fire Emblem",
        desc: ["Hi, I'm Tai! I love most things Nintendo, and I am proud to run events for the uOttawa eSports Club.", "Bonjour, je suis Tai! J’adore la majorité des choses Nintendo, et je suis fier d’organiser des évènements pour le club esports d’uOttawa."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Elizabeth Thacker": {
        name: "Elizabeth Thacker",
        image: "../../../images/execs/2023-2024/Elizabeth Thacker.jpg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> VALORANT", "<span class='fw-bold'>Chef de jeu</span> <br /> VALORANT"],
        prog: ["Honours B.A. in Communications", "B.A. spécialisé Communication"],
        year: ["4th Year", "4e année"],
        game: "Dragon Age Series, Legend of Zelda games, Valorant",
        desc: ["Hey my name's Elizabeth, but I typically go by Liz, and I am an avid Nintendo/cozy gamer turned esports player (tho I still love Nintendo and cozy games).", "Salut, je m’appelle Elizabeth mais on me surnomme typiquement Liz. Je suis une avide fan de Nintendo et d’autres jeux douillets, maintenant devenue une compétitrice d’esports (bien que j’aime toujours Nintendo et les jeux plus relax)."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    }
}

function cards() {
    let isEnglish = window.location.href.includes("/en");

    for (let execName in execs) {
        let exec = execs[execName];

        let h2 = document.createElement("h2");
        h2.className = "card-title fs-4 fw-bold";
        h2.innerHTML = exec.name;

        let h3 = document.createElement("h3");
        h3.className = "card-title fs-5";
        h3.innerHTML = isEnglish ? exec.role[0] : exec.role[1];

        let div1 = document.createElement("div");
        div1.className = "card-body py-1 px-0 text-center";
        div1.appendChild(h2);
        div1.appendChild(h3);

        let img = document.createElement("img");
        img.src = exec.image;
        img.className = "card-img-top pt-3 pb-2";
        img.alt = exec.name;

        let div2 = document.createElement("div");
        div2.className = "card bg-dark text-white my-2 m-sm-2 m-lg-3";
        div2.addEventListener("click", function(){ more(execName); });
        div2.setAttribute("data-bs-toggle", "modal");
        div2.setAttribute("data-bs-target", "#modal");
        div2.appendChild(img);
        div2.appendChild(div1);


        if (exec.role[0].includes("Co-President") || exec.role[0].includes("VP")){
            document.getElementById("presidents").appendChild(div2);
        } else {
            document.getElementById("game-heads").appendChild(div2);
        }
    }
}

function more(current) {
    let isEnglish = window.location.href.includes("/en");
    document.getElementById("modalTitle").innerHTML = execs[current].name;
    document.getElementById("modalImage").src = execs[current].image;
    document.getElementById("modalImage").alt = execs[current].name;
    document.getElementById("modalRole").innerHTML = isEnglish ? execs[current].role[0] : execs[current].role[1];
    document.getElementById("modalBackground").style = execs[current].background;
    document.getElementById("modalProg").innerHTML = isEnglish ? execs[current].prog[0] : execs[current].prog[1];
    document.getElementById("modalYear").innerHTML = isEnglish ? execs[current].year[0] : execs[current].year[1];
    document.getElementById("modalGame").innerHTML = execs[current].game;
    document.getElementById("modalDesc").innerHTML = isEnglish ? execs[current].desc[0] : execs[current].desc[1];
}