import React from 'react';
import CalendarReservation from './../components/CalendarReservation';
import UserInfo from './../components/UserInfo';
import {Container} from './../layout/Layout';
export default class Home extends React.Component {
	render(){
		return (
			<Container>
				<p>Pagina Principal</p>
				<UserInfo />
				<CalendarReservation />
			</Container>
			)
	}
}