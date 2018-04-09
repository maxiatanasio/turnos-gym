import React from 'react';
import PropTypes from 'prop-types';
import './../layout.css';

const Container = ({className, ...rest}) => {
	return(
		<div className={`container ${className}`} {...rest}></div>
	)
};

Container.propTypes = {
	className: PropTypes.string
}
Container.defaultProps = {
	className: ''
}

export default Container;