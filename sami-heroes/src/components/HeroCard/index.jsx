import React from 'react'
import { Container, HeroName } from './styles'
import { GiSpinningSword, GiAmericanShield } from 'react-icons/gi'

function HeroCard({ heroes, onClick }) {
	const url = heroes.image?.url
	return (
		<Container onClick={onClick} url={url}>
			<HeroName>{heroes.name}</HeroName>
			<div>
				<div>
					<GiSpinningSword size={35} />
					<span>
						{heroes.powerstats.strength === 'null'
							? '0'
							: heroes.powerstats.strength}
					</span>
				</div>

				<div>
					<GiAmericanShield size={35} />
					<span>
						{heroes.powerstats.durability === 'null'
							? '0'
							: heroes.powerstats.durability}
					</span>
				</div>
			</div>
		</Container>
	)
}

export default HeroCard
