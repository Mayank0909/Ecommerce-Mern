import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { ProductList } from "./features/product-list/components/ProductList";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { Cart } from "./features/cart/Cart";
import Cartpage from "./pages/Cartpage";
import Checkout from "./pages/Checkout";
import ProductDetails from "./features/product-list/components/ProductDetails";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Homepage />,
	},
	{
		path: "login",
		element: <LoginPage />,
	},
	{
		path: "signup",
		element: <SignupPage />,
	},
	{
		path: "cart",
		element: <Cartpage />,
	},
	{
		path: "Checkout",
		element: <Checkout />,
	},
	{
		path: "productinfo",
		element: <ProductDetailPage />,
	},
]);
function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
