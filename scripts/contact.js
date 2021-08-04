var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* Validate Name */

function validateName(input) {
    let label = document.getElementById("nameLabel");

    if (input.value.length == 0) {
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Name';
        return false;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Name';
        return true;
    }
}

/* Validate Email */

function validateEmail(input) {
    let label = document.getElementById("emailLabel");
    const em = new RegExp("[\\w\\-\\.]+@[a-zA-Z0-9]+\\.[[a-zA-Z]+");

    if (!em.test(input.value)) {
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Email Address';
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Invalid email address. Format: example@domain.com');
        return false;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Email Address';
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Enter your email address.');
        return true;
    }
}

/* Validate Type */

function validateType(input) {
    let label = document.getElementById("typeLabel");

    if (input.value.length == 0) {
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Enquiry&nbsp;Type';
        return false;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Enquiry&nbsp;Type';
        return true;
    }
}

/* Validate Subject */

function validateSubject(input) {
    let label = document.getElementById("subjectLabel");

    if (input.value.length == 0) {
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Subject';
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Enter the subject. Example: Discord role change');
        return false;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Subject';
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Enter the subject.');
        return true;
    }
}

/* Validate Message */

function validateMessage(input) {
    let label = document.getElementById("message");

    if (input.value.length == 0) {
        input.classList.add("error");
        label.placeholder = 'Please tell us how we can help you!';
        return false;
    } else {
        input.classList.remove("error");
        label.placeholder = 'How can we help you?';
        return true;
    }
}

function validate() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let type = document.getElementById("type");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    let valid = true;

    if (!validateName(name)) {
        valid = false;
    }
    if (!validateEmail(email)) {
        valid = false;
    }
    if (!validateType(type)) {
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