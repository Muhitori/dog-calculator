import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
	label: string;
	value?: string | number;
}

export const Article: FC<Props> = ({ label, value }) => {
	return (
		<Box display='flex'>
			<Box
				sx={{
					width: "50%",
					borderRight: value ? 1 : 0,
					p: 0.2,
				}}>
				{label}
			</Box>
			{value && <Box pl={4}>{value}</Box>}
		</Box>
	);
};
