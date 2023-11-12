import { snackbarGenerator } from "@/providers/notistack/SnackbarGenerator";
import { Box, Button, Typography } from "@mui/material";
import { DateField } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { FC, useState } from "react";

interface Props {
	baseStart: Dayjs | null;
	baseEnd: Dayjs | null;
	onPeriodChange: (start: Dayjs | null, end: Dayjs | null) => void;
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
			<Button variant='outlined' onClick={() => onPeriodChange(start, end)}>
				Підтвердити
			</Button>
		</Box>
	);
};
