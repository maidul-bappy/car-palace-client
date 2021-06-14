import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageProduct = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('https://fierce-temple-37935.herokuapp.com/cars')
			.then(res => res.json())
			.then(data => {
				setProducts(data);
			})
	}, [])
	const deleteProduct = (id, event) => {
		fetch(`https://fierce-temple-37935.herokuapp.com/delete/${id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(result => {
				console.log('deleted successfully', result);
				if (result) {
					event.target.parentNode.style.display = 'none';
				}
			})
			.catch(err => {
				console.log("somvob na");
			})
	}
	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				{
					products.map(product => <tbody>
						<tr>
							<td>{product.name}</td>
							<td>{product.quantity}</td>
							<td>{product.price}</td>
							<td> <Button variant="danger" onClick={() => deleteProduct(product._id)}>Delete</Button></td>
						</tr>
					</tbody>)
				}
			</Table>
		</div>
	);
};

export default ManageProduct;
