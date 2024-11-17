import React, { useEffect } from 'react';
import { Navbar, Footer } from "../components";
import styles from '../style';

const Present2024 = () => {
  const researchGateLink = "YOUR_RESEARCH_GATE_LINK"; // Replace with your actual ResearchGate link
  const imageUrl = "https://asset.cloudinary.com/dlxh3nrry/7acfc0610aa2c0bc903cd2d36aa079e2"; // Image link
  const podcastLink = "https://open.spotify.com/show/4hfSOTDIXK4yEnESnEbAzn"; // Podcast link

  useEffect(() => {
    // Load the Spotify iFrame API script
    const script = document.createElement('script');
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);

    // Define the onSpotifyIframeApiReady function
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById('embed-iframe');
      const options = {
        width: '100%',
        height: '160',
        uri: 'spotify:episode:7makk4oTQel546B0PZlDM5' // Default episode
      };
      const callback = (EmbedController) => {
        document.querySelectorAll('.episode').forEach(
          episode => {
            episode.addEventListener('click', () => {
              EmbedController.loadUri(episode.dataset.spotifyId);
            });
          });
      };
      IFrameAPI.createController(element, options, callback);
    };
  }, []);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <h2 className={`${styles.heading2} text-center`}>
            Research
          </h2>
          <p className={`${styles.paragraph} mt-5 mb-5 text-center italic`}>
            Driving the next generation of national security space capabilities.
          </p>
          
          {/* New Image and Podcast Section */}
          <div className="flex flex-col items-center mt-10">
            <img src={imageUrl} alt="Descriptive Alt Text" className="w-full max-w-md mb-5" /> {/* Display the image */}
            
            {/* Embedded Podcast Players */}
            <div className="mb-5">
              <h3 className="text-lg font-bold">Listen to Our Podcasts</h3>
              <div className="episodes">
                <button className="episode" data-spotify-id="spotify:episode:7makk4oTQel546B0PZlDM5">
                  My Path to Spotify: Women in Engineering
                </button>
                <button className="episode" data-spotify-id="spotify:episode:43cbJh4ccRD7lzM2730YK3">
                  What is Backstage?
                </button>
                <button className="episode" data-spotify-id="spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV">
                  Introducing Nerd Out@Spotify
                </button>
              </div>
              <div id="embed-iframe" className="mt-4"></div>
            </div>

            {/* Button linking to the podcast */}
            <a href={podcastLink} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white py-2 px-4 rounded mb-4">
              Listen to Our Podcast
            </a>

            <a href={researchGateLink} target="_blank" rel="noopener noreferrer" className="bg-secondary text-white py-2 px-4 rounded">
              Visit Our ResearchGate
            </a>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Present2024;
