import { Grid, IconButton, Paper, Slide } from "@mui/material";
import { FC, ReactElement } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
	opened: boolean;
	onClose: () => void;
	children: ReactElement;
}

export const Sidebar: FC<Props> = ({ opened, onClose, children }) => {
	return (
		<Slide direction='right' in={opened} mountOnEnter unmountOnExit>
			<Grid
				container
				item
				xs={12}
				md={4}
				sx={{
					position: "fixed",
					top: 0,
					left: 0,
					height: "100%",
					zIndex: 1000,
				}}
				p={1}>
				<Paper
					elevation={3}
					sx={{
						width: "100%",
						height: "100%",
						p: 1,
						backgroundColor: "rgba(255, 255, 255, 0.4)",
						backdropFilter: "blur(3px)",
					}}>
					<IconButton
						sx={{ position: "absolute", top: 0, right: 0 }}
						onClick={onClose}>
						<CloseIcon />
					</IconButton>
					{children}
				</Paper>
			</Grid>
		</Slide>
	);
};
