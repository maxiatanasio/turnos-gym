import React from 'react';
import CalendarReservation from './../components/CalendarReservation';
import UserInfo from './../components/UserInfo';
import {Container, Row, Col} from './../layout/Layout';
export default class Home extends React.Component {
	render(){
		return (
			<Container>
				<Row>
					<Col large="12">
						<UserInfo />
					</Col>
				</Row>
				<Row>
					<Col large="12">
						<CalendarReservation />
					</Col>
				</Row>

			</Container>
			)
	}
}