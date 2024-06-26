import { useState, useEffect, useCallback } from "react";
import translate from "translate";
import { TranslatorSettings } from "./TranslatorSettings/TranslatorSettings";
import { TranslatorTextArea } from "./TranslatorTextArea/TranslatorTextArea";
import { LocalStorageNames } from "../../utils/localstorageNames";
import { useTranslation } from "react-i18next";
import { launchToast } from "../../utils/toastFunction";
import { translatorContainerStyles } from "./Translator.styles";

const { localTranslatorLanguageTo, localTranslatorLanguageFrom } = LocalStorageNames;

export const Translator = () => {
	const [inputValue, setInputValue] = useState("");
	const [translated, setTranslated] = useState<string | undefined | number>("");
	const [selectedLanguageTo, setSelectedLanguageTo] = useState("en");
	const [selectedLanguageFrom, setSelectedLanguageFrom] = useState("pl");
	const { t } = useTranslation();

	const translation = useCallback(
		async (text: string) => {
			try {
				if (text) {
					const result = await translate(text, {
						from: selectedLanguageFrom,
						to: selectedLanguageTo,
						engine: "deepl",
						key: import.meta.env.VITE_TRANSLATOR_API,
					});
					setTranslated(result);
				} else {
					setTranslated("");
				}
			} catch (error) {
				if (error instanceof Error && error.message.includes("Auth Error")) {
					launchToast("error", t("Translator.toastWrongApiKey"));
				}
				setTranslated("");
			}
		},
		[selectedLanguageTo, selectedLanguageFrom, t]
	);

	const handleLanguageFromChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const newLanguageFrom = e.target.value;
			setSelectedLanguageFrom(newLanguageFrom);
			localStorage.setItem(localTranslatorLanguageFrom, JSON.stringify(newLanguageFrom));

			if (newLanguageFrom === selectedLanguageTo) {
				setSelectedLanguageTo(selectedLanguageFrom);
				localStorage.setItem(localTranslatorLanguageTo, JSON.stringify(selectedLanguageFrom));
			}
		},
		[selectedLanguageFrom, selectedLanguageTo]
	);

	const handleLanguageToChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const newLanguageTo = e.target.value;
			setSelectedLanguageTo(newLanguageTo);
			localStorage.setItem(localTranslatorLanguageTo, JSON.stringify(newLanguageTo));

			if (newLanguageTo === selectedLanguageFrom) {
				setSelectedLanguageFrom(selectedLanguageTo);
				localStorage.setItem(localTranslatorLanguageFrom, JSON.stringify(selectedLanguageTo));
			}
		},
		[selectedLanguageFrom, selectedLanguageTo]
	);

	const swapLanguages = useCallback(() => {
		setSelectedLanguageFrom(selectedLanguageTo);
		setSelectedLanguageTo(selectedLanguageFrom);
		localStorage.setItem(localTranslatorLanguageFrom, JSON.stringify(selectedLanguageTo));
		localStorage.setItem(localTranslatorLanguageTo, JSON.stringify(selectedLanguageFrom));
	}, [selectedLanguageFrom, selectedLanguageTo]);

	const clear = useCallback(() => {
		setInputValue("");
	}, []);

	const updateInputValue = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputValue(e.target.value);
	}, []);

	useEffect(() => {
		const storedLangTo = localStorage.getItem(localTranslatorLanguageTo);
		if (storedLangTo) {
			setSelectedLanguageTo(JSON.parse(storedLangTo));
		}
		const storedLangFrom = localStorage.getItem(localTranslatorLanguageFrom);
		if (storedLangFrom) {
			setSelectedLanguageFrom(JSON.parse(storedLangFrom));
		}
	}, []);

	useEffect(() => {
		if (inputValue) {
			setTranslated(0);
		} else {
			setTranslated("");
		}

		const timeoutId = setTimeout(() => {
			translation(inputValue);
		}, 2000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [inputValue, translation]);

	return (
		<div className='translatorContainer' css={translatorContainerStyles}>
			<TranslatorSettings
				selectedLanguageFrom={selectedLanguageFrom}
				handleLanguageToChange={handleLanguageToChange}
				handleLanguageFromChange={handleLanguageFromChange}
				selectedLanguageTo={selectedLanguageTo}
				swapLanguages={swapLanguages}
				clear={clear}
			/>
			<TranslatorTextArea inputValue={inputValue} updateInputValue={updateInputValue} translated={translated} />
		</div>
	);
};
