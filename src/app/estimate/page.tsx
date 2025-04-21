'use client'

import { Card, CardContent, CardHeading, Main } from '../page.style'
import { useFormContext } from '../lib/form-context'

import { useRouter } from 'next/navigation'
import { ButtonContainer, NextButton, PrevButton } from '../form.style'
import { getEstimatedCarbon, getEstimatedSavings } from '../lib/utils'

export default function Home() {
	const router = useRouter()

	const [formData] = useFormContext()

	return (
		<Main>
			<Card>
				<CardHeading>
					<h1>Improvements</h1>
				</CardHeading>
				<CardContent>
					<h2>Estimated monthly savings</h2>
					<p>
						{getEstimatedSavings(
							formData.monthly_bill as number,
							formData.roof_size,
						)}
					</p>
					<h2>Estimated CO2 reduction</h2>
					<p>{getEstimatedCarbon(formData.roof_size)}</p>
					<ButtonContainer>
						<PrevButton href="/roof-size">Previous</PrevButton>
						<NextButton onClick={() => router.push('/details')}>
							Next
						</NextButton>
					</ButtonContainer>
				</CardContent>
			</Card>
		</Main>
	)
}
