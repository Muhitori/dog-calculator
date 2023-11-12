import { Divider, Grid } from "@mui/material";
import { FC } from "react";

interface Props {
	label: string;
	value: string | number;
}

export const Article: FC<Props> = ({ label, value }) => {
	return (
		<Grid container item>
			<Grid item xs={5}>
				{label}
			</Grid>

			<Grid item xs />
			<Divider orientation='vertical' />
			<Grid item xs />

			<Grid item xs={5} justifyContent='center'>
				{value}
			</Grid>
		</Grid>
	);
};
