import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
	en: {
		translation: {
			Apps: {
				Notes: "Notes",
				ToDoList: "ToDoList",
				Calculator: "Calculator",
				Paint: "Paint",
				Minesweeper: "Minesweeper",
				Translator: "Translator",
				Settings: "Settings",
			},
			Swal: {
				swalTitle: "Are you sure?",
				swalDesc: "You won't be able to revert this!",
				swalYes: "Confirm",
				swalNo: "Cancel",
			},
			Notes: {
				toastRemovedNote: "Succesfully removed note!",
				noteCharsLeft: "chars left.",
				newNoteTitle: "Your new note.",
				newNoteDesc: "Feel free to write something!",
				noNotes: "No notes found, make a new one.",
			},
			Calculator: {
				toastCopiedCalculator: "Copied calculator's content.",
				calculatorCopyHover: "Click to copy content.",
			},
			Translator: {
				toastWrongApiKey: "Wrong ApiKey provided, translator won't work properly!",
				toastNoApiKey: "No Translator ApiKey found! Translator won't work without it!",
				translatorTranslating: "Translating...",
				translatorCopyHover: "Click to copy content.",
				toastCopiedTranslator: "Copied translator's content.",
			},
			LoginProfile: {
				loginUser: "User",
				loginEnter: "Enter",
				loginIn: "Zaloguj",
			},
			Paint: {
				swalSaveImage: "Save your image",
				swalChangeName: "Change name:",
				swalDefaultInput: "Painting",
				paintBackground: "Background: ",
				paintColor: "Color:",
				paintSize: "Size:",
				toastSavedImage: "The image has been succesfully saved to your device!",
			},
			Minesweeper: {
				minesweeperTitle: "Minesweeper",
				minesweeperTime: "Time",
				minesweeperWin: "You won!",
				minesweeperLose: "Game Over!",
				minesweeperButtonPlayAgain: "Play again",
				minesweeperButtonReset: "Reset",
				minesweeperStats: "Stats",
				minesweeperEasy: "Easy",
				minesweeperNormal: "Normal",
				minesweeperHard: "Hard",
				toastResetProgress: "This action will reset your game progress!",
			},
			Settings: {
				settingsChangeColors: "CHANGE COLORS",
				settingsMainColor: "Main color",
				settingsMode: "Mode",
				settingsLanguage: "Language",
				settingsUserSection: "USER'S DATA",
				settingsUserSectionUsername: "Username: ",
				settingsUserSectionChangeUsername: "Change Username",
				settingsUserSectionPassword: "Password",
				settingsUserSectionChangePassword: "Change Password",
				settingsUserSectionOldPassword: "Old Password",
				settingsUserSectionNewPassword: "New Password",
				settingsUserSectionConfirmPassword: "Confirm Password",
				settingsUserSectionButtonText: "Change",
				settingsUserSectionAvatarHover: "Click to change avatar",
				settingsWallpaperSet: "SET YOUR WALLPAPER",
				settingsWallpaperInputText: "Custom wallpaper: (url)",
				settingsWallpaperModeAuto: "Auto",
				settingsWallpaperModeCover: "Cover",
				settingsWallpaperModeContain: "Contain",
				toastChangedWallpaper: "Succesfully changed wallpaper!",
				toastChangedLanguage: "Succesfully changed language!",
				toastChangedColor: "Succesfully changed app color!",
				toastChangedWallpaperMode: "Succesfully changed wallpaper mode!",
				toastOldPasswordNoMatch: "Old password doesn't match!",
				toastPasswordChanged: "Succesfully changed password!",
				toastGenericError: "An error occured! Please try again later.",
				toastUsernameChanged: "Succesfully changed username!",
				toastAvatarChanged: "Succesfully changed avatar!",
				toastNewPasswordTooShort: "New passwords are too short! (min. 8 chars)",
				toastNewPasswordNoMatch: "New passwords doesn't match!",
				toastUsernameTooShort: "Username is too short! (min. 4 chars)",
			},
			Volume: {
				volume: "Volume",
			},
			ToDoList: {
				toDoListTitle: "Title",
				toDoListTitleReqs: "Min. 3 chars.",
				toDoListDescription: "Description",
				toDoListDescriptionOptional: "(optional)",
				toDoListPriority: "Priority",
				toDoListFinishEditing: "Finish editing",
				toDoListAddNewTask: "Add new task",
				toDoListNoTasks: "No tasks found, create a new one.",
				toastRemovedTask: "Succesfully removed task!",
			},
			UserWindow: {
				userWindowLoggedAs: "Logged as:",
				userWindowLogout: "Logout",
			},
			Weather: {
				weatherFetchLocalizationError: "Can't fetch location, weather won't work properly!",
				weatherNoApiKey: "No Weather ApiKey found! Weather won't work without it!",
				weatherFetchWeatherError: "Can't fetch weather data, weather won't work properly!",
			},
			Wifi: {
				wifiConnected: "Connected",
			},
		},
	},
	pl: {
		translation: {
			Apps: {
				Notes: "Notatki",
				ToDoList: "Zadania",
				Calculator: "Kalkulator",
				Paint: "Paint",
				Minesweeper: "Saper",
				Translator: "Tłumacz",
				Settings: "Ustawienia",
			},
			Swal: {
				swalTitle: "Jesteś pewny?",
				swalDesc: "Nie będziesz mógł tego cofnąć!",
				swalYes: "Potwierdź",
				swalNo: "Anuluj",
			},
			Notes: {
				toastRemovedNote: "Sukces! Usunięto notatkę",
				noteCharsLeft: "znaków zostało.",
				newNoteTitle: "Twoja nowa notatka.",
				newNoteDesc: "Śmiało, napisz coś!",
				noNotes: "Nie znaleziono żadnych notatek, stwórz nową.",
			},
			Calculator: {
				toastCopiedCalculator: "Skopiowano zawartość kalkulatora.",
				calculatorCopyHover: "Kliknij aby skopiować.",
			},
			Translator: {
				toastWrongApiKey: "Podany klucz API jest zły! Tłumacz nie będzie działać poprawnie!",
				toastNoApiKey: "Brak klucza API! Tłumacz nie będzie działać poprawnie!",
				translatorTranslating: "Tłumaczę...",
				translatorCopyHover: "Kliknij aby skopiować.",
				toastCopiedTranslator: "Skopiowano zawartość tłumacza.",
			},
			LoginProfile: {
				loginUser: "Użytkownik",
				loginEnter: "Wejdź",
				loginIn: "Zaloguj",
			},
			Paint: {
				swalSaveImage: "Zapisz swój obraz",
				swalChangeName: "Zmień nazwę:",
				swalDefaultInput: "Obraz",
				paintBackground: "Tło: ",
				paintColor: "Kolor:",
				paintSize: "Rozmiar:",
				toastSavedImage: "Sukces! Zapisano obraz na Twoje urządzenie!",
			},
			Minesweeper: {
				minesweeperTitle: "Saper",
				minesweeperTime: "Czas",
				minesweeperWin: "Wygrałeś!",
				minesweeperLose: "Koniec gry!",
				minesweeperButtonPlayAgain: "Zagraj ponownie",
				minesweeperButtonReset: "Reset",
				minesweeperStats: "Statystyki",
				minesweeperEasy: "Łatwy",
				minesweeperNormal: "Normalny",
				minesweeperHard: "Trudny",
				toastResetProgress: "Twój progres zostanie zresetowany!",
			},
			Settings: {
				settingsChangeColors: "ZMIEŃ KOLORY",
				settingsMainColor: "Kolor główny",
				settingsMode: "Tryb",
				settingsLanguage: "Język",
				settingsUserSection: "DANE UŻYTKOWNIKA",
				settingsUserSectionUsername: "Nazwa: ",
				settingsUserSectionChangeUsername: "Zmień nazwę:",
				settingsUserSectionPassword: "Hasło",
				settingsUserSectionChangePassword: "Zmień hasło",
				settingsUserSectionOldPassword: "Stare hasło",
				settingsUserSectionNewPassword: "Nowe hasło",
				settingsUserSectionConfirmPassword: "Potwierdź nowe hasło",
				settingsUserSectionButtonText: "Zmień",
				settingsUserSectionAvatarHover: "Kliknij by zmienić awatar",
				settingsWallpaperSet: "USTAW TAPETĘ",
				settingsWallpaperInputText: "Własna tapeta: (url)",
				settingsWallpaperModeAuto: "Auto",
				settingsWallpaperModeCover: "Zasłoń",
				settingsWallpaperModeContain: "Zmieść",
				toastChangedWallpaper: "Sukces! Zmieniono tapetę!",
				toastChangedLanguage: "Sukces! Język został zmieniony!",
				toastChangedColor: "Sukces! Zmieniono kolor aplikacji!",
				toastChangedWallpaperMode: "Sukces! Zmieniono styl tapety!",
				toastOldPasswordNoMatch: "Stare hasło się nie zgadza!",
				toastPasswordChanged: "Sukces! Zmieniono hasło!",
				toastGenericError: "Wystąpił błąd! Spróbuj ponownie później!",
				toastUsernameChanged: "Sukces! Zmieniono nazwę!",
				toastAvatarChanged: "Sukces! Zmieniono awatar!",
				toastNewPasswordTooShort: "Nowe hasła są za krótkie! (min. 8 znaków)",
				toastNewPasswordNoMatch: "Nowe hasła nie sa takie same!",
				toastUsernameTooShort: "Nazwa jest za krótka! (min. 4 znaki)",
			},
			Volume: {
				volume: "Głosność",
			},
			ToDoList: {
				toDoListTitle: "Tytuł",
				toDoListTitleReqs: "Min. 3 znaki.",
				toDoListDescription: "Opis",
				toDoListDescriptionOptional: "(opcjonalnie)",
				toDoListPriority: "Ważność",
				toDoListFinishEditing: "Skończ edycję",
				toDoListAddNewTask: "Dodaj zadanie",
				toDoListNoTasks: "Nie znaleziono żadnych zadań, stwórz nowe.",
				toastRemovedTask: "Sukces! Usunięto zadanie!",
			},
			UserWindow: {
				userWindowLoggedAs: "Zalogowany jako:",
				userWindowLogout: "Wyloguj",
			},
			Weather: {
				weatherFetchLocalizationError: "Nie można pobrać lokalizacji! Pogoda nie będzie działać poprawnie!",
				weatherNoApiKey: "Brak klucza API! Pogoda nie będzie działać poprawnie!",
				weatherFetchWeatherError: "Nie można pobrać pogody! Pogoda nie będzie działać poprawnie!",
			},
			Wifi: {
				wifiConnected: "Połączono",
			},
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en",

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
