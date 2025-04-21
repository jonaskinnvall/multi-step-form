'use client'

import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeading, Main } from './page.style'
import { useFormContext } from './lib/form-context'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Form, FormMessage, InputContainer, NextButton } from './form.style'

const StepOneSchema = z.object({
	monthly_bill: z.literal('').or(z.coerce.number().positive()),
})

type SchemaType = z.infer<typeof StepOneSchema>

export default function Home() {
	const router = useRouter()

	const [formData, setFormData] = useFormContext()

	const form = useForm<SchemaType>({
		resolver: zodResolver(StepOneSchema),
		values: formData,
	})

	function onSubmit(data: SchemaType) {
		setFormData({ ...formData, monthly_bill: data.monthly_bill })
		router.push('/roof-size')
	}

	return (
		<Main>
			<Card>
				<CardHeading>
					<h1>Average monthly energy bill</h1>
				</CardHeading>
				<CardContent>
					<Form onSubmit={form.handleSubmit(onSubmit)}>
						<InputContainer>
							<label htmlFor="bill">Amount</label>
							<input
								type="number"
								{...form.register('monthly_bill')}
								id="bill"
							/>
							<p>SEK</p>
						</InputContainer>
						{form.formState.errors.monthly_bill && (
							<FormMessage>
								{form.formState.errors.monthly_bill.message}
							</FormMessage>
						)}
						<NextButton type="submit">Next</NextButton>
					</Form>
				</CardContent>
			</Card>
		</Main>
	)
}
