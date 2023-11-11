"use client";

import { MAX_SNACK } from "@/constants";
import { SnackbarProvider } from "notistack";
import { FC } from "react";
import { SnackbarGenerator } from "./SnackbarGenerator";

interface Props {
	children: React.ReactNode;
}

export const NotistackProvider: FC<Props> = ({ children }) => {
	return (
		<SnackbarProvider maxSnack={MAX_SNACK}>
			<SnackbarGenerator />
			{children}
		</SnackbarProvider>
	);
};
