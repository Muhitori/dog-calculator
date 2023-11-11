import { snackbarGenerator } from "@/providers/notistack/SnackbarGenerator";
import { Box, Button, Typography } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { FC, useState } from "react";

interface Props {
	onPeriodChange: (period: number) => void;
}

export const DateRangePicker: FC<Props> = ({ onPeriodChange }) => {
	const [start, setStart] = useState<Dayjs | null>(null);
	const [end, setEnd] = useState<Dayjs | null>(null);

	const handleStartChange = (start: Dayjs | null) => {
		setStart(start);
	};

	const handleEndChange = (end: Dayjs | null) => {
		setEnd(end);
	};

	const handleConfirm = () => {
		if (start === null || end === null) {
			snackbarGenerator.error("Помилка, одна з дат пуста.");
			return;
		}

		if (start > end) {
			snackbarGenerator.error(
				"Помилка, період закінчується раніше ніж починається."
			);
			return;
		}

		onPeriodChange(end.diff(start, "day"));
	};

	return (
		<Box display='flex' alignItems='center' gap={4}>
			<Typography display='inline-block' variant='body1'>
				Період:
			</Typography>
			<DateField
				label='Початок'
				value={start}
				onChange={handleStartChange}
				format='DD-MM-YYYY'
			/>
			<DateField
				label='Кінець'
				value={end}
				onChange={handleEndChange}
				format='DD-MM-YYYY'
			/>
			<Button variant='outlined' onClick={handleConfirm}>
				Підтвердити
			</Button>
		</Box>
	);
};
