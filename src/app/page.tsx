"use client";

import { Article } from "@/components/Article";
import { Input } from "@/components/Input";
import {
	DOGS_STATE,
	DOG_FOODS,
	DogType,
	FoodType,
	TABLE_STATE,
} from "@/constants/dogs";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useState } from "react";

const daysInYear = () => {
	const year = new Date().getFullYear();
	return (year % 4 === 0 && year % 100 > 0) || year % 400 == 0 ? 366 : 365;
};

const getPuppiesFood = (food: number[], puppies: number) => {
	if (!food || !food.length) return "";

	if (food.length === 1) {
		return food[0] * puppies * daysInYear();
	}

	return `${food[0] * puppies * daysInYear()} - ${
		food[1] * puppies * daysInYear()
	}`;
};

const sumFood = (key: FoodType, dogs: typeof DOGS_STATE) => {
	const { tribal, search, reserve, puppies } = DOG_FOODS[key].dogs;
	const puppiesFood = getPuppiesFood(puppies, dogs.puppies);
	const adultDogFood =
		(tribal * dogs.tribal + search * dogs.search + reserve * dogs.reserve) *
		daysInYear();

	if (typeof puppiesFood === "string") {
		return `${adultDogFood} + для цуценят: ${puppiesFood}`;
	}

	return adultDogFood + puppiesFood;
};

const updateFoods = (foods: typeof TABLE_STATE, dogs: typeof DOGS_STATE) => {
	const newFoods = { ...foods };

	Object.entries(newFoods).map(([key, oldFood]) => {
		const foodType = key as FoodType;

		newFoods[foodType] = String(sumFood(foodType, dogs));
	});

	return newFoods;
};

export default function Home() {
	const [dogs, setDogs] = useState(DOGS_STATE);
	const [foods, setFoods] = useState(TABLE_STATE);

	const calculate = (name: DogType, value: number) => {
		const newDogs = {
			...dogs,
			[name]: value,
		};
		setDogs(newDogs);
		setFoods(updateFoods(foods, newDogs));
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography textAlign='center' variant='h5'>
					Норма годування службових собак
				</Typography>
			</Grid>
			<Grid item xs></Grid>
			<Grid item xs={8} display='flex' flexDirection='column'>
				<Box display='flex' justifyContent='space-between'>
					{Object.keys(DOGS_STATE).map((dog) => (
						<Input key={dog} name={dog as DogType} onChange={calculate} />
					))}
				</Box>
				<Box display='flex' flexDirection='column' gap={2}>
					<Article label='Назва продукту' value='Кількість, грамм' />
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
				</Box>
			</Grid>
			<Grid item xs></Grid>
		</Grid>
	);
}

