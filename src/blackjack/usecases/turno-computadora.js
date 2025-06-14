import { pedirCarta, valorCarta, crearCartaHtml  } from './';


/**
 * 
 * @param {Number} puntosMinimos Estos serian los puntos minimos que la computadora necesitaria superar para ganar
 * @param {Array} deck Este es el deck desde donde la computadora tomara sus cartas 
 * @param {HTMLElement} puntosHTML es el elemento html donde se visualizaran los puntos de la computadora 
 * @param {HTMLElement} divCartasComputadora Este elemento es donde se visualizaran las cartas que la computadora saco del deck
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
    if ( !puntosMinimos ) throw new Error( "puntosMinimos es requerido" ); 
    if ( !puntosHTML ) throw new Error( "puntosHTML es requerido" ); 
    
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        //TODO: CREAR CARTA
        const imgCarta = crearCartaHtml( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}