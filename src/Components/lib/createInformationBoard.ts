import { createYardstick } from './createYardstick'
import { createYardsticksBoard } from './createYardsticksBoard'
import { yardsticks, YardstickType } from './yardsticks'

const createYardsticks = (yardsticks: YardstickType) => {
	return yardsticks.map(({ minTime, maxTime, minValue, maxValue }) => {
		return createYardstick(minTime, maxTime, minValue, maxValue)
	})
}

export const createInformationBoard = () => {
	const yardsticksObservables = createYardsticks(yardsticks)
	return createYardsticksBoard(yardsticksObservables)
}
