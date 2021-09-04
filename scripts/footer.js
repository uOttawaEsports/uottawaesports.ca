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
        document.getElementById("footer-content").innerHTML = 'Proud club of <a class="text-white" href="https://www.cvuo.ca/home/" target="_blank">CVUO</a><br />&copy; uOttawa Esports 2021';
    } else {
        document.getElementById("footer-content").innerHTML = 'Un club fier du <a class="text-white" href="https://www.cvuo.ca/accueil/" target="_blank">CVUO</a><br />&copy; uOttawa Esports 2021';
    }
}