import React from 'react';
import PropTypes from 'prop-types';
import './../layout.css';

const Row = ({className, ...rest}) => {
	return(
		<div className={`row ${className}`} {...rest}></div>
	)
};

Row.propTypes = {
	className: PropTypes.string
}
Row.defaultProps = {
	className: ''
}

export default Row;