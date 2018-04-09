import React from 'react';
import PropTypes from 'prop-types';
import './../layout.css';

const Container = ({className, flex,...rest}) => {
	const flexClass = flex ? 'container-flex' : '';
	return(
		<div className={`container ${className} ${flexClass}`} {...rest}></div>
	)
};

Container.propTypes = {
	className: PropTypes.string
}
Container.defaultProps = {
	className: ''
}

export default Container;