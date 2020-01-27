import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png';

const Navbar = () => {
  	return (
		<nav className="navbar" data-test="navbar">
			<div>
				<ul>
					<li><img src={Logo} alt="logo" data-test="logo"/></li>
					<li>
						<NavLink to="/">Homepage</NavLink>
					</li>
				</ul>
			</div>
		</nav>
  	);
};

export default Navbar;
