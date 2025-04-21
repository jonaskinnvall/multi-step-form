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
	InputContainer,
	PrevButton,
	SubmitButton,
} from '../form.style'

const LastStepSchema = z.object({
	name: z.string().min(1).max(100),
	email: z.string().email(),
	phone: z.string(),
	postal_code: z.string().length(5),
})

type SchemaType = z.infer<typeof LastStepSchema>

export default function Home() {
	const router = useRouter()

	const [formData, setFormData] = useFormContext()

	const form = useForm<SchemaType>({
		resolver: zodResolver(LastStepSchema),
		values: formData,
	})

	function onSubmit(data: SchemaType) {
		setFormData({
			...formData,
			name: data.name,
			email: data.email,
			phone: data.phone,
			postal_code: data.postal_code,
		})
		router.push('/success')
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
							<label htmlFor="name">Name</label>
							<input {...form.register('name')} id="name" />
						</InputContainer>
						{form.formState.errors.name && (
							<FormMessage>{form.formState.errors.name.message}</FormMessage>
						)}
						<InputContainer>
							<label htmlFor="email">Email</label>
							<input type="email" {...form.register('email')} id="email" />
						</InputContainer>
						{form.formState.errors.email && (
							<FormMessage>{form.formState.errors.email.message}</FormMessage>
						)}
						<InputContainer>
							<label htmlFor="phone">Phone</label>
							<input {...form.register('phone')} id="phone" />
						</InputContainer>
						{form.formState.errors.phone && (
							<FormMessage>{form.formState.errors.phone.message}</FormMessage>
						)}
						<InputContainer>
							<label htmlFor="postal_code">Postal Code</label>
							<input {...form.register('postal_code')} id="postal_code" />
						</InputContainer>
						{form.formState.errors.postal_code && (
							<FormMessage>
								{form.formState.errors.postal_code.message}
							</FormMessage>
						)}
						<ButtonContainer>
							<PrevButton href="/estimate">Previous</PrevButton>
							<SubmitButton type="submit">Submit information</SubmitButton>
						</ButtonContainer>
					</Form>
				</CardContent>
			</Card>
		</Main>
	)
}
