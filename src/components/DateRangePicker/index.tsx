import { snackbarGenerator } from "@/providers/notistack/SnackbarGenerator";
import { Box, Button, Typography } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { FC, useState } from "react";

interface Props {
	baseStart: Dayjs | null;
	baseEnd: Dayjs | null;
	onPeriodChange: (
		start: Dayjs | null,
		end: Dayjs | null,
		period: number
	) => void;
}

export const DateRangePicker: FC<Props> = ({
	baseStart,
	baseEnd,
	onPeriodChange,
}) => {
	const [start, setStart] = useState<Dayjs | null>(baseStart);
	const [end, setEnd] = useState<Dayjs | null>(baseEnd);

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

		onPeriodChange(start, end, end.diff(start, "day"));
	};

	return (
		<Box display='flex' flexDirection='column' gap={2}>
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
