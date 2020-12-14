import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { map, takeUntil } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { getYardstickValue } from '@Components/lib'
import { InformationBoardType, ActionType } from '@src/Interfaces'
import { Card } from '../Atoms'
import { airPressureIcon, humidityIcon, temperateIcon } from '../Images'

interface PropsTypes {
	cards: Observable<InformationBoardType[]> | null
}
export const Cards: React.FC<PropsTypes> = ({ cards }) => {
	const [temperature, setTemperature] = useState<ActionType>('N/A')
	const [airPressure, setAirPressure] = useState<ActionType>('N/A')
	const [humidity, setHumidity] = useState<ActionType>('N/A')

	useEffect(() => {
		const loadObservable = new Observable()
		if (cards) {
			cards
				.pipe(takeUntil(loadObservable))
				.subscribe((yardsticksInformation: InformationBoardType[]) => {
					yardsticksInformation.forEach((yardstick) => {
						getYardstickValue(yardstick, setTemperature, setAirPressure, setHumidity)
					})
				})
		}
	}, [cards])

	return (
		<Items>
			<Card icon={temperateIcon} title='Temperature' subtitle={temperature} />
			<Card icon={humidityIcon} title='Humidity' subtitle={airPressure} />
			<Card icon={airPressureIcon} title='Air pressure' subtitle={humidity} />
		</Items>
	)
}

const Items = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 30px;
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
	height: 100vh;
	align-items: center;
`
