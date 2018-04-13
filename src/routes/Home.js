import React from 'react';
import CalendarReservation from './../components/CalendarReservation';
import UserInfo from './../components/UserInfo';
import {Container, Row, Col} from './../layout/Layout';

import './../styles/main.css';

const activities = {
	"activities" : [
		{
			"id" : 123456,
			"name" : "Crossfit"
		},
		{
			"id" : 123457,
			"name" : "Funcional"
		}
	]
}

const calendarData = {
	"calendar" : {
		1 : {
			7 : {
				"id_activity" : 123456,
				"user_reservation" : false						
			},
			8 : {
				"id_activity" : 123456,
				"user_reservation" : false
			}
		},
		2 : {
			9 : {
				"id_activity" : 123457,
				"user_reservation" : false
			},
			10 : {
				"id_activity" : 123457,
				"user_reservation" : false
			}
		}
	}
}

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
						<CalendarReservation className="rounded-container" calendarData={calendarData} activities={activities}/>
					</Col>
				</Row>
			</Container>
			)
	}
}