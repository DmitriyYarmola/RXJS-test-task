import { checkNA } from './checkNA'
import { createYardsticks } from './createInformationCards'

const yardstickObjectFirst = {
	minTime: 100,
	maxTime: 2000,
	minValue: 1,
	maxValue: 40,
	type: 'temperatures',
}

const yardsticksNA = checkNA(
	createYardsticks([yardstickObjectFirst, yardstickObjectFirst, yardstickObjectFirst])
)

describe('Check on N/A', () => {
	test('Value should be N/A', () => {
		yardsticksNA.map((yardstick) => {
			return yardstick.subscribe((yardstickItem) => {
				expect(yardstickItem.value).toBe('N/A')
			})
		})
	})
})
