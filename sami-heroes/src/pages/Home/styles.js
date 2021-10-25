import styled from 'styled-components'

export const Background = styled.div`
	animation: scroll 70s linear infinite;
	background: url('https://wallpaperboat.com/wp-content/uploads/2019/10/free-space-background-01.jpg');
	min-width: 360px;
	min-height: 100vh;
	width: 100%;

	@keyframes scroll {
		100% {
			background-position: 0px -3000px;
		}
	}

	@media (prefers-reduced-motion) {
		.wrapper {
			animation: scroll 800s linear infinite;
		}
	}
`

export const HeroesContainer = styled.main`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	width: 100%;
	height: 100%;
	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (max-width: 425px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 375px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export const Button = styled.button`
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 5px;
	background-color: red;
	border: none;
	opacity: 0.7;
	&:hover {
		opacity: 1;
	}
`
