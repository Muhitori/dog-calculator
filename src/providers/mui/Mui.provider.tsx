"use client";

import { FC, ReactNode, useMemo } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getThemePalette } from "./palette";

interface Props {
	children: ReactNode;
}

export const MuiProvider: FC<Props> = ({ children }) => {
	const theme = useMemo(() => {
		return createTheme(getThemePalette());
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<CssBaseline />
				{children}
			</LocalizationProvider>
		</ThemeProvider>
	);
};
