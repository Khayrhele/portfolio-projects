import presentDrinks from './src/presentDrinks.js';
const URL = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=a';

import './src/searchForm.js';

window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});
