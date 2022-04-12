import React from "react";
import PigCard from "./PigCard";

function PigList({hogs , pigsFilterValue}){
  

  const filteredList = hogs.filter(hog => {
      let pigBool = hog.greased ? "greased" : "not greased" ;
      if(pigsFilterValue === "All") {
        return true
      } return (pigBool === pigsFilterValue)
    }
  )

  const pigsToRender = pigsFilterValue === "All" ? hogs : filteredList ;


  const listOfPigs = pigsToRender.map(hog =>{
    return <PigCard hog={hog} key={hog.name}/>
  })


  return(<div className="ui grid container">
    {listOfPigs}
  </div>)
}

export default PigList