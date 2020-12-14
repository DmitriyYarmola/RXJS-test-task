export const yardsticks = [
	{ minTime: 100, maxTime: 2000, minValue: 1, maxValue: 40, type: 'temperature' },
	{ minTime: 100, maxTime: 2000, minValue: 1, maxValue: 100, type: 'airPressure' },
	{ minTime: 100, maxTime: 2000, minValue: 1, maxValue: 100, type: 'humidity' },
]

export type YardstickType = typeof yardsticks
