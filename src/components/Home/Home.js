import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Spinner } from 'react-bootstrap';
const Home = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch('https://fierce-temple-37935.herokuapp.com/cars')
			.then(res => res.json())
			.then(data => {
				setProducts(data);
				setLoading(false);
			})
	},[])
	return (
		<div className="row">
			{ loading ?  <div className="d-flex justify-content-center align-items-center"><Spinner animation="border" variant="primary" /></div> :
				products.map(product => <Product product={product}></Product>)
			}
		</div>
	);
};
export default Home;
