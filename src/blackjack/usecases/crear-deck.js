
import _ from 'underscore';
/**
 * Esto basicamente es un comentario que esta describiendo lo que hace y debe recibir la funcion como parametros
 * @param {Array <String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array <String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array <String>} retorna un nuevo deck de cartas
 */ 
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {
    //* En este caso la palabra export es necesaria porque esta funcion la vamos a importar desde el index
    if ( !tiposDeCarta ) throw new Error( "Tipos de carta es obligatorio" );
    if ( tiposDeCarta.length === 0 ) throw new Error( "Tipos de carta es un arreglo de String de al menos 4 letras" );
    if ( !tiposEspeciales ) throw new Error( "Tipos especiales de carta es obligatorio" );
    if ( tiposEspeciales.length === 0 ) throw new Error( "Tipos especiales de carta es un arreglo de String de al menos 4 letras" );
    
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}

export default crearDeck;
//* El export default nos sirve para que siempre que llamemos a nuestro modulo de crear-deck.js, 
//* lo que se exporte por defecto sea la funcion de crearDeck