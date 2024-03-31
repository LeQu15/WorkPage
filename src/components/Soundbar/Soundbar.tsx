import { useCallback, useMemo, useState } from "react";
import { useSettingsContext } from "../../providers/SettingsContext";
import { useTranslation } from "react-i18next";
import { soundbarSliderStyles, soundbarStyles } from "./Soundbar.styles";

type SoundbarProps = {
	volume: number;
	setVolume: (value: number) => void;
};

const Soundbar = ({ volume, setVolume }: SoundbarProps) => {
	const { color, darkMode } = useSettingsContext();
	const [oldSoundVal, setOldSoundVal] = useState(volume);
	const { t } = useTranslation();

	const dontHideOnClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
	}, []);

	const changeVolume = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const volume = Number(e.target.value);
			setVolume(volume);
			setOldSoundVal(volume);
		},
		[setVolume]
	);

	const lowerVolumeOnIconClick = useCallback(() => {
		if (volume == 0) {
			setVolume(oldSoundVal == 0 ? 50 : oldSoundVal);
		} else {
			setVolume(0);
		}
	}, [setVolume, volume, oldSoundVal]);

	const volumeClass = useMemo(() => (volume < 10 ? "fa-volume-xmark" : volume < 70 ? "fa-volume-low" : "fa-volume-high"), [volume]);

	return (
		<div className='soundbar' css={soundbarStyles(darkMode)} onClick={dontHideOnClick}>
			<label htmlFor='soundbarSlider'>{t("Volume.volume")}:</label>
			<div>
				<i className={`fa-solid ${volumeClass}`} onClick={lowerVolumeOnIconClick}></i>{" "}
				<input css={soundbarSliderStyles(color)} type='range' min='0' max='100' value={volume} onChange={changeVolume} className='soundbarSlider' id='soundbarSlider' />
			</div>
		</div>
	);
};

export default Soundbar;
