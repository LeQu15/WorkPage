import wallpaperData from "../../../data/wallpapers";
import { useMemo } from "react";
import "./SettingsWallpaperSection.style.scss";
import { useSettingsContext } from "../../../providers/SettingsContext";
import { css } from "@emotion/react";

type SettingsWallpaperSectionProps = {
	changeBackground: (e: React.MouseEvent) => void;
	backgroundInputValue: string;
	handleInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	handleCustomWallpaper: () => void;
	handleBackgroundInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SettingsWallpaperSection = ({
	changeBackground,
	backgroundInputValue,
	handleInputKeyDown,
	handleCustomWallpaper,
	handleBackgroundInputChange,
}: SettingsWallpaperSectionProps) => {
	const { color, darkMode } = useSettingsContext();

	const wallpaperConfirmButtonStyles = useMemo(
		() => css`
			& button:focus,
			& button:hover {
				color: ${color} !important;
			}

			& .wallpaperInput:focus {
				border: 2px solid ${color} !important;
				border-right: none !important;

				& ~ .wallpaperConfirmButton {
					border: 2px solid ${color} !important;
					border-left: none !important;
				}
			}
		`,
		[color]
	);

	const darkModeStyles = useMemo(
		() => css`
			&.changeWallpaperSection {
				.wallpaperConfirmButton {
					background-color: ${darkMode ? "white" : "black"};
					color: ${darkMode ? "black" : "white"};
					border: 2px solid ${darkMode ? "white" : "black"};
				}

				.wallpaperInput {
					background-color: ${darkMode ? "white" : "black"};
					color: ${darkMode ? "black" : "white"};
					border: 2px solid ${darkMode ? "white" : "black"};
				}

				.wallpapersSelection {
					& button {
						border: 2px solid ${darkMode ? "white" : "black"};
					}
				}
			}
		`,
		[darkMode]
	);

	const wallpapers = useMemo(
		() =>
			wallpaperData.map((el, i) => (
				<button key={i} className='wallpaperButton' onClick={changeBackground}>
					<img src={el} alt='wallpaper' />
				</button>
			)),
		[changeBackground]
	);

	return (
		<section className='changeWallpaperSection' css={darkModeStyles}>
			<h2>SET YOUR WALLPAPER</h2>

			<div className='wallpaperPanel' css={wallpaperConfirmButtonStyles}>
				<input
					className='wallpaperInput'
					type='text'
					name='wallpaperInput'
					value={backgroundInputValue}
					onChange={handleBackgroundInputChange}
					id='wallpaperInput'
					placeholder={`Custom wallpaper: (url)`}
					onKeyDown={handleInputKeyDown}
				></input>
				<button className='wallpaperConfirmButton' css={wallpaperConfirmButtonStyles} onClick={handleCustomWallpaper}>
					<i className='fa-solid fa-arrow-right-to-bracket'></i>
				</button>
			</div>

			<div className='wallpapersSelection'>{wallpapers}</div>
		</section>
	);
};

export default SettingsWallpaperSection;