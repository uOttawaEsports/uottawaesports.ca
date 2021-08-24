let english = {
    1: 'uOttawa Esports',
    2: 'Welcome to the official website of uOttawa Esports!',
    3: 'Upcoming Events',
    4: 'Check out the calendar for upcoming events happening at uOttawa Esports! For a full detailed list of events, visit our <a href="/en/events/">Events</a> page.',
    5: 'About Us',
    6: 'Welcome to uOttawa Esports, your home for esports on and off of campus. Join us for both casual and competitive gaming at the University of Ottawa! The competitive teams that we offer are listed with their respective contact(s) on the <a href="/en/teams/">Teams</a> page.',
    7: 'A Community for All',
    8: 'Not only do we offer a competitive environment for the competitive gamer, but also a friendly and safe environment for anyone wanting to pick up a new game, to find players to play with, or even to get away from the books!',
    9: 'Campus Vibez uOttawa',
    10: 'The gamers at uOttawa Esports would like to extend a thank you to our sponsors and funding groups including <a href="https://www.cvuo.ca/home" target="_blank">Campus Vibez uOttawa (CVUO)</a>.'
}

let french = {
    1: 'uOttawa Esports',
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