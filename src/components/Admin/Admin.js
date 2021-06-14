import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faBars } from '@fortawesome/free-solid-svg-icons'
import AddProducts from './../AddProducts/AddProducts';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
	const styles = {
		listStyleType: 'none',
		textAlign: 'center',
		marginTop: '30px'
	}
	return (
		<div>
			<Router>
				<div>
					<ul style={styles}>
						<li>
							<Link to="/addProducts">  <FontAwesomeIcon icon={faPlusSquare} /> Add Products</Link>
						</li>
						<li>
							<Link to="/manageProduct"> <FontAwesomeIcon icon={faBars} /> Manage Products</Link>
						</li>
					</ul>
					<hr />
					<Switch>
						<Route path="/addProducts">
							<AddProducts />
						</Route>
						<Route path="/manageProduct">
							<ManageProduct></ManageProduct>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>

	);
};

export default Admin;
