import data from '/pages/index.json'

export async function get() {

	return {
		body: {
			pageDetails: data
		}
	};
}