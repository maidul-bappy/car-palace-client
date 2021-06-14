import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const Orders = () => {
	const [orders, setOrders] = useState([])
	fetch('https://fierce-temple-37935.herokuapp.com/orders')
		.then(res => res.json())
		.then(data => {
			setOrders(data)
		}, [])
	return (
		<div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Time</th>
						<th>Email</th>
					</tr>
				</thead>
				{orders.map(order => <tbody>
					<tr>
						<td>{order.name}</td>
						<td>{order.quantity}</td>
						<td>${order.price}</td>
						<td>{order.orderTime}</td>
						<td>{order.email}</td>
					</tr>
				</tbody>)}
				</Table>
		</div>
	);
};

export default Orders;
