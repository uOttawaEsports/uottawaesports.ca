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
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Name';
        return true;
    }
}

/* Validate Discord */

function validateDiscord(input) {
    let label = document.getElementById("discordLabel");
    const di = new RegExp("^.{3,32}#[0-9]{4}$");

    if (!di.test(input.value)) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Discord&nbsp;Username';
        document.getElementById('discordTooltip').setAttribute('data-bs-original-title', 'Invalid Discord username. Format: Example#1234');
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Discord&nbsp;Username';
        document.getElementById('discordTooltip').setAttribute('data-bs-original-title', 'Enter your Discord username.');
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
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Invalid email address. Format: example@domain.com');
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i> Email&nbsp;Address';
        document.getElementById('discordTooltip').setAttribute('data-bs-original-title', 'Enter your email address.');
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
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Contact&nbsp;Reason';
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
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Enter the subject. Example: Discord role change');
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.innerHTML = '<i class="fas fa-check-circle px-1 text-success"></i>  Subject';
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Enter the subject.');
        return true;
    }
}

/* Validate Message */

function validateMessage(input) {
    let label = document.getElementById("message");

    if (input.value.length == 0) {
        input.classList.remove("valid");
        input.classList.add("error");
        label.placeholder = 'Please tell us how we can help you!';
        return false;
    } else {
        input.classList.remove("error");
        input.classList.add("valid");
        label.placeholder = 'How can we help you?';
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

    if (valid) {
        document.getElementById("submitted").click();
    }

}