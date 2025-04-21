'use client'

import styled from 'styled-components'

const Main = styled.main`
	min-height: 100svh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Card = styled.div`
	border: 2px solid white;
	border-radius: 4px;
	max-width: 800px;
	padding: 20px;
`

const CardHeading = styled.div`
	padding-bottom: 20px;
	width: 100&;
`
const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8px;

	width: 100&;
`

const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

export { Main, Card, CardHeading, CardContent, IconContainer }
