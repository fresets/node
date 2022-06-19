export default definePreset({
	name: 'node',
	options: {
		// ...
	},
	handler: async() => {
		await extractTemplates()
		// ...
	},
})
