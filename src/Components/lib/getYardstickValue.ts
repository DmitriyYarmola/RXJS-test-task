import { InformationBoardType, StateActionType } from '@src/Interfaces'

export const getYardstickValue = (
	yardstick: InformationBoardType,
	pushToTemperatureState?: StateActionType,
	pushToAirPressureState?: StateActionType,
	pushToHumidityState?: StateActionType
) => {
	switch (yardstick.type) {
		case 'temperature':
			pushToTemperatureState?.(yardstick.value)
			return yardstick.value
		case 'airPressure':
			pushToAirPressureState?.(yardstick.value)
			return yardstick.value
		case 'humidity':
			pushToHumidityState?.(yardstick.value)
			return yardstick.value
		default:
			return 'N/A'
	}
}
