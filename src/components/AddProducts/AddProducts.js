import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');

const AddProducts = () => {
	const { register, handleSubmit} = useForm();
	const [imageUrl, setImage] = useState(null)
	const onSubmit = data => {
		const productData = {
			name: data.name,
			quantity: data.quantity,
			price: data.price,
			imageUrl: imageUrl
		}
		fetch('https://fierce-temple-37935.herokuapp.com/addCar', {
			method: 'POST',
			headers: { 'Content-Type': 'Application/json' },
			body: JSON.stringify(productData)
		})
		.then(res=>console.log('server side respons', res))
	};
	const handleImageChange = e => {
		const imageData = new FormData();
		imageData.set('key', 'e0a26cfac748512401ad02aa421e485f')
		imageData.append('image', e.target.files[0])
		axios.post('https://api.imgbb.com/1/upload', imageData)
			.then(function (response) {
				setImage(response.data.data.display_url)
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div>
			 <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control mb-3" placeholder='Car Name' defaultValue="New Car" name="name" {...register("name")} />
                <input className="form-control mb-3" placeholder='Car Price' name="name" {...register("price")} />
                <input className="form-control mb-3" placeholder='Quantity' name="name" {...register("quantity")} />
                <input  className="form-control mb-3" type='file' onChange={handleImageChange} />
                <input  className="btn btn-info"type="submit" />
            </form>
		</div>
	);
};

export default AddProducts;
