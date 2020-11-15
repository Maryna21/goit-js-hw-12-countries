const BASE_URL = 'https://restcountri.eu/rest/v2/';

function fetchCountry(searchQuery) {
    return fetch(`${BASE_URL}name/${searchQuery}`)
        .then(response => {
    if (response.ok) return response.json();
    if (response.status == 404) throw new Error('Not found');
    throw new Error('Error fetching data');
  })
}
export default {fetchCountry};