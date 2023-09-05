import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { ProductList } from "./features/product-list/ProductList";
import Homepage from "./pages/Homepage";

function App() {
	return (
		<div className="App">
			<Homepage />
		</div>
	);
}

export default App;
