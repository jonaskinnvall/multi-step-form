function getEstimatedSavings(
	monthly_bill: number,
	roof_size: 'small' | 'medium' | 'large' | '',
): number {
	switch (roof_size) {
		case 'small':
			return monthly_bill * 0.2
		case 'medium':
			return monthly_bill * 0.5
		case 'large':
			return monthly_bill * 0.7
		default:
			return monthly_bill
	}
}

function getEstimatedCarbon(
	roof_size: 'small' | 'medium' | 'large' | '',
): number {
	switch (roof_size) {
		case 'small':
			return 10
		case 'medium':
			return 20
		case 'large':
			return 30
		default:
			return 0
	}
}

export { getEstimatedSavings, getEstimatedCarbon }
