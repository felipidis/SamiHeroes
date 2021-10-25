import React from 'react'
import { Container, Title, SearchContainer } from './styles'
import { BiSearchAlt } from 'react-icons/bi'
function Header({ value, onChange, onClick }) {
	return (
		<Container>
			<Title>SAMI HEROES</Title>
			<SearchContainer>
				<input
					type='text'
					value={value}
					onChange={onChange}
					placeholder='Ex: Asa Noturna'
				/>
				<button onClick={onClick}>
					<BiSearchAlt size={25} />
				</button>
			</SearchContainer>
		</Container>
	)
}

export default Header
