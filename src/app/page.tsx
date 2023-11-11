import { Grid, Typography } from "@mui/material";

export default function Home() {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography textAlign='center' variant='h5'>
					Норма годування службових собак
				</Typography>
			</Grid>
			<Grid item xs></Grid>
			<Grid item xs={6}>
				6
			</Grid>
			<Grid item xs></Grid>
		</Grid>
	);
}

