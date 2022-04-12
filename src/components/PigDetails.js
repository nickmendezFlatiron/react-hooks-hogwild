import React from "react";

function PigDetails({hog}){
  const { specialty , greased , weight } = hog;
 return(
   <ul>
     <li>Specialty: {specialty}</li>
     <li>Greased: {greased ? "Yes" : "No" }</li>
     <li>Weight: {weight} </li>
     <li>Highest Medal Achieved: {hog["highest medal achieved"]} </li>
   </ul>
 )
}
export default PigDetails