import { DOGS, DogType } from "@/constants/dogs";
import { TextField } from "@mui/material";
import { ChangeEvent, FC, useCallback, useState } from "react";

interface Props {
	name: DogType;
	value: number;
	onChange: (name: DogType, value: number) => void;
}

const regex = /^[0-9\b]+$/;

export const Input: FC<Props> = ({ name, value, onChange }) => {
	const handleChange = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target;

			if (value === "" || regex.test(value)) {
				const numberValue = value === "" ? 0 : parseInt(value);
				onChange(name, numberValue);
			}
		},
		[name, onChange]
	);

	return (
		<TextField
			value={value || ""}
			label={DOGS[name]}
			name={name}
			onChange={handleChange}
		/>
	);
};
