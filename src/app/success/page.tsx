'use client'

import {
	Card,
	CardContent,
	CardHeading,
	IconContainer,
	Main,
} from '../page.style'

import { PartyPopperIcon } from 'lucide-react'

export default function Home() {
	return (
		<Main>
			<Card>
				<CardHeading>
					<h1>Success</h1>
				</CardHeading>
				<CardContent>
					<IconContainer>
						<PartyPopperIcon size="64px" />
					</IconContainer>
				</CardContent>
			</Card>
		</Main>
	)
}
