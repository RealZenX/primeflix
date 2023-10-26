import type { PageLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	const fetchDetails = async () => {
    const { id } = params;
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
    const data = await res.json();
    return data;
  }

  const fetchSimilar = async (id: string) => {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`);
    const data = await res.json();
    return data.results; 
  }

  const { id } = params;
  const [details, similar] = await Promise.all([
    fetchDetails(),
    fetchSimilar(id),
  ]);

	return {
    details,
    similar,
  };
}) satisfies PageLoad;