import React from 'react';
import './styles/CalendarReservation.css';

export default class CalendarReservation extends React.Component {

	constructor(props){
		super(props);
		this.generateData();
	}

	generateData(){
		for(let hour = 7; hour < 23; hour++){
			this.data[hour] = [];
			for(let day = 1; day <= 7; day++){
				this.data[hour][day] = [];
			}
		}
	}

	searchCalendarDayHour(day, hour){
		if(this.props.calendarData.calendar[day]){
			return this.props.calendarData.calendar[day][hour];
		} else {
			return false;
		}
	}

	onReservationClickHandle = (calendarEvent, day, hour) => {
		calendarEvent.user_reservation = !calendarEvent.user_reservation;
		this.props.onReservationClickHandle(calendarEvent, day, hour);
	}

	data = []

	render(){
		return (
			<div className={`calendar-reservation ${this.props.className ? this.props.className : ''}`}>
				<div className="calendar-reservation-table-container">
					<table>
						<thead>
							<tr>
								<td className="calendar-month">Mayo</td>
								<td></td>
								<th>LUN</th>
								<th>MAR</th>
								<th>MIE</th>
								<th>JUE</th>
								<th>VIE</th>
								<th>SAB</th>
								<th>DOM</th>
							</tr>
						</thead>
						<tbody>
							{this.data.map((hour, hourTxt) => {
								return (
									<tr key={hourTxt}>
										<th></th>
										<th>{hourTxt}</th>
										{hour.map((day, dayTxt) => {
										const calendarHourDayData = this.searchCalendarDayHour(dayTxt, hourTxt);
										if(calendarHourDayData){
											return (
												<td key={`${hourTxt}-${dayTxt}`} className="has-activity">
													<div className="reservation-options-container" onClick={() => this.onReservationClickHandle(calendarHourDayData, dayTxt, hourTxt)}>
														{
															calendarHourDayData.user_reservation ? 
															<div className="has-reservation">
																<img src="images/check.png" />
																<span>{calendarHourDayData.name}</span>
															</div>:
															<div className="no-reservation">
																<span>{calendarHourDayData.name}</span>
															</div>
														}
													</div>
												</td>
											)
										} else {
											return <td key={`${hourTxt}-${dayTxt}`}></td>;
										}

											
										})}
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
			)
	}

}