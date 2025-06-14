
/**
 * Esta funcion toma el deck ya creado y revuleto y toma una carta, en concreto la ultima carta de este Array de cartas
 * @param {Array <String>} deck Ejemplo: ["2D", "8H", "JS", "KC", "2C"]
 * @returns {String} Ejemplo: 2D
 */
export const pedirCarta = ( deck ) => { 

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

export default pedirCarta;