import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	width: 500px;
	margin: 200px auto;
	justify-content: center;
	align-items: center;
`

export const Loading = styled.div`
	border: 6px solid #f3f3f3;
	border-radius: 50%;
	border-top: 6px solid black;
	margin-left: 10px;
	width: 80px;
	height: 80px;
	-webkit-animation: spin 2s linear infinite; /* Safari */
	animation: spin 2s linear infinite;
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
