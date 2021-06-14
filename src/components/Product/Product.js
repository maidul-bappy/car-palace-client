import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
const Product = (props) => {
	const { name, imageUrl, price, _id } = props.product;
	const history = useHistory();
	const handleBuyProduct = (id) => {
		const product = `/product/${id}`
		history.push(product)
	}
	return (
		
			<Card className="w-25 ml-2col-md-4 col-sm-12 mb-5">
			<Card.Img variant="top" src={imageUrl} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<p className="priceStyle">${price}</p>
				<Link to={"/product/"+_id}><Button variant="success" className="float-right" onClick={() => handleBuyProduct(_id)}>Buy Now</Button></Link>
			
			</Card.Body>
		</Card>
	);
};

export default Product;
