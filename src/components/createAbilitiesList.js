// Create abilities
const createAbilitiesList = (abilities) => {
    const ul = document.createElement('ul');
    ul.id = 'ability-list';

    abilities.forEach((ability) => {
        let abilitiesLi = document.createElement('li');
        abilitiesLi.innerText = ability.ability.name;
        ul.appendChild(abilitiesLi);
    });

    return ul;
};

export default createAbilitiesList;
