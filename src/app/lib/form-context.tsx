'use client'
import { createContext, useContext, useMemo, useState } from 'react'

type FormValuesType = {
	monthly_bill: number | ''
	roof_size: 'small' | 'medium' | 'large' | ''
	est_savings: number | ''
	est_co2_reduction: number | ''
	name: string
	email: string
	phone: string
	postal_code: string
}

const FormContext = createContext<
	| [FormValuesType, React.Dispatch<React.SetStateAction<FormValuesType>>]
	| undefined
>(undefined)
FormContext.displayName = 'FormContext'

type FormContextProviderProps = { children: React.ReactNode }
function FormContextProvider({ children }: FormContextProviderProps) {
	const initalFormData: string | null = window.localStorage.getItem('form-data')

	const [formData, setFormData] = useState<FormValuesType>(
		initalFormData !== null
			? JSON.parse(initalFormData)
			: {
					monthly_bill: '',
					roof_size: '',
					est_savings: '',
					est_co2_reduction: '',
					name: '',
					email: '',
					phone: '',
					postal_code: '',
			  },
	)

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
