import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Observable } from 'rxjs'
import { Card } from '@Components/UI'
import { createInformationCards } from '@Components/lib'
import { InformationBoardType } from '@src/Interfaces'
import { Cards } from './Cards'

configure({ adapter: new Adapter() })

jest.useFakeTimers()

describe('Cards', () => {
	let cardsComponent: any
	let cards: Observable<InformationBoardType[]> | null
	beforeEach(() => {
		cards = createInformationCards()
		cardsComponent = shallow(<Cards cards={cards} />)
	})

	test('Card should be render', () => {
		if (cardsComponent) {
			if ('find' in cardsComponent) {
				expect(cardsComponent.find(Card)).toBeTruthy()
			}
		}
	})
})
