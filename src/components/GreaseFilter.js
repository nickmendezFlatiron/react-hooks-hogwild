import React from "react";

function GreaseFilter({handleGreaseFilter}){

return(
<div>
  <label for="greaseFilter">Pigs </label>
  <select name="greaseFilter" id="greaseFilter" onChange={(event) => handleGreaseFilter(event)}>
  <option value="All">All</option>
    <option value="greased" >Greased</option>
    <option value="not greased">Not Greased</option>
  </select>
</div>
  
)
}

export default GreaseFilter;