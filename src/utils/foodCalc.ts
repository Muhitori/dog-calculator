import {
	FoodType,
	DOG_FOODS,
	TABLE_STATE,
	DogsState,
	SelectOptions,
	DogType,
} from "@/constants/dogs";

const normalize = (value: number) => (value / 1000).toFixed(3);

const getPuppiesFood = (
	key: FoodType,
	food: number[],
	puppies: number,
	period: number
) => {
	if (!food || !food.length) return "";

	if (food.length === 1) {
		const result = food[0] * puppies * period;
		return key === "eggs" ? `${result} штук` : normalize(result);
	}

	const min = food[0] * puppies * period;
	const max = food[1] * puppies * period;

	if (key === "calcium") {
		return `${min * 3} - ${max * 3} таблеток`;
	}

	return `${normalize(min)} - ${normalize(max)}`;
};

const getAllDogFood = (key: FoodType, dogs: DogsState, period: number) => {
	const { tribal, search, reserve, puppies } = DOG_FOODS[key].dogs;

	const puppiesFood = getPuppiesFood(key, puppies, dogs.puppies, period);
	const adultDogFood = normalize(
		(tribal * dogs.tribal + search * dogs.search + reserve * dogs.reserve) *
			period
	);

	if (typeof puppiesFood === "string") {
		return `${adultDogFood} + для цуценят: ${puppiesFood}`;
	}

	return adultDogFood + puppiesFood;
};

const getAdultDogFood = (
	dogType: DogType,
	key: FoodType,
	dogs: DogsState,
	period: number
) => {
	const dogCount = dogs[dogType];
	const dogFood = DOG_FOODS[key].dogs[dogType] as number;

	return normalize(dogCount * dogFood * period);
};

export const updateFoods = (
	dogType: SelectOptions,
	foods: typeof TABLE_STATE,
	dogs: DogsState,
	period: number
) => {
	const newFoods = { ...foods };

	Object.keys(newFoods).map((key) => {
		const foodType = key as FoodType;

		if (dogType === "all") {
			newFoods[foodType] = String(getAllDogFood(foodType, dogs, period));
		} else if (dogType !== "puppies") {
			newFoods[foodType] = String(
				getAdultDogFood(dogType, foodType, dogs, period)
			);
		} else {
			newFoods[foodType] = String(
				getPuppiesFood(
					foodType,
					DOG_FOODS[foodType].dogs.puppies,
					dogs.puppies,
					period
				)
			);
		}
	});

	return newFoods;
};
