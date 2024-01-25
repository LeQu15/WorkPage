import "./Desktop.style.scss";
import { useCallback, useState } from "react";
import { useSettingsContext } from "../../providers/SettingsContext";
import appData from "../../data/apps";
import AppContainer from "../AppContainer/AppContainer";
import Weather from "../Weather/Weather";
import UserWindow from "../UserWindow/UserWindow";
import CalendarWindow from "../CalendarWindow/CalendarWindow";
import DesktopApps from "./DesktopApps/DesktopApps";

export type App = {
	id: number;
	name: string;
	class: string;
};

type DesktopProps = {
	userWindowState: boolean;
	calendarWindowState: boolean;
	hideUserWindowState: () => void;
	hideCalendarWindow: () => void;
};

const Desktop = ({ hideUserWindowState, userWindowState, calendarWindowState, hideCalendarWindow }: DesktopProps) => {
	const { background } = useSettingsContext();
	const [chosenApp, changeChosenApp] = useState<App | null>(null);

	const launchApp = useCallback((e: React.MouseEvent) => {
		const target = e.currentTarget as HTMLButtonElement;
		const id: number = Number(target.dataset.app);
		changeChosenApp(appData[id]);
	}, []);

	const closeApp = useCallback(() => {
		changeChosenApp(null);
	}, []);

	const hidePanels = useCallback(() => {
		hideUserWindowState();
		hideCalendarWindow();
	}, [hideCalendarWindow, hideUserWindowState]);

	const handleLaunchApp = useCallback(
		(e: React.MouseEvent) => {
			launchApp(e);
		},
		[launchApp]
	);

	return (
		<main className='desktop' style={{ backgroundImage: `url(${background})` }} onClick={hidePanels}>
			{chosenApp && <AppContainer app={chosenApp} closeApp={closeApp} />}
			{userWindowState && <UserWindow />}
			{calendarWindowState && <CalendarWindow />}
			<DesktopApps appData={appData} handleLaunchApp={handleLaunchApp} />
			<Weather />
		</main>
	);
};

export default Desktop;
