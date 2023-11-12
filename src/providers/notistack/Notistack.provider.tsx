"use client";

import { SnackbarProvider } from "notistack";
import { FC } from "react";
import { SnackbarGenerator } from "./SnackbarGenerator";

interface Props {
	children: React.ReactNode;
}

export const NotistackProvider: FC<Props> = ({ children }) => {
	return (
		<SnackbarProvider maxSnack={3}>
			<SnackbarGenerator />
			{children}
		</SnackbarProvider>
	);
};
