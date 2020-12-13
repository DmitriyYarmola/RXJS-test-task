import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { map, takeUntil } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Card } from '../Atoms'
import { airPressureIcon, humidityIcon, temperateIcon } from '../Images'

interface PropsTypes {
	cards: Observable<(string | number)[]> | null
}
export const Cards: React.FC<PropsTypes> = ({ cards }) => {
	const [yardsticksInformation, setYardsticksInformation] = useState<{
		[key: string]: string | number
	}>()
	useEffect(() => {
		const loadObservable = new Observable()
		if (cards) {
			cards
				.pipe(
					map((values: (number | string)[]) => {
						const [temperature, humidity, airPressure] = values
						return { temperature, humidity, airPressure }
					}),
					takeUntil(loadObservable)
				)
				.subscribe(
					(
						yardsticksInformation: React.SetStateAction<
							{ [key: string]: React.ReactText } | undefined
						>
					) => {
						setYardsticksInformation(yardsticksInformation)
					}
				)
		}
	}, [cards])
	return (
		<Items>
			<Card
				icon={temperateIcon}
				title='Temperature'
				subtitle={yardsticksInformation?.temperature || 'N/A'}
			/>
			<Card
				icon={humidityIcon}
				title='Humidity'
				subtitle={yardsticksInformation?.humidity || 'N/A'}
			/>
			<Card
				icon={airPressureIcon}
				title='Air pressure'
				subtitle={yardsticksInformation?.airPressure || 'N/A'}
			/>
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
