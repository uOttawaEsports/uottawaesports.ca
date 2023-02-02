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
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Name';
        document.getElementById('nameTooltip').setAttribute('data-bs-original-title', 'Please enter your name. This way, we can address you properly.');
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Name';
        document.getElementById('nameTooltip').setAttribute('data-bs-original-title', 'Enter your name. This way, we can address you properly.');
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
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Discord&nbsp;Username';
        document.getElementById('discordTooltip').setAttribute('data-bs-original-title', 'Invalid Discord username. Format: Example#1234');
        return false;
    } else if (input.value.length !== 0) {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Discord&nbsp;Username';
        document.getElementById('discordTooltip').setAttribute('data-bs-original-title', 'Enter your Discord username. (Optional)');
        return true;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Discord&nbsp;Username';
        document.getElementById('discordTooltip').setAttribute('data-bs-original-title', 'Enter your Discord username. (Optional)');
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
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Email&nbsp;Address';
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Invalid email address. We will reply to your message through the provided email address. Format: example@domain.com');
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i> Email&nbsp;Address';
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Enter your email address. We will reply to your message through the provided email address.');
        return true;
    }
}

/* Validate Reason */

function validateReason(input) {
    let label = document.getElementById("reasonLabel");

    if (input.value.length == 0) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Contact&nbsp;Reason';
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i> Contact&nbsp;Reason';
        return true;
    }
}

/* Validate Subject */

function validateSubject(input) {
    let label = document.getElementById("subjectLabel");

    if (input.value.length == 0) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Subject';
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Please enter the subject of your message. Example: Discord role change');
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Subject';
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Enter the subject of your message.');
        return true;
    }
}

/* Validate Message */

function validateMessage(input) {
    let label = document.getElementById("message");

    if (input.value.length == 0) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.placeholder = 'Please tell us how we can make your day better!';
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.placeholder = 'How can we make your day better?';
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