import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import breakpoint from '../../utils/breakpoints';
import { gridSelector } from '../../store/selectors/layoutSelectors';
import { changeLayout } from '../../store/actions/layoutActions';

class Header extends Component {
	handleChangeLayout = () => {
		this.props.changeLayout();
	}

  	render() {
		const headerStyles = {
			background: '#b1c5d4',
			paddingRight: '20px',
			height: '80px',
			display: 'flex',
			flexFlow: 'column wrap',
			justifyContent: 'space-between',
			[breakpoint.tablet]: {
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
				display: 'none',
			},
			[breakpoint.tablet]: {
				margin: 'auto 60px',
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
						onClick={this.handleChangeLayout} 
					>
						{this.props.isAwesomeGrid ? `Show as list` : `Show as an awesome grid`}	
					</button>
				</div>
			</header>
		  );
	  }
};

const mapStateToProps = state => ({
    isAwesomeGrid: gridSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    changeLayout: () => { dispatch(changeLayout()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Header));
