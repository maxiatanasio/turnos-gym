import React from 'react';
import PropTypes from 'prop-types';
import './../layout.css';

const Col = ({className, large, medium, small,...rest}) => {
	const colLargeClass = large ? `col-l${large}` : '';
	const colMediumClass = medium ? `col-m${medium}` : '';
	const colSmallClass = small ? `col-s${small}` : '';
	return(
		<div className={`col ${className} ${colLargeClass} ${colMediumClass} ${colSmallClass}`} {...rest}></div>
	)
};

Col.propTypes = {
	className: PropTypes.string,
}
Col.defaultProps = {
	className: '',
}

export default Col;