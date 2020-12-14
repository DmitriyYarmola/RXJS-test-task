import { checkNA } from './checkNA'
import { createYardsticks } from './createInformationCards'

const yardstickObjectFirst = { minTime: 100, maxTime: 2000, minValue: 1, maxValue: 40 }

const yardsticksNA = checkNA(
	createYardsticks([yardstickObjectFirst, yardstickObjectFirst, yardstickObjectFirst])
)

describe('Check on N/A', () => {
	test('Value should be N/A', () => {
		yardsticksNA.map((yardstick) => {
			return yardstick.subscribe((value) => {
				expect(value).toBe('N/A')
			})
		})
	})
})
