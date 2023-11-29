import { PaletteOptions, alpha, ThemeOptions } from "@mui/material";
import { grey, blue } from "@mui/material/colors";

const getMainPalette = (): PaletteOptions => {
	return {
		background: {
			default: alpha("#27ae60", 0.3),
		},
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
		typography: {
			fontSize: 17,
			fontWeightRegular: 600,
		},
		components: {
			MuiDivider: {
				styleOverrides: {
					root: {
						borderColor: grey[900],
					},
				},
			},
		},
	};
};
