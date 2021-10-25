import styled from 'styled-components'

export const Container = styled.div`
	border: 2px solid black;
	margin: 20px auto;
	border-radius: 5px;
	font-family: 'verdana';
	color: black;
	background-size: cover;
	width: 200px;
	height: 300px;
	background-image: ${(props) => (props.url ? `url(${props.url})` : 'red')};
	opacity: 0.7;
	:hover {
		opacity: 1;
		cursor: pointer;
	}
	box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.8);
	> div {
		justify-content: space-between;
		background: black;
		opacity: 0.6;
		font-size: 25px;
		color: white;
		display: flex;
		position: relative;
		top: 232px;
		bottom: 0;
		padding: 5px;
		div {
			display: flex;
			align-items: center;
		}
	}
`

export const HeroName = styled.h3`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	background-color: red;
	opacity: 0.7;
	font-size: 16px;
`
