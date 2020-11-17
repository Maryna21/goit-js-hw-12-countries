const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

function fetchCountry(countryName) {
    return fetch(BASE_URL+`${countryName}`)
      .then(response => {
		if (response.ok) {
			return response.json()
		}
		else if (response.status == 404) { 
			throw new Error('Not found') 
		};
          
    throw new Error('Error fetching data');
  })
}
export default {fetchCountry};