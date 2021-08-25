let english = {
    1: 'For urgent enquiries, reach out to us on our <a href="https://discord.gg/uAbd5uRTCA" target="_blank">Discord</a>.',
    2: 'Please allow up to five (5) business days for a response through our contact form.',
    3: 'uOttawa Esports logo',
    4: 'Contact Form',
    5: 'Required',
    6: 'Send Message',
}

let french = {
    1: 'Pour les demandes urgentes, contactez-nous sur notre <a href="https://discord.gg/uAbd5uRTCA" target="_blank">Discord</a>.',
    2: 'Veuillez prévoir jusqu\'à cinq (5) jours ouvrables pour une réponse via notre formulaire de contact.',
    3: 'Logo de uOttawa Esports',
    4: 'Formulaire de contact',
    5: 'Requis',
    6: 'Envoyer le message',
}

function translate() {
    if (window.location.href.includes("/en")) {
        for (let i = 1; i <= Object.keys(english).length; i++) {
            document.getElementById(String(i)).innerHTML = english[i];
        }
    } else {
        for (let i = 1; i <= Object.keys(french).length; i++) {
            document.getElementById(String(i)).innerHTML = french[i];
        }
    }
}