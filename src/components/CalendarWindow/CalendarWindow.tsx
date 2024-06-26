import "react-calendar/dist/Calendar.css";

import { useCallback } from "react";
import { useSettingsContext } from "../../providers/SettingsContext.tsx";
import { calendarContainerStyles } from "./CalendarWindow.styles.ts";
import { CalendarWindowCurrentDate } from "./CalendarWindowCurrentDate/CalendarWindowCurrentDate.tsx";
import { CalendarWindowCalendar } from "./CalendarWindowCalendar/CalendarWindowCalendar.tsx";

export const CalendarWindow = () => {
	const { darkMode } = useSettingsContext();

	const dontHideOnClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
	}, []);

	return (
		<div className='calendarContainer' onClick={dontHideOnClick} css={calendarContainerStyles(darkMode)}>
			<CalendarWindowCurrentDate />
			<CalendarWindowCalendar />
		</div>
	);
};
