import { PaletteOptions, ThemeOptions } from "@mui/material";
import { grey, blue } from "@mui/material/colors";

const getMainPalette = (): PaletteOptions => {
	return {
		primary: blue,
		secondary: grey,
		divider: grey[200],
		text: {
			primary: grey[900],
			secondary: grey[800],
		},
	};
};

export const getThemePalette = (): ThemeOptions => {
	return {
		palette: {
			...getMainPalette(),
		},
	};
};
