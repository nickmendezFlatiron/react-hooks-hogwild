import {React , useState} from "react";
import PigDetails from "./PigDetails";

function PigCard({hog}){
  const {name , image} = hog;

  const [showInfo , setShowInfo] = useState(false)

  function handleShowInfo(){
    console.log(hog)
    let toggleShowInfo = !showInfo
    setShowInfo(toggleShowInfo)
  }

  let showDetails = showInfo ? <PigDetails hog={hog} /> : false ;

  return(
    <article className="pigTile ui eight wide column" onClick={handleShowInfo}>
      <h3>{name}</h3>
      <img src={image} alt={name} className="minPigTile "/>
      {showDetails}
    </article>
  )
}

export default PigCard;