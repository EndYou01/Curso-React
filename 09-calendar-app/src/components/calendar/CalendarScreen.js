import React, { useState } from 'react'
import { Navbar } from '../ui/Navbar'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'

import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import { eventAddNew, eventClearActiveEvent, eventSetActive } from '../../actions/events'
import { AddNewFab } from '../ui/AddNewFab'
import { DeletedEventFab } from '../ui/DeletedEventFab'

moment.locale('es')

const localizer = momentLocalizer(moment)


// const events = [{
// 	title: 'Cumpleaños del jefe',
// 	start: moment().toDate(),
// 	end: moment().add(2, 'hours').toDate(),
// 	bgcolor: '#fafafa',
// 	notes: 'Comprar el pastel',
// 	user: {
// 		_id: '123',
// 		name: 'senjudo'
// 	}
// }]


export const CalendarScreen = () => {

	const dispatch = useDispatch()
	const {events, activeEvent} = useSelector( state => state.calendar);
	 

	const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

	const onDoubleClick = (e) => {
		dispatch(uiOpenModal())
	}

	const onSelectEvent = (e) => {
		dispatch(eventSetActive(e))
	}

	const onViewChange = (e) => {
		setLastView()
		localStorage.setItem('lastView', e)
	}

	const onSelectSlot = (e) => {
		dispatch(eventClearActiveEvent())
	}

	

	const eventStyleGetter = (event, start, end, isSelected) => {
		
		const style ={
			backgroundColor: '#367CF7',
			borderRadius: '0px',
			opacity: 0.8,
			color: 'white'
		}

		return {
			style
		}
	}


	return (
		<div className='calendar_screen'>
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				messages={messages}
				eventPropGetter={eventStyleGetter}
				onDoubleClickEvent={onDoubleClick}
				onSelectEvent={onSelectEvent}
				onView={onViewChange}
				onSelectSlot={onSelectSlot}
				selectable={true}
				view={lastView}
				components={{
					event: CalendarEvent
				}}
			/>

			<AddNewFab/>

			{
				(activeEvent)&&<DeletedEventFab/>
			}
			

			<CalendarModal/>
		</div>
	)
}
