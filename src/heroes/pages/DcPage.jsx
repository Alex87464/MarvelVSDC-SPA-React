import { HeroList } from "../components"



export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr/>

    {/* Here I call the component '<HeroList/> and give it the publisher parameter `publisher={'DC Comics'}`*/}
    <HeroList publisher={'DC Comics'} />

    </>
  )
}
