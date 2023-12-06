"use client";

import { Article } from "@/components/Article";
import { DateRangePicker } from "@/components/DateRangePicker";
import { Input } from "@/components/Input";
import ScrollButton from "@/components/ScrollButton";
import { Select } from "@/components/Select";
import { Sidebar } from "@/components/Sidebar";
import {
	DOGS_STATE,
	DOG_FOODS,
	DogType,
	FoodType,
	NAME_COLUMN,
	SelectOptions,
	TABLE_STATE,
	VALUE_COLUMN,
	selectOptions,
} from "@/constants/dogs";
import { snackbarGenerator } from "@/providers/notistack/SnackbarGenerator";
import { updateFoods } from "@/utils/foodCalc";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { useCallback, useState } from "react";
import * as XLSX from "xlsx";

export default function Home() {
	const [openedSidebar, setOpenedSidebar] = useState(false);

	const [dogs, setDogs] = useState(DOGS_STATE);
	const [foods, setFoods] = useState(TABLE_STATE);

	const [start, setStart] = useState<Dayjs | null>(null);
	const [end, setEnd] = useState<Dayjs | null>(null);
	const [period, setPeriod] = useState(0);

	const [selectedDogType, setSelectedDogType] = useState<SelectOptions>(
		selectOptions[0].value
	);

	const downloadExcel = useCallback(() => {
		try {
			const data = Object.keys(TABLE_STATE).map((food) => {
				const key = food as FoodType;

				return {
					[NAME_COLUMN]: DOG_FOODS[key].name,
					[VALUE_COLUMN]: foods[key],
				};
			});
			const workbookName = selectOptions
				.find(({ value }) => value === selectedDogType)
				?.label.slice(0, 25);

			const worksheet = XLSX.utils.json_to_sheet(data);
			const workbook = XLSX.utils.book_new();

			XLSX.utils.book_append_sheet(workbook, worksheet, workbookName);
			XLSX.writeFile(workbook, `Годування собак.xlsx`);
		} catch (err) {
			snackbarGenerator.error("Помилка експорту в ексель");
		}
	}, [foods, selectedDogType]);

	const openSidebar = () => {
		setOpenedSidebar(true);
	};

	const closeSidebar = () => {
		setOpenedSidebar(false);
	};

	const handleDogCountChange = (name: DogType, value: number) => {
		const newDogs = {
			...dogs,
			[name]: value,
		};
		setDogs(newDogs);
		setFoods(updateFoods(selectedDogType, foods, newDogs, period));
	};

	const handlePeriodChange = (newStart: Dayjs | null, newEnd: Dayjs | null) => {
		setStart(newStart);
		setEnd(newEnd);

		if (newStart === null || newEnd === null) {
			snackbarGenerator.error("Помилка, одна з дат пуста.");
			return;
		}

		if (newStart > newEnd) {
			snackbarGenerator.error(
				"Помилка, період закінчується раніше ніж починається."
			);
			return;
		}

		const newPeriod = newEnd.diff(newStart, "day");
		setPeriod(newPeriod);

		setFoods(updateFoods(selectedDogType, foods, dogs, newPeriod));
	};

	const handleSelect = (dogType: SelectOptions) => {
		setSelectedDogType(dogType);
		setFoods(updateFoods(dogType, foods, dogs, period));
	};

	return (
		<Grid container spacing={2} p={1}>
			<Sidebar opened={openedSidebar} onClose={closeSidebar}>
				<Box height='100%' display='flex' flexDirection='column' gap={1}>
					<DateRangePicker
						baseStart={start}
						baseEnd={end}
						onPeriodChange={handlePeriodChange}
					/>

					<Divider sx={{ m: 1 }} />

					<Typography display='inline-block' variant='body1'>
						Собаки:
					</Typography>
					<Box
						height='100%'
						display='flex'
						flexDirection='column'
						justifyContent='space-between'>
						{Object.keys(DOGS_STATE).map((dog) => (
							<Input
								key={dog}
								name={dog as DogType}
								value={dogs[dog as DogType]}
								onChange={handleDogCountChange}
							/>
						))}
					</Box>
				</Box>
			</Sidebar>

			<Grid item xs={12}>
				<Typography textAlign='center' variant='h5'>
					{`Розрахунок потреби у натуральних продуктах для годування
					службових собак (відповідно до ПКМУ від 15.10.2001 №1348)`}
				</Typography>
			</Grid>

			<Grid item xs></Grid>
			<Grid item container xs={12} md={8} spacing={2} alignItems='center'>
				<Grid item xs={12} md={4}>
					<Button
						disabled={openedSidebar}
						variant='outlined'
						fullWidth
						onClick={openSidebar}>
						Ввести дані
					</Button>
				</Grid>
				<Grid item xs={12} md={4}>
					<Select
						selectedValue={selectedDogType}
						selectLabel='Класифікація собак'
						onChange={handleSelect}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Button variant='outlined' fullWidth onClick={downloadExcel}>
						Завантажити
					</Button>
				</Grid>

				<Grid container item direction='column' gap={2}>
					<Article label={NAME_COLUMN} value={VALUE_COLUMN} />
					<Divider />

					{Object.keys(TABLE_STATE).map((food) => {
						const key = food as FoodType;

						return (
							<Article
								key={key}
								label={DOG_FOODS[key].name}
								value={foods[key]}
							/>
						);
					})}
				</Grid>
			</Grid>
			<Grid item xs></Grid>
			<ScrollButton />
		</Grid>
	);
}
