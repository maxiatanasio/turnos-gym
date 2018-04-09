import React from 'react';
import PropTypes from 'prop-types';
import './../layout.css';

const Col = ({className, col,...rest}) => {
	const colClass = col ? `col${col}` : ''; 
	return(
		<div className={`col ${className} ${colClass}`} {...rest}></div>
	)
};

Col.propTypes = {
	className: PropTypes.string
}
Col.defaultProps = {
	className: ''
}

export default Col;