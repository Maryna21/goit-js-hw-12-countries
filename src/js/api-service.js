const BASE_URL = 'https://restcountri.eu/rest/v2/';

function fetchCountry(countryName) {
    return fetch(`${BASE_URL}name/${countryName}`)
      .then(response => {
        console.log(response);
    if (response.ok) {response.json()};
          if (response.status == 404) { throw new Error('Not found') };
          
    throw new Error('Error fetching data');
  })
}
export default {fetchCountry};