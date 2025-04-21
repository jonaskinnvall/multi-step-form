'use client'

import Link from 'next/link'
import styled from 'styled-components'

const Form = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	justify-content: center;
	align-items: center;
`

const FormMessage = styled.p`
	color: red;
`

const InputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	column-gap: 8px;

	width: 70%;
`

const RadioGroup = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
`

const RadioCard = styled.div`
	border: 1px solid white;
	border-radius: 4px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	align-items: center;
`

const Button = styled.button`
	font-size: 1rem;
	color: white;
	padding: 8px 12px;

	border: none;
	border-radius: 4px;

	&:hover {
		cursor: pointer;
	}

	&:focus {
		outline-color: white;
		outline-offset: 4px;
		border-radius: 2px;
	}
`

const ButtonContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
`

const NextButton = styled(Button)`
	background-color: cornflowerblue;
	&:hover {
		background-color: dodgerblue;
	}
`

const PrevButton = styled(Link)`
	padding: 8px 12px;
	border-radius: 4px;
	background-color: gray;
	&:hover {
		background-color: dimgray;
	}
`

const SubmitButton = styled(Button)`
	background-color: deeppink;
	&:hover {
		background-color: hotpink;
	}
`

export {
	Form,
	FormMessage,
	InputContainer,
	RadioGroup,
	RadioCard,
	Button,
	ButtonContainer,
	NextButton,
	PrevButton,
	SubmitButton,
}
