import { createYardstick } from './createYardstick'

const yardstickObject = {
	minTime: 100,
	maxTime: 2000,
	minValue: 1,
	maxValue: 40,
	type: 'temperature',
}
const { minTime, maxTime, minValue, maxValue, type } = yardstickObject

describe('CreateYardstick', () => {
	test('Emmit value from between minValue and maxValue', () => {
		const yardstick = createYardstick(minTime, maxTime, minValue, maxValue, type)
		yardstick.subscribe((yardstickItem) => {
			expect(yardstickItem.value).toBeGreaterThanOrEqual(minValue)
			expect(yardstickItem.value).toBeLessThanOrEqual(maxValue)
		})
	})
})
