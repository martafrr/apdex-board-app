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
			width: '100%',
			height: '80px',
			[breakpoint.phablet]: {
				height: '200px',
			}
		}
		const leftGroupStyles = {
			float: 'left',
		}
		const rightGroupStyles = {
			float: 'right',
			// TODO responsive behaviour
			
		}
		const headerElemStyles = {
			display: 'inline-block',
		}
		const logoStyles = {
			height: '80px',	
			paddingLeft: '50px',
		}
		const titleStyle = {
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
		}

		return (
			<header style={headerStyles} data-test="header">
				<div style={leftGroupStyles}>
					<img style={logoStyles} src={Logo} alt="logo" data-test="logo"/>
					<NavLink to='/' style={titleStyle}>
						<label>Apps by Host</label>
					</NavLink>
				</div>
				<div style={rightGroupStyles}>
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
