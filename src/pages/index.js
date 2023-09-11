import Head from 'next/head';
import Crawl from '@/components/crawl';

const Home = () => {
	return (
		<>
			<Head>
				<title>Starwars</title>
				<meta name="description" content="Starwars" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.jpeg" />
			</Head>
			<div className="nav-shadow"></div>
            <div>
                <Crawl />
            </div>
		</>
	);
};

export default Home;