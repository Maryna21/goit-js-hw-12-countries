import countryCardsTpl from '../templates/country-cards.hbs';
import API from './api-service';
import getRefs from './get-refs';
const debounce = require('lodash.debounce');
import { alert, defaultModules } from '@pnotify/core';

const refs = getRefs();
refs.searchForm.addEventListener('input', debounce(onSearch, 300));

function onSearch(e) {
    e.preventDefault();
    const searchQuery = e.target.value;
    console.log(searchQuery);

    API.fetchCountry(searchQuery)
        .then(renderCountryCard)
        .catch(onFetchError)
        .finally(clearResult);
}

function renderCountryCard (country){
    const markup = countryCardsTpl(country[0]);
    if (country.length === 1) {
     refs.cardContainer.innerHTML = markup;   
    }
    if (country.length >= 2 && country.length <= 10) {
        console.log('Вот список до 10 стран');
    }
    if (country.length > 10) {
        console.log('to much');
    }
}

function onFetchError() {
    alert('Щось пішло не так! ')
}
function clearResult() {
        refs.searchForm.value = '';
        refs.cardContainer.innerHTML = '';
}