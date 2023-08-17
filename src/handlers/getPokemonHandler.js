import dom from '../dom.js';
import getPokemonById from '../../apis/getPokemonById.js';
import createPokemon from '../components/createPokemon.js';

const getPokemonHandler = async () => {
    dom.root.innerHTML = ''; // Clear the root content
    dom.error.innerText = ''; // Clear error message

    const userInput = dom.searchBar.value;

    if (!userInput) {
        displayErrorMessage("Please write IDs separated with ','");
        return;
    }

    const idArray = userInput
        .split(',')
        .map((id) => id.trim())
        .filter((id) => isValidId(id));

    if (idArray.length === 0) {
        displayErrorMessage('Please write correct IDs');
        return;
    }

    const uniqueIds = [...new Set(idArray)];

    const pokemonDataArray = await fetchPokemonData(uniqueIds);

    pokemonDataArray.forEach((pokemonData) => {
        const pokemonDom = createPokemon(pokemonData);
        dom.root.append(pokemonDom);
    });
};

const isValidId = (id) => {
    const parsedId = parseInt(id);
    return !isNaN(parsedId) && parsedId > 0 && parsedId < 1000;
};

const fetchPokemonData = async (ids) => {
    const pokemonPromises = ids.map((id) => getPokemonById(id));
    return await Promise.all(pokemonPromises);
};

const displayErrorMessage = (message) => {
    dom.error.innerText = message;
    dom.root.append(dom.error);
};

export default getPokemonHandler;
