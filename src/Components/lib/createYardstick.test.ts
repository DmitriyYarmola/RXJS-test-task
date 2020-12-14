import { createYardstick } from './createYardstick'

const yardstickObject = { minTime: 100, maxTime: 2000, minValue: 1, maxValue: 40 }
const { minTime, maxTime, minValue, maxValue } = yardstickObject

describe('CreateYardstick', () => {
	test('Emmit value from between minValue and maxValue', () => {
		const yardstick = createYardstick(minTime, maxTime, minValue, maxValue)
		yardstick.subscribe((value) => {
			expect(value).toBeGreaterThanOrEqual(minValue)
			expect(value).toBeLessThanOrEqual(maxValue)
		})
	})
})
