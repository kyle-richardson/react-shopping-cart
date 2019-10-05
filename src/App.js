import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//context
import {CartContext} from "./contexts/CartContext"
import {ProductContext} from "./contexts/ProductContext"

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<ProductContext.Provider value={{products, addItem}}>
						<Products
							// products={products}
							// addItem={addItem}
						/>
					</ProductContext.Provider>
				)}
			/>

			<Route
				path="/cart"
				render={() => {
					return (
						<CartContext.Provider value={{cart}}>
							<ShoppingCart 
								// cart={cart} 
							/>
						</CartContext.Provider>
					)
				}}
			/>
		</div>
	);
}

export default App;
