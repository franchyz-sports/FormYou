import React, { useEffect, useState } from 'react';
// API
import * as api from '../../services/session_api.js';
// Essential JS 2 React Schedule
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
// Style
import '../../styles/Schedule.scss';

const SessionUser = () => {
	const [data, setData] = useState([]);

	const getData = () => {
		api.getMySessions()
		.then(response => {
			console.log(response)
				let sessions = response.map((session) => ({
					StartTime: new Date (
						new Date(session.date).getFullYear(),
						new Date(session.date).getMonth(),
						new Date(session.date).getDate(),
						9, 30
					),
					EndTime: new Date (
						new Date(session.date).getFullYear(),
						new Date(session.date).getMonth(),
						new Date(session.date).getDate(),
						17, 30
					)
				}));
			setData(sessions);
		});
	};

	const dataSource: EventSettingsModel = {
		dataSource: data
	};

	useEffect(getData, []);

	return (
		<div>
			<ScheduleComponent currentView='Month' eventSettings = {dataSource}>
				<Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
			</ScheduleComponent>
		</div>
	);
};

export default SessionUser;
