import React from 'react';

export default class UserInfo extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className={`user-info-container ${this.props.className ? this.props.className : ''}`}>
				<p>Informacion del usuario</p>	
			</div>
			)
	}

}