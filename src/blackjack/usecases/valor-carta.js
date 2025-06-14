
/**
 * Esta funcion toma la carta en formato de String y en base a ello genera un substring, el cual siempre sera desde el primer elemento
 * del string hasta el penultimo, siempre ignorara el ultimo elemento, en resumen siempre tomara solo los numeros que contiene el String
 * 
 * @param {String} carta Ejemplo: "2H"
 * @returns {Number} Ejemplo: 2
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

export default valorCarta;