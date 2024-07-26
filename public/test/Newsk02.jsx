import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Newx02 = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [userIP, setUserIP] = useState('');
    const [systemId, setSystemId] = useState('998');
    const [page, setPage] = useState('roulette:9dxyqtvp0rjqvu6r');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const storedLogin = localStorage.getItem('login');
        const storedPassword = localStorage.getItem('password');
        const storedUserIP = localStorage.getItem('userIP');

        

        if (storedLogin) setLogin(storedLogin);
        if (storedPassword) setPassword(storedPassword);
        if (storedUserIP) setUserIP(storedUserIP);
    }, []);

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                console.log('Fetching URL with:', { login, password, userIP, systemId, page }); // Added for debugging
                const response = await axios.post('https://admin.alphabet7.com/public/api/launch-game', {
                    login,
                    password,
                    userIP,
                    systemId,
                    page,
                });
                setGeneratedUrl(response.data.url);
                setError('');
            } catch (error) {
                setError('Failed to generate game URL');
                console.error(error);
            }
        };

        if (login && password && userIP && systemId && page) {
            fetchUrl();
        }
    }, [login, password, userIP, systemId, page]);

    return (
        <div>
            <h1>Game Launcher</h1>
            {generatedUrl ? (
                <>
                <iframe src={generatedUrl} width="100%" height="600px" />
                <a href={generatedUrl} target='_black'>fetch game</a>
                </>
            ) : (
                <p>Loading...</p>
            )}
            {error && (
                <div style={{ color: 'red' }}>
                    <h2>Error</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default Newx02;