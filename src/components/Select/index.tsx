import { SelectOptions, selectOptions } from "@/constants/dogs";
import {
	FormControl,
	InputLabel,
	Select as MuiSelect,
	MenuItem,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import { FC } from "react";

interface Props {
	selectedValue: string | number;
	selectLabel: string;
	onChange: (value: SelectOptions) => void;
}

export const Select: FC<Props> = ({ selectedValue, selectLabel, onChange }) => {
	const handleChange = (event: SelectChangeEvent<string>) => {
		onChange(event.target.value as SelectOptions);
	};

	return (
		<FormControl fullWidth size='small'>
			<InputLabel>{selectLabel}</InputLabel>
			<MuiSelect
				value={String(selectedValue) || String(selectOptions[0])}
				label={selectLabel}
				onChange={handleChange}>
				{selectOptions.map(({ label, value }) => (
					<MenuItem key={value} value={value}>
						<Typography noWrap variant='body1'>
							{label}
						</Typography>
					</MenuItem>
				))}
			</MuiSelect>
		</FormControl>
	);
};
