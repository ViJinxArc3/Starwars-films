import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchCrawlForEpisode } from '@/utils/fetchCrawlData';
import Link from 'next/link';

const MovieDetailPage = () => {
  const router = useRouter();
  const { episodeId } = router.query;
  const [movieDetails, setMovieDetails] = useState(null);
  const [crawlText, setCrawlText] = useState('');
  //Make an API request to fetch movie details based on the episodeId from the router query.
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`https://swapi.dev/api/films/${episodeId}`);
        if (res.ok) {
          const data = await res.json();
          setMovieDetails(data);
        } else {
          console.error('Failed to fetch movie details');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    if (episodeId) {
      fetchMovieDetails();
    }
  }, [episodeId]);

  useEffect(() => {
    if (episodeId) {
      const crawl = fetchCrawlForEpisode(episodeId);
      if (crawl) {
        setCrawlText(crawl);
      } else {
        setCrawlText('Opening crawl not found.'); // Handle cases where crawl is not found
      }
    }
  }, [episodeId]);

  
  return (
    <div>
    <div className='film-details'>
      <h1>Movie Details</h1>
      {/* Render the movie details or a "Loading..." message based on whether the movieDetails are available. */}
      {movieDetails ? (
        <>
          <p>Episode ID: {episodeId}</p>
          <p>Episode: {movieDetails.episode_id}</p>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Director: {movieDetails.director}</p>
          <p>Producer: {movieDetails.producer}</p>
          <p>Opening Crawl: {crawlText} </p>
        </>
      ) : (

        <p>Loading...</p>
      )}
      </div>

      <Link href='/movie-list'>
      <button className='home-btn'>
        Back
      </button>
      </Link>
    </div>
  );
};

export default MovieDetailPage;