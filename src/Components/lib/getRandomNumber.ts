export const getRandomNumber = (min?: number, max?: number) =>
	min && max ? Math.floor(min + Math.random() * (max + 1 - min)) : Math.random()
