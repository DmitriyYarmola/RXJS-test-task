import React from 'react'
import styled from 'styled-components'

interface PropsTypes {
	icon: string
	title: string
	subtitle?: string | number
}
export const Card: React.FC<PropsTypes> = ({ icon, title, subtitle }) => {
	return (
		<CardComponent data-test='dateTab1'>
			<Icon src={icon} alt='' />
			<Title>{title}</Title>
			<SubTitle>{subtitle}</SubTitle>
		</CardComponent>
	)
}

const CardComponent = styled.div`
	text-align: center;
	background: cornsilk;
	padding: 100px 0;
	border-radius: 4px;
	height: max-content;
`
const Title = styled.h2``
const SubTitle = styled.div``
const Icon = styled.img`
	width: 40px;
`
