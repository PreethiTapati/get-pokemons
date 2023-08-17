import createAbilitiesList from './createAbilitiesList.js';

const createPokemon = (pokemonData) => {
    // container
    console.log(pokemonData);
    const container = document.createElement('div');
    container.className = 'pokemon-container';
    container.id = 'container';

    // Create h2 for pokemon name
    const title = document.createElement('h2');
    title.innerText = pokemonData.name;
    title.id = 'name';

    // Create img for pokemon image
    const image = document.createElement('img');
    image.src = pokemonData.sprites.front_default;
    image.alt = `${pokemonData.name} Image`;
    image.id = 'img';

    // Create h3 for the abilities
    const abilitiesHeader = document.createElement('h3');
    abilitiesHeader.innerText = 'Abilities:';
    const abilitiesList = createAbilitiesList(pokemonData.abilities);

    container.append(title, image, abilitiesHeader, abilitiesList);
    return container;
};

export default createPokemon;
