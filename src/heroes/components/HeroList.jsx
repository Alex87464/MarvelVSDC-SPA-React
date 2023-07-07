import { getHeroesByPublisher } from "../helpers";



// eslint-disable-next-line react/prop-types
export const HeroList = ({ publisher }) => {
    
    const heroes = getHeroesByPublisher( publisher );

    return (
        <ul>
            {
                heroes.map( heroe => (
                    <li key={heroe.id}>
                        {heroe.superhero}
                    </li>
                ))
            }
        </ul>
    )
}

