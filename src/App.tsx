import React from "react";
import "./App.css";
import { SignUp } from "./pages/SignUp";
import { Content } from "./components/Content";

function App() {
	return (
		<div className="App">
			<div className="main">
				<Content />
				<SignUp />
			</div>
		</div>
	);
}

export default App;
