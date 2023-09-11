

import crawlData from '../data/crawl-data.json';

export const fetchCrawlForEpisode = (episodeId) => {
  // Check if the episode ID exists in the JSON data
  if (crawlData.hasOwnProperty(episodeId)) {
    return crawlData[episodeId];
  } else {
    return null; // Return null for episodes not found
  }
};
