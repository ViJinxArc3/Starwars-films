import Link from 'next/link';
import { useState, useEffect } from 'react';



const Crawl = () => {
  const [crawlStopped, setCrawlStopped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleButtonClick = () => {
    setIsLoading(true);
  }
  // Use useEffect to detect when the crawl animation ends
  useEffect(() => {
    const crawlElement = document.querySelector('.crawl');

    // Function to handle the end of the crawl animation
    const handleCrawlEnd = () => {
      setCrawlStopped(true);
    };

    // Add an event listener to detect the end of the crawl animation
    crawlElement.addEventListener('animationend', handleCrawlEnd);

    // Clean up the event listener when the component unmounts
    return () => {
      crawlElement.removeEventListener('animationend', handleCrawlEnd);
    };
  }, []);

  return (
    <div>
      <div className="fade"></div>
      <section className="star-wars">
        <div className={`crawl ${crawlStopped ? 'stopped' : ''}`}>
          <div className="title">
          {crawlStopped && (
             <Link href="/movie-list">
               <button
                  className="crawl-button"
                  onClick={handleButtonClick}
                  disabled={isLoading}
                >
                  {isLoading ? 'Loading...' : 'Explore the Saga'}
                </button>
           </Link>
      )}
            <h1>A long time ago in a galaxy far, far away...</h1>
          </div>
          <p>Amidst the stars and galaxies, a new adventure awaits you.</p>      
        <p>In a quest to explore the epic saga of the Star Wars universe,
            we present to you a portal to history.
            </p>
        <p>Join us as we embark on a timeless voyage,
            revealing the tales of heroes and villains,
            the rise and fall of empires,
            and the Force that binds the galaxy together.</p>
            <p>Our mission: to guide you through the cinematic odyssey
            in the years it unfolded.</p>
            <p>Prepare to be immersed in the Force,
            to witness the destiny of iconic characters,
            and to experience the magic of George Lucas's creation.
            </p>
            <p>May the Force be with you as you navigate our site
            and rediscover the Star Wars saga like never before.
            </p>
            <p>
            This is your destiny, young Padawan...</p>
        </div>
      </section>

    
    </div>
  );
}

export default Crawl;