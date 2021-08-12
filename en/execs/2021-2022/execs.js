function more(name) {

    let modals = {
        /* Co-Presidents */
        "jaxon murphy": {
            title: "Jaxon Murphy",
            image: "../../../images/execs/2021-2022/jaxon-murphy.png",
            role: "Co-President",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "dhruv kumar": {
            title: "Dhruv Kumar",
            image: "../../../images/execs/placeholder.png",
            role: "Co-President",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
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
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "andrew leblanc": {
            title: "Andrew Leblanc",
            image: "../../../images/execs/placeholder.png",
            role: "VP Competitive",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "calvin koehl": {
            title: "Calvin Koehl",
            image: "../../../images/execs/placeholder.png",
            role: "VP Events",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "steven li": {
            title: "Steven Li",
            image: "../../../images/execs/2021-2022/steven-li.png",
            role: "VP Internal",
            prog: "Computer Engineering",
            year: "3rd Year",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "prem gupta": {
            title: "Prem Gupta",
            image: "../../../images/execs/placeholder.png",
            role: "VP External",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "VACANT": {
            title: "VACANT",
            image: "../../../images/execs/placeholder.png",
            prog: "",
            year: "",
            game: "",
            role: "VP Social",
            desc: "The position for VP Social is currently vacant.",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
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
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "peter karpov": {
            title: "Peter Karpov",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> DOTA 2",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "ryan farrell": {
            title: "Ryan Farrell",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Fighting Games",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "matthew awrey": {
            title: "Matthew Awrey",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Fortnite",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "narth rajeswaran": {
            title: "Narth Rajeswaran",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> League of Legends",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "brandon ly": {
            title: "Brandon Ly",
            image: "../../../images/execs/2021-2022/brandon-ly.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> osu!",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "benoit gagnier": {
            title: "Benoit Gagnier",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Overwatch",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "griffin taylor": {
            title: "Griffin Taylor",
            image: "../../../images/execs/2021-2022/griffin-taylor.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Rainbow Six Siege",
            prog: "Computer Engineering",
            year: "3",
            game: "Rainbow Six Siege, Dishonored",
            desc: "I'm Griffin, and I've been the Gamehead for R6 since 2020, and the IGL of the Garnet (A) team since 2019.",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "fabien lefebvre": {
            title: "Fabien Lefebvre",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Rocket League",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "alexander joe": {
            title: "Alexander Joe",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Super Smash Bros. Melee",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "tyler lindsay": {
            title: "Tyler Lindsay",
            image: "../../../images/execs/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Super Smash Bros. Ultimate",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
        },
        "martina on": {
            title: "Martina On",
            image: "../../../images/execs/2021-2022/martina-on.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> VALORANT",
            prog: "",
            year: "",
            game: "",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs/uottawa-aerial.jpg);"
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