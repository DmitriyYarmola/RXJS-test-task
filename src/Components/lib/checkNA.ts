import { merge, Observable } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators'
import { InformationBoardType } from '@src/Interfaces'

export const checkNA = (observables: Observable<InformationBoardType>[]) => {
	return observables.map((observable) => {
		const withNA = observable.pipe(
			debounceTime(1000),
			map((yardstick) => {
				return { ...yardstick, value: 'N/A' }
			})
		)
		return merge(observable, withNA)
	})
}
