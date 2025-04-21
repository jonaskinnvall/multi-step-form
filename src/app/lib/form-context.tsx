'use client'
import { createContext, useContext, useMemo, useState } from 'react'

type FormValuesType = {
	monthly_bill: number | ''
	roof_size: string
	est_savings: number | ''
	est_co2_reduction: number | ''
	name: string
	email: string
	phone: number | ''
	postal_code: number | ''
}

const FormContext = createContext<
	| [FormValuesType, React.Dispatch<React.SetStateAction<FormValuesType>>]
	| undefined
>(undefined)
FormContext.displayName = 'FormContext'

type FormContextProviderProps = { children: React.ReactNode }
function FormContextProvider({ children }: FormContextProviderProps) {
	const [formData, setFormData] = useState<FormValuesType>({
		monthly_bill: '',
		roof_size: '',
		est_savings: '',
		est_co2_reduction: '',
		name: '',
		email: '',
		phone: '',
		postal_code: '',
	})

	const value = useMemo<
		[FormValuesType, React.Dispatch<React.SetStateAction<FormValuesType>>]
	>(() => [formData, setFormData], [formData, setFormData])

	return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

function useFormContext() {
	const context = useContext(FormContext)
	if (context === undefined) {
		throw new Error(`useFormContext must be used within a FormContext`)
	}
	return context
}

export { FormContextProvider, useFormContext }
