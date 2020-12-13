import { merge, Observable } from 'rxjs'
import { debounceTime, mapTo } from 'rxjs/operators'

export const checkNA = (observables: Observable<number>[]) => {
	return observables.map((observable) => {
		const value = observable.pipe(debounceTime(1000), mapTo('N/A'))
		return merge(observable, value)
	})
}
