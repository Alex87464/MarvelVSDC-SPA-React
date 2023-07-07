/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { HeroCard } from "./";
import { getHeroesByPublisher } from "../helpers";



// This component return a list of heroes calling the ./helper -> getHeroesByPublisher.js
export const HeroList = ({ publisher }) => {
    // This `heroes` take the value of a heroes list filtered by the function getHeroes... and it takes the 
    // `publisher` parameter received by this component (also this component receives the value from the DcPage/MarvelPage component)
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                // Here the <li> items get the value of 'heroe.superhero' from my heroes in line 10 (previously filtered)
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}

