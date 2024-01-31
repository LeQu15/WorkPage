import { createContext, useContext, useEffect, ReactNode, useState, useCallback } from "react";

type AuthContextProps = {
	loggedIn: boolean;
	login: () => void;
	logout: () => void;
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		const loginStatus = JSON.parse(localStorage.getItem("loggedIn") || "false");
		setLoggedIn(loginStatus);
	}, []);

	const login = useCallback(() => {
		setLoggedIn(true);
		localStorage.setItem("loggedIn", JSON.stringify(true));
	}, []);

	const logout = useCallback(() => {
		setLoggedIn(false);
		localStorage.setItem("loggedIn", JSON.stringify(false));
	}, []);

	return <AuthContext.Provider value={{ loggedIn, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return context;
};
