import { Observable, Subscriber } from 'rxjs'
import { InformationBoardType } from '@src/Interfaces'
import { getRandomNumber } from './getRandomNumber'

export const createYardstick = (
	minTime: number,
	maxTime: number,
	minValue: number,
	maxValue: number,
	type: string
) => {
	return new Observable((subscriber: Subscriber<InformationBoardType>) => {
		;(function push() {
			const randomValue = getRandomNumber(minValue, maxValue)
			const randomTime = getRandomNumber(minTime, maxTime)
			const timeout = setTimeout(() => {
				subscriber.next({ type, value: randomValue })
				push()
			}, randomTime)
			return () => clearTimeout(timeout)
		})()
	})
}
