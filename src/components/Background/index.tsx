"use client";

import { Box, Theme, useMediaQuery } from "@mui/material";
import BackgroundImage from "/public/background.jpg";

const Background = () => {
	const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

	return matches ? (
		<Box
			component='div'
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundImage: `url(${BackgroundImage.src})`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				zIndex: -1,
				opacity: 0.3,
			}}></Box>
	) : null;
};

export default Background;
