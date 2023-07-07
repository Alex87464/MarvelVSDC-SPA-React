/* eslint-disable react/prop-types */
import { getHeroesByPublisher } from "../helpers";



// This component return a list of heroes calling the ./helper -> getHeroesByPublisher.js
export const HeroList = ({ publisher }) => {
    // This `heroes` take the value of a heroes list filtered by the function getHeroes... and it takes the 
    // `publisher` parameter received by this component (also this component receives the value from the DcPage/MarvelPage component)
    const heroes = getHeroesByPublisher( publisher );

    return (
        <ul>
            {
                // Here the <li> items get the value of 'heroe.superhero' from my heroes in line 10 (previously filtered)
                heroes.map( heroe => (
                    <li key={heroe.id}>
                        {heroe.superhero}
                    </li>
                ))
            }
        </ul>
    )
}

