import React, { useEffect, useState } from 'react';
import Loader03 from '../../../Components/Loaders/Loader03';

const SevenMojos = ({ GameId }) => {
  const playerToken = 'ise9123s12'; // Example player token, handle securely
  const operatorToken = 'Fz7tM7xNpfEAm7mHfWzHLatPjGcnOLA8'; // Example operator token, handle securely

  const [gameUrl, setGameUrl] = useState('');

  useEffect(() => {
    if (playerToken && operatorToken && GameId) {
      const baseUrl = 'https://demo-games.7mojos.com';
      const params = new URLSearchParams({
        gameToken: GameId,
        playerToken,
        operatorToken,
        language: 'en',
        allowDesktopFullscreen: 'true',
        allowMobileFullscreen: 'true',
        enableRefresh: 'true',
      });

      setGameUrl(`${baseUrl}?${params.toString()}`);
    }
  }, [GameId, playerToken, operatorToken]);

  if (!gameUrl) {
    return <Loader03 />; // Show loader while fetching game URL
  }

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={gameUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="7Mojos Game"
      />
    </div>
  );
};

export default SevenMojos;






































// import React, { useEffect, useState } from 'react';
// import Loader03 from '../../../Components/Loaders/Loader03';

// const SevenMojos = ({ GameId }) => {
//   const playerToken = 'ise9123s12';
//   const operatorToken = 'Fz7tM7xNpfEAm7mHfWzHLatPjGcnOLA8';

//   const [gameUrl, setGameUrl] = useState('');

//   useEffect(() => {
//     if (playerToken && operatorToken && GameId) {
//       // const baseUrl = `https://demo-games.7mojos.com/`;
//       const baseUrl = `https://demo-games.7mojos.com`;
//       const params = new URLSearchParams({
//         // type: '2', // this could be dynamic if needed
//         // host: 'https://demo-slots-engine.7mojos.com',
//         gameToken: GameId,
//         playerToken,
//         operatorToken,
//         // lobbyUrl: 'www.example-lobby-url.com', // this could be dynamic if needed
//         // cashierUrl: 'www.example-cashier-url.com', // this could be dynamic if needed
//         language: 'en', // optional, change as needed
//         allowDesktopFullscreen: 'true', // optional
//         allowMobileFullscreen: 'true', // optional
//         enableRefresh: 'true', // optional
//       });

//       setGameUrl(`${baseUrl}?${params.toString()}`);
//     }
//   }, [GameId, playerToken, operatorToken]);

//   if (!gameUrl) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
    
//     {/* {isLoading && <Loader03/> } */}

    
//       <div style={{ width: '100%', height: '100vh' }}>
//         <iframe
//           src={gameUrl}
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           allowFullScreen
//           title="7Mojos Game"
//         />
//       </div>
//     </>
//   );
// };

// export default SevenMojos;
