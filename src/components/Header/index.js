import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { gridSelector } from '../../store/selectors/layoutSelectors';
import { changeLayout } from '../../store/actions/layoutActions';
import {
	headerStyles, 
	logoGroupStyles, 
	logoStyles,
	titleStyle,
	buttonStyles,
	gridListButtonStyle,
} from './headerStyles';

export class Header extends Component {
	handleChangeLayout = () => {
		this.props.changeLayout();
	}

  	render() {
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

Header.propTypes = {
	isAwesomeGrid: PropTypes.bool,
    changeLayout: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Header));
