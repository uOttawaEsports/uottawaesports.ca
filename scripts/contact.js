var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* Validate First Name */

function validateFirst(input) {
    let label = document.getElementById("firstLabel");

    if (input.value.length == 0) {
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> First Name';
        return false;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'First Name';
        return true;
    }
}

/* Validate Last Name */

function validateLast(input) {
    let label = document.getElementById("lastLabel");

    if (input.value.length == 0) {
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Last Name';
        return false;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Last Name';
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
        document.getElementById('emailTooltip').setAttribute('title', 'Invalid email address. Format: example@domain.com Example: adam@hotmail.com');
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Invalid email address. Format: example@domain.com Example: adam@hotmail.com');
        return false;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Email Address';
        document.getElementById('emailTooltip').setAttribute('title', 'Email Address');
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Email Address');
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
        document.getElementById('subjectTooltip').setAttribute('title', 'Enter the subject. Example: Discord role change');
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Enter the subject. Example: Discord role change');
        return false;
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Subject';
        document.getElementById('subjectTooltip').setAttribute('title', 'Enter the subject.');
        document.getElementById('subjectTooltip').setAttribute('data-bs-original-title', 'Enter the subject.');
        return true;
    }
}

/* Validate First Name */

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
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let language = document.getElementById("language");
    let type = document.getElementById("type");
    let subject = document.getElementById("subject");
    let ccName = document.getElementById("cardName");
    let ccNumber = document.getElementById("ccNumber");
    let ccExpiry = document.getElementById("ccExpiry");
    let ccCVV = document.getElementById("ccCVV");
    let valid = true;

    if (!validateFirst(firstName)) {
        valid = false;
    }
    if (!validateLast(lastName)) {
        valid = false;
    }
    if (!validateEmail(email)) {
        valid = false;
    }
    if (!validatePhone(phone)) {
        valid = false;
    }
    if (!validateLanguage(language)) {
        valid = false;
    }
    if (!validateType(type)) {
        valid = false;
    }
    if (!validateSubject(subject)) {
        valid = false;
    }
    if (!validateName(ccName)) {
        valid = false;
    }
    if (!validateCCNumber(ccNumber)) {
        valid = false;
    }
    if (!validateExpiry(ccExpiry)) {
        valid = false;
    }
    if (!validateCVV(ccCVV)) {
        valid = false;
    }

    if (valid) {
        document.getElementById("submitted").click();
    }

}