import React, { useEffect, useState } from 'react'
import { Observable } from 'rxjs'
import { Cards } from '@Components/UI'
import { createInformationCards } from '@Components/lib'
import { InformationBoardType } from '@src/Interfaces'

export const App = (): React.ReactElement => {
	const [informationCards, setInformationCards] = useState<Observable<
		InformationBoardType[]
	> | null>(null)

	useEffect(() => {
		setInformationCards(createInformationCards())
	}, [])

	return (
		<div>
			<Cards cards={informationCards} />
		</div>
	)
}
