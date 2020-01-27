import React, { Component } from "react";
import Radium from "radium";
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png';
import breakpoint from '../utils/breakpoints';

class Header extends Component {
	// TODO: CONNECT TO REDUX LATER
	state = {
		grid: false,
	}

	handleCheck = e => {
		// TODO: HANDLE CHANGE LATER
		this.setState({ grid: e.target.checked })
		console.log(e);
	}

  	render() {
		const headerStyles = {
			background: '#b1c5d4',
			paddingRight: '20px',
			height: '80px',
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'space-between',
			[breakpoint.phablet]: {
				height: '120px',
				flexFlow: 'column wrap',
			}
		}
		const logoGroupStyles = {
			height: '70px',
			[breakpoint.phablet]: {
				display: 'block',
			}
		}
		const inputStyles = {
			height: '40px',
			marginLeft: '70px',
		}
		const headerElemStyles = {
			display: 'inline-block',
		}
		const logoStyles = {
			height: '85px',	
			paddingLeft: '50px',
			paddingRight: '10px',
		}
		const titleStyle = {
			color: '#686573',
			textDecoration: 'none',
			fontSize: '35px',
			lineHeight: '80px',
			fontWeight: 'bold',
			position: 'absolute',
		}
		const textStyle = {
			...headerElemStyles,
			fontSize: '15px',
			lineHeight: '50px',
			paddingRight: '50px',
			marginLeft: '5px',
			[breakpoint.phablet]: {
				lineHeight: 0,

			}
		}
		
		return (
			<header style={headerStyles} data-test="header">
				<div style={logoGroupStyles}>
					<img style={logoStyles} src={Logo} alt="logo" data-test="logo"/>
					<NavLink to='/' style={titleStyle}>
						<label>Apps by Host</label>
					</NavLink>
				</div>
				<div style={inputStyles}>
					<input 
						style={headerElemStyles}
						type="checkbox"
						checked={this.state.grid}
						onChange={this.handleCheck} 
					/>
					<p style={textStyle}>{this.state.grid ? `Show as list` : `Show as an awesome grid`}</p>
				</div>
			</header>
		  );
	  }
};

export default Radium(Header);
