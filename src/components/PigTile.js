import React from "react";

function PigTile({hogs}){

  let allPigTiles = hogs.map(hog=>{
    const {name , specialty, weight , greased , image } = hog
    return (<div className="pigTile ui eight wide column">
      <image src={image} alt={name} />
      <h3>{name}</h3>
    </div>)
  })

  return(
  <div className="ui grid container">
   {allPigTiles}
  </div>)
}

export default PigTile;