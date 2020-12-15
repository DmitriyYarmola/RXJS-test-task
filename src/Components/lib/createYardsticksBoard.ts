import { combineLatest, Observable } from 'rxjs'
import { filter, map, throttleTime } from 'rxjs/operators'
import { InformationBoardType } from '@src/Interfaces'
import { checkNA } from './checkNA'

export const combineLatestObservables = (
	observables: Observable<InformationBoardType>[]
) => {
	return combineLatest(checkNA(observables), (...yardsticks) => {
		return {
			yardsticks,
		}
	})
}

export const createYardsticksBoard = (
	observables: Observable<InformationBoardType>[]
) => {
	return combineLatestObservables(observables).pipe(
		map(({ yardsticks }) => yardsticks),
		throttleTime(100)
	)
}
