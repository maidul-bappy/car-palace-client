import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const ProductDetail = () => {
	const { id } = useParams()
	const [product, setProduct] = useState({});
	useEffect(() => {
		fetch('https://fierce-temple-37935.herokuapp.com/cars/'+id)
			.then(res => res.json())
			.then(data => {
				setProduct(data);
			})
	}, [id])
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const handlePlaceOrder = () => {
		const orderDetails = {
			...loggedInUser, ...product, quantity: 1, orderTime: new Date()
		}
		fetch('https://fierce-temple-37935.herokuapp.com/addOrder',{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(orderDetails)
		})
		.then(res => res.json())
		.then(data => {
			if (data){
				alert('Your order place successfully')
			}
		})
	}
	return (
		<div>
			<h2 className="mt-4">Checkout</h2>
			<Table striped bordered hover className="mt-4">
				<thead>
					<tr>
						<th>Description</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{product.name}</td>
						<td>1</td>
						<td>{product.price}</td>
					</tr>
				</tbody>
			</Table>
			<button className="btn btn-primary float-right mt-5" onClick={handlePlaceOrder}>Checkout</button>
		</div>
	);
};

export default ProductDetail;
