import React, { Component } from "react";
import Radium from "radium";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png';
import breakpoint from '../../utils/breakpoints';

class Header extends Component {
	state = {
		grid: false,
	}

	handleCheck = e => {
		this.setState({ grid: !this.state.grid })
		console.log(e);
	}

  	render() {
		const headerStyles = {
			background: '#b1c5d4',
			paddingRight: '20px',
			height: '120px',
			display: 'flex',
			flexFlow: 'column wrap',
			justifyContent: 'space-between',
			[breakpoint.tablet]: {
				height: '80px',
				flexFlow: 'row nowrap',
			}
		}
		const logoGroupStyles = {
			display: 'block',
			height: '70px',
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
		const buttonStyles = {
			height: '40px',
			marginLeft: '65px',
			[breakpoint.mobile]: {
				margin: 'auto 60px'
			},
			[breakpoint.tablet]: {
				display: 'flex'
			}
		}
		const gridListButtonStyle = {
			...headerElemStyles,
			fontSize: '13px',
			lineHeight: '25px',
			marginTop: '3px'
		}
		
		return (
			<header style={headerStyles} data-test="header">
				<div style={logoGroupStyles}>
					<img style={logoStyles} src={Logo} alt="logo" data-test="logo"/>
					<NavLink to='/' style={titleStyle}>
						<label>Apps by Host</label>
					</NavLink>
				</div>
				<div style={buttonStyles}>
					<button 
						style={gridListButtonStyle}
						onClick={this.handleCheck} 
					>
						{/* <p style={textStyle}> */}
						{this.state.grid ? `Show as list` : `Show as an awesome grid`}
						{/* </p> */}
					</button>
				</div>
			</header>
		  );
	  }
};

export default Radium(Header);
