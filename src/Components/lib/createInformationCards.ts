import { createYardstick } from './createYardstick'
import { createYardsticksBoard } from './createYardsticksBoard'
import { yardsticks, YardstickType } from './yardsticks'

export const createYardsticks = (yardsticks: YardstickType) => {
	return yardsticks.map(({ minTime, maxTime, minValue, maxValue }) => {
		return createYardstick(minTime, maxTime, minValue, maxValue)
	})
}

export const createInformationCards = () => {
	const yardsticksObservables = createYardsticks(yardsticks)
	return createYardsticksBoard(yardsticksObservables)
}
