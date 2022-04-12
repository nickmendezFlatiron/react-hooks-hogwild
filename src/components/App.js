import {React, useState} from "react";
import Nav from "./Nav";
import PigList from "./PigList";
import GreaseFilter from "./GreaseFilter";

import hogs from "../porkers_data";


function App() {

	const [showPigs, setShowPigs] = useState("All")

	function handleGreaseFilter(event){
		setShowPigs(event.target.value)
		console.log(event.target.value)
	}
	return (
		<div className="App">
			<Nav />
			<GreaseFilter handleGreaseFilter={handleGreaseFilter} key={"greaseFilter"}/>
			<br></br>
			<PigList hogs={hogs} pigsFilterValue={showPigs}/>
		</div>
	);
}

export default App;
