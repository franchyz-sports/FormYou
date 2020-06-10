import React from 'react';
// Essential JS 2 React Schedule
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth } from '@syncfusion/ej2-react-schedule';
// Style
import '../styles/Schedule.scss';

const Schedule = () => {
	return (
		<ScheduleComponent currentView='Month'>
			<Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth ]} />
		</ScheduleComponent>
	);
};

export default Schedule;
