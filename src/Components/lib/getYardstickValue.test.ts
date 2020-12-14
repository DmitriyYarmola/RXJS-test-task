import { getYardstickValue } from './getYardstickValue'

const yardstickTemperature = { type: 'temperature', value: 320 }
const yardstickAirPressure = { type: 'airPressure', value: 200 }
const yardstickHumidity = { type: 'humidity', value: 50 }
const yardstickNA = { type: 'test', value: 'N/A' }
describe('Get value from one yardstick', () => {
	test('Get temperature value', () => {
		const value = getYardstickValue(yardstickTemperature)
		expect(value).toBe(320)
	})

	test('Get temperature value', () => {
		const value = getYardstickValue(yardstickAirPressure)
		expect(value).toBe(200)
	})

	test('Get temperature value', () => {
		const value = getYardstickValue(yardstickHumidity)
		expect(value).toBe(50)
	})

	test('Get temperature value', () => {
		const value = getYardstickValue(yardstickNA)
		expect(value).toBe('N/A')
	})
})
