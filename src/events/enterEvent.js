import dom from '../dom.js';
import getPokemonHandler from '../handlers/getPokemonHandler.js';

const enterEvent = () => {
    dom.searchBar.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            getPokemonHandler();
        }
    });
};

export default enterEvent;
