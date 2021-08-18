function more(name) {

    let modals = {
        /* Co-Presidents */
        "jaxon murphy": {
            title: "Jaxon Murphy",
            image: "../../../images/execs/2021-2022/jaxon-murphy.png",
            role: "Co-President",
            prog: "Economics and Management",
            year: "4th Year",
            game: "CS:GO, Destiny, Monster Hunter",
            desc: "Hey y’all I’m Jaxon, and I’ve been a Co-President of the club since 2020! If it’s worth anything, I can name every national flag in the world.",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/2021-2022/backgrounds/jaxon-murphy.webp); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%; background-position-x: 50%;"
        },
        "dhruv kumar": {
            title: "Dhruv Kumar",
            image: "../../../images/execs/placeholder.png",
            role: "Co-President",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        /* Execs */
        "alex lisitsas": {
            title: "Alex Lisitsas",
            image: "../../../images/execs/placeholder.png",
            role: "VP Finance",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "andrew leblanc": {
            title: "Andrew Leblanc",
            image: "../../../images/execs/placeholder.png",
            role: "VP Competitive",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "calvin koehl": {
            title: "Calvin Koehl",
            image: "../../../images/execs/placeholder.png",
            role: "VP Events",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "steven li": {
            title: "Steven Li",
            image: "../../../images/execs/2021-2022/steven-li.png",
            role: "VP Internal",
            prog: "Computer Engineering",
            year: "3rd Year",
            game: "VALORANT, Euro Truck Simulator 2",
            desc: "Hey, I'm Steven! I love playing video games, keeping up with politics, and volunteering!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/2021-2022/backgrounds/steven-li.gif); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "prem gupta": {
            title: "Prem Gupta",
            image: "../../../images/execs/placeholder.png",
            role: "VP External",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "VACANT": {
            title: "VACANT",
            image: "../../../images/execs/placeholder.png",
            prog: "",
            year: "",
            game: "",
            role: "VP Social",
            desc: "The position for VP Social is currently vacant.",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        /* Game Heads */
        "bora basar": {
            title: "Bora Basar",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> CS:GO",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "peter karpov": {
            title: "Peter Karpov",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> DOTA 2",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "ryan farrell": {
            title: "Ryan Farrell",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Fighting Games",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "matthew awrey": {
            title: "Matthew Awrey",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Fortnite",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "narth rajeswaran": {
            title: "Narth Rajeswaran",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> League of Legends",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "brandon ly": {
            title: "Brandon Ly",
            image: "../../../images/execs/2021-2022/brandon-ly.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> osu!",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "benoit gagnier": {
            title: "Benoit Gagnier",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Overwatch",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "griffin taylor": {
            title: "Griffin Taylor",
            image: "../../../images/execs/2021-2022/griffin-taylor.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Rainbow Six Siege",
            prog: "Computer Engineering",
            year: "3rd Year",
            game: "Rainbow Six Siege, Dishonored",
            desc: "I'm Griffin, and I've been the Game Head for R6 since 2020, and the IGL of the Garnet (A) team since 2019.",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/2021-2022/backgrounds/griffin-taylor.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "fabien lefebvre": {
            title: "Fabien Lefebvre",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Rocket League",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "alexander joe": {
            title: "Alexander Joe",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Super Smash Bros. Melee",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "tyler lindsay": {
            title: "Tyler Lindsay",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Super Smash Bros. Ultimate",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        },
        "martina on": {
            title: "Martina On",
            image: "../../../images/execs/2021-2022/martina-on.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> VALORANT",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000a6, #000000a6), url(../../../images/execs/uottawa-aerial.jpg); background-repeat: no-repeat; background-size: cover; background-position-x: 50%; background-position-y: 50%;"
        }
    }

    document.getElementById("modalTitle").innerHTML = modals[name].title;
    document.getElementById("modalImage").src = modals[name].image;
    document.getElementById("modalImage").alt = modals[name].title;
    document.getElementById("modalRole").innerHTML = modals[name].role;
    document.getElementById("modalBackground").style = modals[name].background;
    document.getElementById("modalProg").innerHTML = modals[name].prog;
    document.getElementById("modalYear").innerHTML = modals[name].year;
    document.getElementById("modalGame").innerHTML = modals[name].game;
    document.getElementById("modalDesc").innerHTML = modals[name].desc;

}