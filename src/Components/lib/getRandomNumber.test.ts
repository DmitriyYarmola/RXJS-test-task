import { getRandomNumber } from './getRandomNumber'

test('Should return random number from and to', () => {
	const minNumber = 1
	const maxNumber = 100

	const result = getRandomNumber(minNumber, maxNumber)

	expect(result).toBeGreaterThanOrEqual(minNumber)
	expect(result).toBeLessThanOrEqual(maxNumber)
})
