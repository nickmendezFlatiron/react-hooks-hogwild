import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigTile from "./PigTile";



function App() {
	return (
		<div className="App">
			<Nav />
			<PigTile hogs={hogs}/>
		</div>
	);
}

export default App;
