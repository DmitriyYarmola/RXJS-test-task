import { combineLatestObservables, createYardsticksBoard } from './createYardsticksBoard'
import { createYardsticks } from './createInformationCards'

const yardstickObjectFirst = {
	minTime: 100,
	maxTime: 2000,
	minValue: 1,
	maxValue: 40,
	type: 'temperature',
}

const yardsticks = createYardsticks([
	yardstickObjectFirst,
	yardstickObjectFirst,
	yardstickObjectFirst,
])

describe('Create information board', () => {
	test('All observables should have value', () => {
		const combinedLatestObservables = combineLatestObservables(yardsticks)
		combinedLatestObservables.subscribe(({ yardsticks }) => {
			expect(yardsticks.length).toBe(3)
		})
	})

	describe('Create information board', () => {
		test('Should return only valid values, without N/A', () => {
			createYardsticksBoard(yardsticks).subscribe((yardticks) => {
				yardticks.forEach((yardstick) => expect(yardstick.value).not.toBe('N/A'))
			})
		})
	})
})
