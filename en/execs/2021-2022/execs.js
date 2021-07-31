function more(name) {

    let modals = {
        /* Co-Presidents */
        "jaxon-murphy": {
            title: "Jaxon Murphy",
            image: "../../../images/execs-2021-2022/jaxon-murphy.png",
            role: "Co-President",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "dhruv-kumar": {
            title: "Dhruv Kumar",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "Co-President",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        /* Execs */
        "alex-lisitsas": {
            title: "Alex Lisitsas",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "VP Finance",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "andrew-torsky": {
            title: "Andrew Torsky",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "VP Competitive",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "calvin-koehl": {
            title: "Calvin Koehl",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "VP Events",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "steven-li": {
            title: "Steven Li",
            image: "../../../images/execs-2021-2022/steven-li.png",
            role: "VP Internal",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "prem-gupta": {
            title: "Prem Gupta",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "VP External",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "VACANT": {
            title: "VACANT",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "VP Social",
            desc: "The position for VP Social is currently vacant.",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        /* Game Heads */
        "bora-basar": {
            title: "Bora Basar",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> CS:GO",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "peter-karpov": {
            title: "Peter Karpov",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> DOTA 2",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "ryan-farrell": {
            title: "Ryan Farrell",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Fighting Games",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "matthew-awrey": {
            title: "Matthew Awrey",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Fortnite",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "narth-rajeswaran": {
            title: "Narth Rajeswaran",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> League of Legends",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "brandon-ly": {
            title: "Brandon Ly",
            image: "../../../images/execs-2021-2022/brandon-ly.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> osu!",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "benoit-gagnier": {
            title: "Benoit Gagnier",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Overwatch",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "griffin-taylor": {
            title: "Griffin Taylor",
            image: "../../../images/execs-2021-2022/griffin-taylor.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Rainbow Six Siege",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "fabien-lefebvre": {
            title: "Fabien Lefebvre",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Rocket League",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "alexander-joe": {
            title: "Alexander Joe",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Super Smash Bros. Melee",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "tyler-lindsay": {
            title: "Tyler Lindsay",
            image: "../../../images/execs-2021-2022/placeholder.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> Super Smash Bros. Ultimate",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        },
        "martina-on": {
            title: "Martina On",
            image: "../../../images/execs-2021-2022/martina-on.png",
            role: "<span class='fw-bold'>Game Head</span> <br /> VALORANT",
            desc: "Hello!",
            background: "background-image: linear-gradient(#000000e5, #000000e5), url(../../../images/execs-2021-2022/uottawa-aerial.jpg);"
        }
    }

    document.getElementById("modalTitle").innerHTML = modals[name].title;
    document.getElementById("modalImage").src = modals[name].image;
    document.getElementById("modalImage").alt = modals[name].title;
    document.getElementById("modalRole").innerHTML = modals[name].role;
    document.getElementById("modalBackground").style = modals[name].background;
    document.getElementById("modalDesc").innerHTML = modals[name].desc;

}