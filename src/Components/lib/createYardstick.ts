import { Observable, Subscriber } from 'rxjs'
import { getRandomNumber } from './getRandomNumber'

export const createYardstick = (
	minTime: number,
	maxTime: number,
	minValue: number,
	maxValue: number
) => {
	return new Observable((subscriber: Subscriber<number>) => {
		;(function push() {
			const randomValue = getRandomNumber(minValue, maxValue)
			const randomTime = getRandomNumber(minTime, maxTime)
			const timeout = setTimeout(() => {
				subscriber.next(randomValue)
				push()
			}, randomTime)
			return () => clearTimeout(timeout)
		})()
	})
}
