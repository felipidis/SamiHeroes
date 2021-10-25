import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import HeroCard from '../../components/HeroCard'
import HeroModal from '../../components/HeroModal'
import Loader from '../../components/Loader'
import api from '../../services/api'
import { Background, Button, ButtonContainer, HeroesContainer } from './styles'

function Home() {
	const [heroes, setHeroes] = useState([])
	const [searchInput, setSearchInput] = useState('')
	const [heroesSearched, setHeroesSearched] = useState([])
	const [searching, setSearching] = useState(false)
	const [firstLoading, setFirstLoading] = useState(true)
	const [showModal, setShowModal] = useState(false)
	const [chosedHero, setChosedHero] = useState({})
	const [currentPage, setCurrentPage] = useState(1)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		async function fetchData() {
			let i = heroes.length + 1
			while (i <= heroes.length + 20) {
				if (i > 731) {
					break
				}
				const response = await api.get(i.toString())
				console.log(response.data)
				setHeroes((array) => [...array, response.data])
				i++
			}
			setFirstLoading(false)
			setIsLoading(false)
		}
		fetchData()
	}, [currentPage])

	useEffect(() => {
		console.log('AE PORRA', heroesSearched)
	}, [heroesSearched])

	function handleLoadMoreHeroes() {
		setCurrentPage(currentPage + 1)
		setIsLoading(true)
	}

	function handleCancelSearch() {
		setSearching(false)
		setSearchInput('')
	}

	async function getSearchedHeroes() {
		setFirstLoading(true)
		const response = await api.get(`search/${searchInput}`)
		if (response.data.error) {
			alert('Hero not found!')
			setSearching(false)
		} else {
			setSearching(true)
			setHeroesSearched(response.data.results)
		}
		setFirstLoading(false)
	}

	return (
		<Background>
			<Header
				value={searchInput}
				onChange={(event) => setSearchInput(event.target.value)}
				onClick={getSearchedHeroes}
			/>
			{firstLoading ? (
				<>
					<Loader />
				</>
			) : (
				<div>
					{searching ? (
						<HeroesContainer>
							{heroesSearched.map((hero) => (
								<HeroCard
									onClick={() => {
										setShowModal(true)
										setChosedHero(hero)
									}}
									key={hero.id}
									heroes={hero}
								></HeroCard>
							))}
						</HeroesContainer>
					) : (
						<HeroesContainer>
							{heroes.map((hero) => (
								<HeroCard
									onClick={() => {
										setShowModal(true)
										setChosedHero(hero)
									}}
									key={hero.id}
									heroes={hero}
								></HeroCard>
							))}
						</HeroesContainer>
					)}

					{isLoading ? (
						<Loader />
					) : searching ? (
						<ButtonContainer>
							<Button type='button' onClick={handleCancelSearch}>
								Back to main list
							</Button>
						</ButtonContainer>
					) : (
						<ButtonContainer>
							<Button type='button' onClick={handleLoadMoreHeroes}>
								Load more Heroes
							</Button>
						</ButtonContainer>
					)}
				</div>
			)}
			{showModal && (
				<HeroModal heroInfo={chosedHero} onClose={() => setShowModal(false)} />
			)}
		</Background>
	)
}

export default Home
