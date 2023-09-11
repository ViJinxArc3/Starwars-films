import fetch from 'isomorphic-unfetch';
import Link from 'next/link';


// Fetched data is passed as 'shows' props to the MovielistPage, which
// is used to render the movie details
const MovieListPage = ({ shows }) => (
  <div>
  <h1 className="film-title">Star Wars Films</h1>
  <ul className="film-list">


    {shows.results.map((film) => (
      <li key={film.episode_id} className="film-item">
        <Link href={`/movie/${film.episode_id}`}>
            <div className="film-image">
              <img
                src={`https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`}
                alt={`Poster for ${film.title}`}
              />
              <div className='img-content'>
                <h1>Show More</h1>
              </div>
            </div>
        </Link>
      </li>
    ))}
  </ul>

<Link href='/'>
<button className='home-btn'>The Crawl was cool, i want to see it again!</button>
</Link>

  </div>
);

//'getinitial props used for data fetching on the server.'

MovieListPage.getInitialProps = async function () {
  const res = await fetch('https://swapi.dev/api/films');
  const data = await res.json();
  console.log(`Data fetched. Film count: ${data.count}`);
  return {
    shows: data,
  };
};

export default MovieListPage;