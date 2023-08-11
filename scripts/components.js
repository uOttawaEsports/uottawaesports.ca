includeHTML();

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }

    let isEnglish = window.location.href.includes("/en");

    if (isEnglish) {
        document.getElementById("footer-content").innerHTML = 'Proud club of <a class="text-white" href="https://www.cvuo.ca/home/" target="_blank">CVUO</a><br />&copy; uOttawa Esports 2022';

        if (window.location.href.includes("/execs/2021-2022")) {
            document.getElementById("translate").href = '/fr/cadres/2021-2022/' // add new else if for each new exec year
        } else if (window.location.href.includes("/execs/2022-2023")) {
            document.getElementById("translate").href = '/fr/cadres/2022-2023/'
        } else if (window.location.href.includes("/execs/past")) {
            document.getElementById("translate").href = '/fr/cadres/anciens/'
        } else if (window.location.href.includes("/events")) {
            document.getElementById("translate").href = '/fr/evenements/'
        } else if (window.location.href.includes("/leaderboard")) {
            document.getElementById("translate").href = '/fr/classement/'
        } else if (window.location.href.includes("/teams")) {
            document.getElementById("translate").href = '/fr/equipes/'
        } else if (window.location.href.includes("/bourse")) {
            document.getElementById("translate").href = '/fr/bourse/'
        } else if (window.location.href.includes("/contact")) {
            document.getElementById("translate").href = '/fr/contact/'
        } else if (window.location.href.includes("/gallery")) {
            document.getElementById("translate").href = '/fr/galerie/'
        } else {
            document.getElementById("translate").href = '/fr/'
        }

    } else {
        document.getElementById("footer-content").innerHTML = 'Un club fier du <a class="text-white" href="https://www.cvuo.ca/accueil/" target="_blank">CVUO</a><br />&copy; uOttawa Esports 2022';

        if (window.location.href.includes("/cadres/2021-2022")) {
            document.getElementById("translate").href = '/en/execs/2021-2022/' // add new else if for each new exec year
        } else if (window.location.href.includes("/cadres/2022-2023")) {
            document.getElementById("translate").href = '/en/execs/2022-2023/'
        } else if (window.location.href.includes("/cadres/anciens")) {
            document.getElementById("translate").href = '/en/execs/past/'
        } else if (window.location.href.includes("/evenements")) {
            document.getElementById("translate").href = '/en/events/'
        } else if (window.location.href.includes("/classement")) {
            document.getElementById("translate").href = '/en/leaderboard/'
        } else if (window.location.href.includes("/equipes")) {
            document.getElementById("translate").href = '/en/teams/'
        } else if (window.location.href.includes("/scholarship")) {
            document.getElementById("translate").href = '/en/scholarship/'
        } else if (window.location.href.includes("/contact")) {
            document.getElementById("translate").href = '/en/contact/'
        } else if (window.location.href.includes("/galerie")) {
            document.getElementById("translate").href = '/en/gallery/'
        } else {
            document.getElementById("translate").href = '/en/'
        }
    }
}