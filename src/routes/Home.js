import React from 'react';
import CalendarReservation from './../components/CalendarReservation';
import UserInfo from './../components/UserInfo';
import {Container, Row, Col} from './../layout/Layout';

import './../styles/main.css';

export default class Home extends React.Component {
	render(){
		return (
			<Container>
				<Row>
					<Col large="12">
						<UserInfo className="rounded-container"/>
					</Col>
				</Row>
				<Row>
					<Col large="12">
						<CalendarReservation className="rounded-container" />
					</Col>
				</Row>
			</Container>
			)
	}
}