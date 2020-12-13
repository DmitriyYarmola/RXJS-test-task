import React, { useEffect, useState } from 'react'
import { Observable } from 'rxjs'
import { Cards } from '@Components/UI'
import { createInformationBoard } from '@Components/lib'

export const App = (): React.ReactElement => {
	const [informationBoard, setInformationBoard] = useState<Observable<
		(string | number)[]
	> | null>(null)

	useEffect(() => {
		setInformationBoard(createInformationBoard())
	}, [])

	return (
		<div>
			<Cards cards={informationBoard} />
		</div>
	)
}
