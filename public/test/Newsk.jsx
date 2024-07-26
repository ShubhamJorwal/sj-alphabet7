import React, { useState, useEffect } from 'react';
import md5 from 'md5';

const Newsk = () => {
    const [generatedUrl, setGeneratedUrl] = useState('');

    // Load environment variables
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_PASSWORD = import.meta.env.VITE_API_PASSWORD;
    const SERVER = import.meta.env.VITE_SERVER;
    const CASINO_SERVER_IP = import.meta.env.VITE_CASINO_SERVER_IP;
    const SYSTEM_ID = '998';
    const PAGE = 'roulette:9dxyqtvp0rjqvu6r';

    const generateTID = () => {
        return Math.random().toString(36).substr(2, 32) + Date.now();
    };

    const generateHash = (endpoint, casinoServerIp, tid, key, login, password, systemId, apiPassword) => {
        const data = `${endpoint}/${casinoServerIp}/${tid}/${key}/${login}/${password}/${systemId}/${apiPassword}`;
        return md5(data);
    };

    useEffect(() => {
        const login = localStorage.getItem('login') || '';
        const password = localStorage.getItem('password') || '';
        const userIP = localStorage.getItem('userIP') || '';

        const tid = generateTID();
        const endpoint = 'User/AuthHTML';
        const hash = generateHash(endpoint, CASINO_SERVER_IP, tid, API_KEY, login, password, SYSTEM_ID, API_PASSWORD);

        const params = {
            Login: login,
            Password: password,
            System: SYSTEM_ID,
            TID: tid,
            Hash: hash,
            Page: PAGE,
            UserIP: userIP,
        };

        const url = `https://${SERVER}/System/Api/${API_KEY}/${endpoint}`;
        const fullUrl = `${url}/?${new URLSearchParams(params).toString()}`;

        console.log('Generated URL:', fullUrl);
        setGeneratedUrl(fullUrl);
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div>
            <h1>Game Launch</h1>
            {generatedUrl && (
                <>
                    <h2>Generated URL</h2>
                    <a href={generatedUrl} target='_blank'>{generatedUrl}</a>
                    {/* <iframe
                        src={generatedUrl}
                        width="100%"
                        height="600px"
                        frameBorder="0"
                        title="Game Frame"
                    ></iframe> */}
                </>
            )}
        </div>
    );
};

export default Newsk;
