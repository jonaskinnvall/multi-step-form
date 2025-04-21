'use client'

import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeading, Main } from '../page.style'
import { useFormContext } from '../lib/form-context'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {
	ButtonContainer,
	Form,
	FormMessage,
	NextButton,
	PrevButton,
	RadioCard,
	RadioGroup,
} from '../form.style'
import { HouseIcon } from 'lucide-react'

const StepTwoSchema = z.object({
	roof_size: z.enum(['small', 'medium', 'large', '']),
})

type SchemaType = z.infer<typeof StepTwoSchema>

export default function Home() {
	const router = useRouter()

	const [formData, setFormData] = useFormContext()

	const form = useForm<SchemaType>({
		resolver: zodResolver(StepTwoSchema),
		values: formData,
	})

	function onSubmit(data: SchemaType) {
		setFormData({ ...formData, roof_size: data.roof_size })
		router.push('/estimate')
	}

	return (
		<Main>
			<Card>
				<CardHeading>
					<h1>Approximate roof size</h1>
				</CardHeading>
				<CardContent>
					<Form onSubmit={form.handleSubmit(onSubmit)}>
						<RadioGroup>
							<RadioCard>
								<HouseIcon size="16px" />
								<label htmlFor="small">Small</label>
								<input
									type="radio"
									{...form.register('roof_size')}
									id="small"
									value="small"
								/>
							</RadioCard>
							<RadioCard>
								<HouseIcon size="20px" />
								<label htmlFor="medium">Medium</label>
								<input
									type="radio"
									{...form.register('roof_size')}
									id="medium"
									value="medium"
								/>
							</RadioCard>
							<RadioCard>
								<HouseIcon size="24px" />
								<label htmlFor="large">Large</label>
								<input
									type="radio"
									{...form.register('roof_size')}
									id="large"
									value="large"
								/>
							</RadioCard>
						</RadioGroup>
						{form.formState.errors.roof_size && (
							<FormMessage>
								{form.formState.errors.roof_size.message}
							</FormMessage>
						)}
						<ButtonContainer>
							<PrevButton href="/">Previous</PrevButton>
							<NextButton type="submit">Next</NextButton>
						</ButtonContainer>
					</Form>
				</CardContent>
			</Card>
		</Main>
	)
}
