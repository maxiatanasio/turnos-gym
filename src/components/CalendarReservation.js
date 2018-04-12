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

	data = []

	render(){
		return (
			<div className={`calendar-reservation ${this.props.className ? this.props.className : ''}`}>
				<div className="calendar-reservation-title">
					Mayo 2018 - 14 al 20
				</div>
				<div className="calendar-reservation-table-container">
					<table>
						<thead>
							<tr>
								<td></td>
								<th>LUN</th>
								<th>MAR</th>
								<th>MIE</th>
								<th>JUE</th>
								<th>VIR</th>
								<th>SAB</th>
								<th>DOM</th>
							</tr>
						</thead>
						<tbody>
							{this.data.map((hour, hourTxt) => {
								return (
									<tr key={hourTxt}>
										<th>{hourTxt}</th>
										{hour.map((day, dayTxt) => {
											return (
												<td key={`${hourTxt}-${dayTxt}`}></td>
											)
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