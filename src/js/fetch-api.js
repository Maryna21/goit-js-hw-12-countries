import countryCardsTpl from '../templates/country-cards.hbs';
import contriesTpl from '../templates/contries-list.hbs';
import API from './api-service';
import getRefs from './get-refs';
const debounce = require('lodash.debounce');
import { alert, defaultModules } from '@pnotify/core';

const refs = getRefs();
refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault();
    const searchQuery = e.target.value;
    console.log(searchQuery);

    API.fetchCountry(searchQuery)
        .then(renderCountryCard)
        .catch(onFetchError);
}

function renderCountryCard (country){
	 clearResult();
    const markup = countryCardsTpl(country);
    const markupList = contriesTpl(country);
 


    if (country.length === 1) {
     refs.cardContainer.innerHTML = markup;   
    }
    else if (country.length >= 2 && country.length <= 10) {
        console.log('Вот список до 10 стран');
        refs.contriesContainer.innerHTML = markupList;
    }
    else if (country.length > 10) {
        alert('Too many matches found. Please enter a more specific quary!');
    }
    
}

function onFetchError() {
    alert('Щось пішло не так! ')
}
function clearResult() {
        refs.cardContainer.innerHTML = '';
}
