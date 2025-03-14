'use strict'

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (info, className = '') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${info.flags.svg}" alt="${info.flags.svg}"/>
    <div class="country__data">
        <h3 class="country__name">${info.name.common}</h3>
        <h4 class="country__region">${info.region}</h4>
        <p class="country__row"><span>👫</span>${(+info.population / 1000000).toFixed(1)}</p>
        <p class="country__row">Capital:<span>${info.capital}</span></p>
        <p class="country__row"><span>💰</span>${Object.keys(info.currencies)}</p>
    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryData = function (country) {
    const request = fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(function (res) {
            return res.json()
        })
        .then(function ([data]) {
            renderCountry(data)
            const [neighbour] = data.borders
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        }).then(function (data) {
            return data.json()
        }).then(function ([neighbour]) {
            renderCountry(neighbour, 'neighbour')
        })
}
btn.addEventListener('click', function () {
    getCountryData('uzbekistan')
})