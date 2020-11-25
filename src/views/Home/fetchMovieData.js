

const fetchMovieData = async function() {
	const request = 'https://sometimes-maybe-flaky-api.gdshive.io/'

	const response = await fetch(request)
	const movies = await response.json()

	// Ensure movies data is Array and has name property
	if (
		!Array.isArray(movies) ||
		!movies.every(m => m.name)
	) {
		throw 'Data invalid'
	}

	return movies
}


export default fetchMovieData