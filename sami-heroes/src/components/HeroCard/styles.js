import styled from 'styled-components'

export const Container = styled.div`
	border: 2px solid black;
	margin: 20px auto;
	border-radius: 5px;
	font-family: 'verdana';
	padding: 5px;
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
`
