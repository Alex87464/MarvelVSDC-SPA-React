import { heroes } from '../data/heroes';

// This function get the heroes filtered by their publisher
export const getHeroesByPublisher = ( publisher ) => {
    // Only 'DC Comics' & 'Marvel Comics' will be valid publishers
    const validPublishers = ['DC Comics', 'Marvel Comics'];

    // If the (publisher) received is not `validPublishers = ['DC Comics', 'Marvel Comics']` 
    // will return an error `{x} is not a valid publisher`
    if( !validPublishers.includes( publisher ) ) {
        throw new Error(`${publisher} is not a valid publisher`)
    }

    // Else return the list of heroes filtered by the publisher receiver per parameter
    return heroes.filter( heroe => heroe.publisher === publisher );

}