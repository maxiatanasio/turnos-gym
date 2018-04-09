import React from 'react';
import CalendarReservation from './../components/CalendarReservation';
import UserInfo from './../components/UserInfo';
import {Container, Row, Col} from './../layout/Layout';
export default class Home extends React.Component {
	render(){
		return (
			<Container>
				<Row>
					<Col col="12">
						<UserInfo />
					</Col>
				</Row>
				<Row>
					<Col col="6">
						<CalendarReservation />
					</Col>
					<Col col="6">
						<p>Segunda columna</p>
					</Col>
				</Row>

			</Container>
			)
	}
}