import React from 'react'
import { Button, Container, Img, InfoContainer, Modal, Infos } from './styles'
import { AiFillCloseCircle } from 'react-icons/ai'

function HeroModal({ onClose, heroInfo }) {
	console.log(heroInfo)
	return (
		<Container>
			<Modal>
				<div>
					<Button onClick={onClose} type='button'>
						<AiFillCloseCircle size={25} />
					</Button>
				</div>
				<InfoContainer>
					<Img src={heroInfo.image?.url} alt='' />
					<Infos>
						<h3>{heroInfo.name ? heroInfo.name : ' Unavailable'}</h3>
						<p>
							Full Name:
							{heroInfo.biography['full-name']
								? heroInfo.biography['full-name']
								: ' Unavailable'}
						</p>
						<p>Place of birth: {heroInfo.biography['place-of-birth']}</p>
						<p>Debut: {heroInfo.biography['first-appearance']}</p>
						<p>Publisher: {heroInfo.biography['publisher']}</p>
						<p>Alignment: {heroInfo.biography['alignment']}</p>
						<br />
						<hr />
						<br />
						<p>Ocupation: {heroInfo.work['occupation']}</p>
						<p>Base: {heroInfo.work['base']}</p>
						<p>{heroInfo.aliases}</p>
					</Infos>
				</InfoContainer>
			</Modal>
		</Container>
	)
}

export default HeroModal
