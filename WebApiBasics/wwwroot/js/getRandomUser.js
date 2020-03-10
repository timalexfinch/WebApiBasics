'use strict';

//function getRandomUserFetch() {
const getRandomUserFetch = () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => gotUser(json.results))
        .catch(error => console.error('fetch failed: ', error));
};

//async function getRandomUserAwait() {
const getRandomUserAwait = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        gotUser((await response.json()).results);      
    }
    catch (error) {
        console.error('await failed: ', error);
    }
};

document.querySelector("#btnGetRandomUserFetch").addEventListener("click", getRandomUserFetch);
document.querySelector("#btnGetRandomUserAwait").addEventListener("click", getRandomUserAwait);

const gotUser = (user) => {
    const thisUser = user[0];

    document.getElementById('randomUser').innerHTML =

        '<img id=userPicture src=' + thisUser.picture.large + ' /><br /><br />' +
        thisUser.name.title + ' ' +
        thisUser.name.first + ' ' +
        thisUser.name.last + '<br />' +
        thisUser.location.street.number + ' ' +
        thisUser.location.street.name + '<br />' +
        thisUser.location.city + '<br />' +
        thisUser.nat + '<br />' +
        thisUser.email + '<br />' +
        'Username: ' +
        thisUser.login.username + '<br /><br />';
};