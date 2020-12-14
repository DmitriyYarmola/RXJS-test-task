import { combineLatest, Observable } from 'rxjs'
import { filter, map, throttleTime } from 'rxjs/operators'
import { checkNA } from './checkNA'

export const combineLatestObservables = (observables: Observable<number>[]) => {
	return combineLatest(
		checkNA(observables),
		(observableTemperature, observableAirPressure, observableHumidity) => {
			const yardsticks = [
				{ type: 'temperature', value: observableTemperature },
				{ type: 'airPressure', value: observableAirPressure },
				{ type: 'humidity', value: observableHumidity },
			]
			return {
				yardsticks,
				yardstick: yardsticks[0],
			}
		}
	)
}
export const createYardsticksBoard = (observables: Observable<number>[]) => {
	return combineLatestObservables(observables).pipe(
		filter(({ yardstick }) => yardstick.value !== 'N/A'),
		map(({ yardsticks }) => yardsticks),
		throttleTime(100)
	)
}
