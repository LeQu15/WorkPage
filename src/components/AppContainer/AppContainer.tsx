import Settings from "../Settings/Settings";
import Notes from "../Notes/Notes";
import ToDoList from "../ToDoList/ToDoList";
import Calculator from "../Calculator/Calculator";
import Saper from "../Saper/Saper";
import Translator from "../Translator/Translator";
import Paint from "../Paint/Paint";
import { useSettingsContext } from "../../providers/SettingsContext";
import { useCallback, useMemo, useState } from "react";
import { appContainerStyles, appContainerBackgroundStyles, appContainerContentStyles } from "./AppContainer.styles";
import AppContainerHeader from "./AppContainerHeader.tsx/AppContainerHeader";
import type { App } from "../../views/System/System";

type AppContainerProps = {
	app: App;
	closeApp: () => void;
	isOff: boolean;
	changeIsOff: (newValue: boolean) => void;
};

const AppContainer = ({ app, closeApp, isOff, changeIsOff }: AppContainerProps) => {
	const { darkMode } = useSettingsContext();
	const [clickTimeout, changeClickTimeout] = useState<null | number>(null);

	const renderAppContent = useCallback(() => {
		const { name } = app;
		switch (name) {
			case "Settings":
				return <Settings />;
			case "Calculator":
				return <Calculator />;
			case "Translator":
				return <Translator />;
			case "ToDoList":
				return <ToDoList />;
			case "Notes":
				return <Notes />;
			case "Paint":
				return <Paint />;
			case "Minesweeper":
				return <Saper />;
			default:
				return null;
		}
	}, [app]);

	const playAnimation = useCallback(() => {
		changeIsOff(true);
	}, [changeIsOff]);

	const blockClosingOnClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	}, []);

	const handleMouseDown = useCallback(() => {
		changeClickTimeout(1);
		setTimeout(() => {
			changeClickTimeout(null);
		}, 300);
	}, []);

	const handleMouseUp = useCallback(() => {
		if (clickTimeout === 1) {
			clearTimeout(clickTimeout);
			changeClickTimeout(null);
			playAnimation();
		}
	}, [clickTimeout, playAnimation]);

	const appContainerBackgroundClassName = useMemo(() => `appContainerBackground${isOff ? " offAnimation" : ""}`, [isOff]);
	const appContainerClassName = useMemo(() => `appContainer ${app.name === "Calculator" || app.name === "Settings" ? "smallContainer" : ""}`, [app.name]);

	return (
		<div className={appContainerBackgroundClassName} onMouseDown={handleMouseDown} css={appContainerBackgroundStyles} onMouseUp={handleMouseUp} onAnimationEnd={closeApp}>
			<div className={appContainerClassName} css={appContainerStyles(darkMode)} onClick={blockClosingOnClick} onMouseDown={blockClosingOnClick} onMouseUp={blockClosingOnClick}>
				<AppContainerHeader appName={app.name} playAnimation={playAnimation} closeApp={closeApp} />
				<main className='appContainerContent' css={appContainerContentStyles}>
					{renderAppContent()}
				</main>
			</div>
		</div>
	);
};

export default AppContainer;
