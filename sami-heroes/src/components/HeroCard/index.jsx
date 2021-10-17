import React from 'react'
import { Container } from './styles'

function HeroCard({ heroes }) {
	const url = heroes.image?.url
	return (
		<Container url={url}>
			<h3>{heroes.name}</h3>
		</Container>
	)
}

export default HeroCard
