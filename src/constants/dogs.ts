export const DOGS = {
	tribal: "племінні",
	search: "розшукові, патрульно-розшукові,сторожові, спеціальні",
	reserve: "вартові, резервні",
	puppies: "цуценята до 4-місячного віку",
};

export type DogType = keyof typeof DOGS;

export const DOG_FOODS = {
	oatmeal: {
		name: "Крупи вівсяні",
		dogs: {
			tribal: 420,
			search: 450,
			reserve: 400,
			puppies: [30, 200],
		},
	},
	millet: {
		name: "Пшоно або крупа ячнева чи пшенична",
		dogs: {
			tribal: 230,
			search: 200,
			reserve: 200,
			puppies: [20, 100],
		},
	},
	meat: {
		name: "М'ясо другої категорії або конина",
		dogs: {
			tribal: 700,
			search: 600,
			reserve: 500,
			puppies: [20, 300],
		},
	},
	submeat: {
		name: "або м'ясні субпродукти другої категорії",
		dogs: {
			tribal: 1750,
			search: 1500,
			reserve: 1250,
			puppies: [40, 800],
		},
	},
	milk: {
		name: "Молоко",
		dogs: {
			tribal: 0,
			search: 0,
			reserve: 0,
			puppies: [150, 800],
		},
	},
	eggs: {
		name: "Яйце куряче",
		dogs: {
			tribal: 0,
			search: 0,
			reserve: 0,
			puppies: [1],
		},
	},
	animalFat: {
		name: "Жир тваринний",
		dogs: {
			tribal: 20,
			search: 20,
			reserve: 15,
			puppies: [10],
		},
	},
	potato: {
		name: "Картопля",
		dogs: {
			tribal: 200,
			search: 200,
			reserve: 200,
			puppies: [80],
		},
	},
	beet: {
		name: "Буряки",
		dogs: {
			tribal: 20,
			search: 20,
			reserve: 20,
			puppies: [20],
		},
	},
	carrot: {
		name: "Морква",
		dogs: {
			tribal: 20,
			search: 20,
			reserve: 20,
			puppies: [20],
		},
	},
	salt: {
		name: "Сіль",
		dogs: {
			tribal: 15,
			search: 15,
			reserve: 15,
			puppies: [15],
		},
	},
	fishFat: {
		name: "Риб'ячий жир",
		dogs: {
			tribal: 0,
			search: 0,
			reserve: 0,
			puppies: [5, 20],
		},
	},
	meatBoneFlour: {
		name: "М'ясо-кісткове борошно",
		dogs: {
			tribal: 15,
			search: 15,
			reserve: 15,
			puppies: [0],
		},
	},
	chalk: {
		name: "Пшоно або крупа ячнева чи пшенична",
		dogs: {
			tribal: 0,
			search: 0,
			reserve: 0,
			puppies: [1, 2],
		},
	},
	calcium: {
		name: "Глюконат або гліцерофосфат кальцію",
		dogs: {
			tribal: 0,
			search: 0,
			reserve: 0,
			puppies: [1, 2],
		},
	},
	undevit: {
		name: "Ундевіт",
		dogs: {
			tribal: 3,
			search: 3,
			reserve: 3,
			puppies: [1, 1.5],
		},
	},
	vitaminD: {
		name: "Вітамін 'D' в олії",
		dogs: {
			tribal: 8,
			search: 8,
			reserve: 8,
			puppies: [1, 4],
		},
	},
};

export const DOGS_STATE = {
	tribal: 0,
	search: 0,
	reserve: 0,
	puppies: 0,
};

export const TABLE_STATE = {
	oatmeal: "",
	millet: "",
	meat: "",
	submeat: "",
	milk: "",
	eggs: "",
	animalFat: "",
	potato: "",
	beet: "",
	carrot: "",
	salt: "",
	fishFat: "",
	meatBoneFlour: "",
	chalk: "",
	calcium: "",
	undevit: "",
	vitaminD: "",
};

export type FoodType = keyof typeof DOG_FOODS;
