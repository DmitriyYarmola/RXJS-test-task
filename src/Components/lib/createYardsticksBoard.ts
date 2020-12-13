import { combineLatest, Observable } from 'rxjs'
import { map, throttleTime } from 'rxjs/operators'
import { checkNA } from './checkNA'

export const createYardsticksBoard = (observables: Observable<number>[]) => {
	return combineLatest(
		checkNA(observables),
		(observableTemperature, observableAirPressure, observableHumidity) => {
			const values = [
				observableTemperature,
				observableAirPressure,
				observableHumidity,
			].map((value) => value)
			return {
				values,
			}
		}
	).pipe(
		throttleTime(100),
		map(({ values }) => values)
	)
}
