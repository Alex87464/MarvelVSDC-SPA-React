import { HeroList } from "../components"


export const MarvelPage = () => {
  return (
    <>
      <h1>Marvel Comics</h1>
      <hr/>
      
      {/* Here I call the component '<HeroList/> and give it the publisher parameter `publisher={'Marvel Comics'}`*/}
      <HeroList publisher={'Marvel Comics'} />

    </>
  )
}
