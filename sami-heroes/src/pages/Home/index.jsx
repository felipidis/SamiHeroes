import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import HeroCard from '../../components/HeroCard'
import Loader from '../../components/Loader'
import api from '../../services/api'
import { HeroesContainer } from './styles'

// import { Container } from './styles';

function Home() {
	const [heroes, setHeroes] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		async function fetchData() {
			let i = heroes.length + 1
			setIsLoading(true)
			while (i <= heroes.length + 20) {
				if (i > 731) {
					break
				}
				const response = await api.get(i.toString())
				console.log(response.data)
				setHeroes((arr) => [...arr, response.data])
				i++
			}
			setIsLoading(false)
		}
		fetchData()
	}, [])

	return (
		<div>
			<Header />
			{isLoading ? (
				<>
					<h1>teste</h1>
					<Loader />
				</>
			) : (
				<HeroesContainer>
					{heroes.map((hero) => (
						<HeroCard key={hero.id} heroes={hero}></HeroCard>
					))}
				</HeroesContainer>
			)}
		</div>
	)
}

export default Home
