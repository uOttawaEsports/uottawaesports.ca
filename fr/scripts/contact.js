/* Tooltip JavaScript */

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* Validate Name */

function validateName(input) {
    let label = document.getElementById("nameLabel");

    if (input.value.length == 0) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Nom';
        document.getElementById('nameTooltip').setAttribute('data-bs-original-title', 'Veuillez entrer votre nom pour qu\'on puisse vous adresser proprement.');
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Nom';
        document.getElementById('nameTooltip').setAttribute('data-bs-original-title', 'Entrez votre nom pour qu\'on puisse vous adresser proprement.');
        return true;
    }
}

/* Validate Discord */

function validateDiscord(input) {
    let label = document.getElementById("discordLabel");
    const di = new RegExp("^.{3,32}#[0-9]{4}$");

    if (!di.test(input.value) && input.value.length !== 0) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Nom&nbsp;d&rsquo;utilisateur&nbsp;Discord';
        document.getElementById('discordTooltip').setAttribute('data-bs-original-title', 'Nom d\'utilisateur Discord non valide. Format : Exemple#1234');
        return false;
    } else if (input.value.length !== 0) {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Nom&nbsp;d&rsquo;utilisateur&nbsp;Discord';
        document.getElementById('discordTooltip').setAttribute('data-bs-original-title', 'Entrez votre nom d\'utilisateur Discord. (Facultatif)');
        return true;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Nom&nbsp;d&rsquo;utilisateur&nbsp;Discord';
        document.getElementById('discordTooltip').setAttribute('data-bs-original-title', 'Entrez votre nom d\'utilisateur Discord. (Facultatif)');
        return true;
    }
}

/* Validate Email */

function validateEmail(input) {
    let label = document.getElementById("emailLabel");
    const em = new RegExp("[\\w\\-\\.]+@[a-zA-Z0-9]+\\.[[a-zA-Z]+");

    if (!em.test(input.value)) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Courriel';
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Courriel non valide. Nous répondrons à votre message par l\'intermédiaire du courriel fournie. Format : exemple@domaine.com');
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i> Courriel';
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Entrez votre courriel. Nous répondrons à votre message par l\'intermédiaire du courriel fournie.');
        return true;
    }
}

/* Validate Reason */

function validateReason(input) {
    let label = document.getElementById("reasonLabel");

    if (input.value.length == 0) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Motif&nbsp;de&nbsp;contact';
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i> Motif&nbsp;de&nbsp;contact';
        return true;
    }
}

/* Validate Subject */

function validateSubject(input) {
    let label = document.getElementById("subjectLabel");

    if (input.value.length == 0) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Objet';
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Veuillez entrer l\'objet de votre message. Exemple : Changement de rôle sur Discord');
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Objet';
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Entrez l\'objet de votre message.');
        return true;
    }
}

/* Validate Message */

function validateMessage(input) {
    let label = document.getElementById("message");

    if (input.value.length == 0) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.placeholder = 'Dites-nous comment nous pouvons améliorer votre journée !';
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.placeholder = 'Comment pouvons-nous améliorer votre journée ?';
        return true;
    }
}

function validate() {
    let name = document.getElementById("name");
    let discord = document.getElementById("discord");
    let email = document.getElementById("email");
    let reason = document.getElementById("reason");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    let valid = true;

    if (!validateName(name)) {
        valid = false;
    }
    if (!validateDiscord(discord)) {
        valid = false;
    }
    if (!validateEmail(email)) {
        valid = false;
    }
    if (!validateReason(reason)) {
        valid = false;
    }
    if (!validateSubject(subject)) {
        valid = false;
    }
    if (!validateMessage(message)) {
        valid = false;
    }
}