import React, { useEffect, useState } from 'react';
import Loader03 from '../../../Components/Loaders/Loader03';

const SevenMojos = ({ GameId }) => {

  const storedUserData = localStorage.getItem('user');
  let userData = {};

  if (storedUserData) {
    userData = JSON.parse(storedUserData);
  } else {
    userData.token = "-";
    localStorage.setItem('user', JSON.stringify(userData));
  }



  const playerToken = userData.token;
  // const operatorToken = '654be709f71140f7aa65dcd8cede80d4';
  const operatorToken = 'Fz7tM7xNpfEAm7mHfWzHLatPjGcnOLA8'; 

  
  const [gameUrl, setGameUrl] = useState('');

  useEffect(() => {
    if (playerToken && operatorToken && GameId) {
      const baseUrl = 'https://demo-games.7mojos.com';
      // const baseUrl = 'https://de-clb.svmsrv.com';
      const params = new URLSearchParams({
        playerToken,
        operatorToken,
        language: 'en',

        gameToken: GameId,
        allowDesktopFullscreen: 'true',
        allowMobileFullscreen: 'true',
        // play: 'https://de-cgm.svmsrv.com/live/3/?host=https%3A%2F%2Fde-lce.svmsrv.com&gameToken=rl-3&playerToken=006cfd39-63fa-488f-b377-1ecb404022c3&operatorToken=3482701c311a4777b9118448e94ed14d%23jsk&language=en&allowDesktopFullscreen=true&allowMobileFullscreen=true&enableRefresh=false&behavior=532&bridgeUrl=https%3A%2F%2Fde-rs.svmsrv.com%2Fbridges%2F7mojos%2Fbridge.js',
        // bridgeUrl: 'https%3A%2F%2Fde-rs.svmsrv.com%2Fbridges%2F7mojos%2Fbridge.js',

        enableRefresh: 'true',
      });

      setGameUrl(`${baseUrl}?${params.toString()}`);
    }
  }, [GameId, playerToken, operatorToken]);















  // const playerToken = 'ise9123s12';
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
