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
        prog: ["Ph.D. Interdisciplinary Resarch in Music", "Doctorat en Recherche interdisciplinaire en musique"],
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
    "Elaine Tran": {
        name: "Elaine Tran",
        image: "../../../images/execs/2023-2024/Elaine Tran.jpeg",
        role: ["VP Social", "VP Social"],
        prog: ["Private", "Privé"],
        year: ["Private", "Privé"],
        game: "Valorant, TFT, Minecraft",
        desc: ["Before being promoted to VP Social, I was the manager of two of our Valorant teams. Being the manager provided me with a lot of fun memories as well as experience in the world of Esports. I’ve dabbled in a couple of other games as well other than Valorant, such as TFT, LOL, and MC.", "Avant d'avoir été promue à VP social, j'étais manager de deux de nos équipes Valorant. Être manager m'a apporté beaucoup de beaux souvenirs ainsi que de l'expérience dans le monde des esports. J'ai aussi essayé quelques jeux autres que Valorant, comme TFT, LOL, et MC."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/execs/2023-2024/backgrounds/elaine_tran.png); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    /* Game Heads */
    "VACANT": {
        name: "VACANT",
        image: "../../../images/execs/placeholder.png",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Apex Legends", "<span class='fw-bold'>Chef de jeu</span> <br /> Apex Legends"],
        prog: ["N/A", "N/A"],
        year: ["N/A", "N/A"],
        game: "N/A",
        desc: ["N/A", "N/A"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 75%;"
    },
    "VACANT": {
        name: "VACANT",
        image: "../../../images/execs/placeholder.png",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Call of Duty", "<span class='fw-bold'>Chef de jeu</span> <br /> Call of Duty"],
        prog: ["N/A","N/A"],
        year: ["N/A","N/A"],
        game: "N/A",
        desc: ["N/A", "N/A"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Philip L.": {
        name: "Philip L.",
        image: "../../../images/execs/placeholder.png",
        role: ["<span class='fw-bold'>Game Head</span> <br /> CS:GO", "<span class='fw-bold'>Chef de jeu</span> <br /> CS:GO"],
        prog: ["N/A", "N/A"],
        year: ["N/A", "N/A"],
        game: "N/A",
        desc: ["N/A", "N/A"],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "Daanish Khan": {
        name: "Daanish Khan",
        image: "../../../images/execs/2023-2024/Daanish_Khan.png",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Minecraft", "<span class='fw-bold'>Chef de jeu</span> <br /> Minecraft"],
        prog: ["Software Engineering", "Génie logiciel"],
        year: ["4th Year", "4e année"],
        game: "Minecraft, Pokemon, League, Monster Hunter, OMORI",
        desc: ["Hi! I'm excited to be apart of the uOttawa Esports team. My hobbies other than games are playing guitar and programming :)", "Bonjour! Je suis joyeux de faire partie de l'équipe d'Esports uOttawa. Mes passe-temps autres que les jeux vidéo sont la guitare et la programmation :)"],
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
    "Shaun Francis": {
        name: "Shaun Francis",
        image: "../../../images/execs/placeholder.png",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Magic the Gathering", "<span class='fw-bold'>Chef de jeu</span> <br /> Magic the Gathering"],
        prog: ["Computer Science", "Informatique"],
        year: ["3rd Year", "3e année"],
        game: "Sea of Thieves, League of Legends, DnD, Magic the Gathering",
        desc: ["ENG", "FR"],
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
    "Griffin Taylor": {
        name: "Griffin Taylor",
        image: "../../../images/execs/2023-2024/griffin_taylor.jpg",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Rainbow Six Siege", "<span class='fw-bold'>Chef de jeu</span> <br /> Rainbow Six Siege"],
        prog: ["Computer Engineering", "Génie Informatique"],
        year: ["4th Year", "4e année"],
        game: "Rainbow Six Siege, Dishonored, Genshin Impact",
        desc: ["I've been Gamehead since May of 2020, and am the longest continuous serving Gamehead of any game in our club's history. I have been the captain, IGL, and entry for the R6 Garnet team for 3 years now.", "Je suis chef de jeu depuis mai 2020, et je suis le chef de jeu qui est resté le plus longtemps en poste dans l'histoire de notre club, tous jeux confondus. Je suis le capitaine, le leader en jeu, et le “entry” pour l’équipe Garnet de R6 depuis maintenant trois ans."],
        background: "background-image: linear-gradient(#000000cc, #000000cc), url(../../../images/tabaret-hall.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
    },
    "VACANT": {
        name: "VACANT",
        image: "../../../images/execs/placeholder.png",
        role: ["<span class='fw-bold'>Game Head</span> <br /> Rocket League", "<span class='fw-bold'>Chef de jeu</span> <br /> Rocket League"],
        prog: ["N/A", "N/A"],
        year: ["N/A", "N/A"],
        game: "N/A",
        desc: ["N/A", "N/A"],
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