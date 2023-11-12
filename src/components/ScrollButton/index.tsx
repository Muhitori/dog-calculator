import { IconButton } from "@mui/material";
import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 30) {
			setVisible(true);
		} else if (scrolled <= 30) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<IconButton
			onClick={scrollToTop}
			sx={{
				display: visible ? "inline" : "none",
				position: "fixed",
				width: "40px",
				height: "40px",
				right: "40px",
				bottom: "40px",
				zIndex: "1",
				cursor: "pointer",
			}}>
			<ArrowUpwardIcon color='primary' />
		</IconButton>
	);
};

export default ScrollButton;
