import styled from 'styled-components'

export const Container = styled.header`
	background: darkred;
	width: 100%;
	height: 100px;
	display: flex;
	padding-left: 10px;
	padding-bottom: 5px;
	align-items: center;
	font-size: 2rem;

	@media screen and (max-width: 768px) {
		font-size: 1.5rem;
	}

	font-family: 'Courier New', Courier, monospace;
	animation: pulse 5s infinite;

	@keyframes pulse {
		0% {
			background-color: #2062d6;
		}
		50% {
			background-color: #ff4136;
		}
		100% {
			background-color: #2062d6;
		}
	}

	input {
		width: 90%;
		height: 25px;
		margin: 10px;
		margin-left: 30px;
		border: none;
		border-radius: 5px;
	}
	button {
		cursor: pointer;
		background-color: white;
		margin-right: 10px;
		border: none;
		border-radius: 5px;
	}

	@media screen and (max-width: 425px) {
		flex-direction: column;
		input {
			width: 70%;
		}
	}
`
export const Title = styled.h1`
	text-shadow: 0.1em 0.1em 0.2em black;
`
export const SearchContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	@media screen and (max-width: 425px) {
		width: 80%;
	}
`
