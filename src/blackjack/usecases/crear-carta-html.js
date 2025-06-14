
/**
 * Esta funcion crea la imgane de la carta y la inserta en el html del jugador correspondiente 
 * @param {String} carta  
 * @returns {HTMLImageElement} Elemento HTML que retorna la funcion 
 */

export const crearCartaHtml = ( carta ) => {
    if ( !carta ) throw new Error( "carta es requerido para la funcion " ); 
    const imgCarta = document.createElement('img');
    imgCarta.src = `../public/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}