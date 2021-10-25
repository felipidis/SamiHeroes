import styled from 'styled-components'

export const Container = styled.div`
	position: fixed;
	z-index: 2;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;

	overflow: auto;
	::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		background: red;
		border-radius: 10px;
		&:hover {
			background: #b30000;
		}
	}
`
export const Modal = styled.div`
	background: url('https://media.istockphoto.com/photos/radial-background-of-halftones-and-highspeed-abstract-lines-for-anime-picture-id1028900996?b=1&k=20&m=1028900996&s=170667a&w=0&h=wjdn0fVMuHqPaGIaVmIAph-jq-CoUML8w70na2rPnPk=');
	background-color: white;
	background-repeat: no-repeat;
	background-size: cover;
	width: 50%;
	height: 70%;
	border: 5px solid black;
	border-radius: 10px;
	div {
		display: flex;
		justify-content: flex-end;
	}
	overflow: auto;
	padding: 8px;

	@media screen and (max-width: 1024px) {
		width: 80%;
	}
	@media screen and (max-width: 425px) {
		width: 90%;
	}
`
export const Button = styled.div`
	cursor: pointer;
	margin: 0.3em;
	opacity: 0.5;
	&:hover {
		opacity: 1;
	}
`
export const InfoContainer = styled.main`
	margin: 0 30px;
	display: flex;
	@media screen and (max-width: 425px) {
		display: block;
		margin: 10px;
	}
	justify-content: center;
`

export const Img = styled.img`
	display: flex;
	width: 200px;
	max-height: 300px;
	border-radius: 5px;
	@media screen and (max-width: 425px) {
		margin: 10px auto;
	}
`

export const Infos = styled.div`
	margin: 0 10px;
	display: flex;
	flex-direction: column;
	height: 100%;
`
