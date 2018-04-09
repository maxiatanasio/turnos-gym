import React from 'react';
import {Redirect} from 'react-router-dom';

const auth = true;

export default class Login extends React.Component{

	render(){
		return (
			<div>
		{
			auth ? 
			 <Redirect to='/'/> :
			<p>Pagina de login</p>
		}
			</div>
			)
	}
}